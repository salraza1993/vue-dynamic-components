<template>
	<div 
		class="input-block" 
		:style="`--input-range-gradient-size: ${inputValue}%`"
		:class="[
			`input-block__type--${props.type}`,
			{ 
				'input-block--error': error, 
				'input-block--success': valid && validate, 
			}
		]">
		<div class="input-block__label" v-if="label">
			<label :for="props.id" :class="labelClass">
        {{ labelComputedValue }}
        <span v-if="props.required">*</span>
      </label>
		</div>
		<slot v-if="!label" />
		<div class="input-block__input" :class="inputContainerClass">
			<input
				:class="[
					`input-block__type--${props.type}`,
					inputClass, 
					{ 'input--error': error, 'input--success': valid }
				]"
				v-model="inputValue"
				:id="props.id"
				:name="props.name"
				:minrange="props.min"
				:maxrange="props.max"
				:min="props.min"
				:max="props.max"
				:type="props.type || 'text'"
				:placeholder="props.placeholder || 'Enter something...'"
				:disabled="props.disabled"
				:readonly="props.readonly"
				:required="props.required"
			/>
			<small v-if="error" :class="{ 'text--danger': error }">{{ errorMessage }}</small>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";
const props = defineProps({
	modelValue: String,
	label: [String, Boolean ],
	labelClass: [String],
	inputClass: [String],
	inputContainerClass: [String],
	type: {type: String, default: () => 'text'},
	id: String,
	name: String,
	min: { types: [String, Number], default: () => 0 },
	max: [String, Number],
	minRange: { types: [String, Number], default: () => 0 },
	maxRange: [String, Number],
	placeholder: String,
	required: Boolean,
	readonly: Boolean,
	plainText: Boolean,
	disabled: Boolean,
	step: [Number, String],
	validate: {type: Boolean, default: false},
});
const emit = defineEmits(["update:modelValue"]);
const error = ref(false);
const errorMessage = ref("This field is required!");
const valid = ref(false);

const checkDefaultValue = () => {
	if(String(props.modelValue)?.length > 2) {
		valid.value = true;
		return
	}
}

const isEmailAddress = str => {
	const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
	return str.match(pattern);
}

onBeforeMount(() => {
	checkDefaultValue()
})

const labelComputedValue = computed(() => {
	return props.label === true ? 'Block Label' : props.label
})

const inputValue = computed({
	get() {
		return String(props.modelValue);
	},
	set(newValue) {
		const value = String(newValue);
		if(value?.length <= 0 && !props.required) {
			valid.value = false;
		} 
		else if (value.length <= props.min && props.required) {
			error.value = true;
			valid.value = false;
			errorMessage.value = `This field is required`;
		}
		else if (value.length <= props.min) {
			error.value = true;
			valid.value = false;
			errorMessage.value = `The letters cannot be less than ${props.min}`;
		} 
		else if (value.length >= props.max) {
			error.value = true;
			valid.value = false;
			errorMessage.value = `The letters cannot be more than ${props.max}`;
		} 
		// else if(value.length > props.min || String(props.modelValue)?.length > props.min) {
		// 	error.value = false;
		// 	valid.value = true;
		// } 
		else {
			error.value = false;
			valid.value = true;
			if(props.type === 'email') {
				if(isEmailAddress(value)) {
					console.log(value)
				}
				else {
					error.value = true;
					errorMessage.value = 'Please, use valid email ID.';
					valid.value = false;
				}
			} 
		}
		emit("update:modelValue", value);
	},
});

// https://www.youtube.com/watch?v=BdZFZO_mQXU&list=PLbGui_ZYuhih5ItBhn2cTncaS24_Kgeui&index=22&ab_channel=GeekyShows
// https://vuejsexamples.com/
</script>
<script>
export default {
	name: "InputElement",
};
</script>

<style lang="scss" scoped>
.input-block {
	--input-height: 40px;
	--input-padding-y: 0.5rem;
	--input-padding-x: 0.85rem;
	--input-border-color: var(--border-color, #a0aba6);
	--input-bg-color: var(--white, #ffffff);
	--input-color: var(--dark, #252525);
	--input-label: var(--white, #ffffff);
	--input-font-size: inherit;
	--input-font-family: inherit;

	--input-range-gradient-size: 0;
	--input-range-bg-color: #1C1C1C;
	--gradient-active-first-color: var(--primary, #42b883);
	--gradient-active-second-color: #022b18;
	--input-range-bg-image: linear-gradient(to right, 
		var(--gradient-active-first-color) 0%, var(--gradient-active-second-color) var(--input-range-gradient-size), 
		var(--gradient-none-selected-color, var(--input-range-bg-color)) var(--input-range-gradient-size), 
		var(--gradient-none-selected-color, var(--input-range-bg-color)) 100%);

	--input-thumb-color: var(--primary, #42b883);
	--input-thumb-width: 20px;
	--input-thumb-hover-width: 30px;
	
	--input-border-hover-color: transparent;
	--input-bg-hover-color: var(--white, #ffffff);
	--input-hover-color: var(--black, #1C1C1C);
	--input-focus-outline-color: rgba(var(--white-rgb), 0.15);
	--input-focus-outline-width: 3px;
	
	&__type {
		&--color {
			--input-padding-y: 0.1rem;
			--input-padding-x: 0.25rem;
		}
		
		&--range {
			--input-padding-y: 0.1rem;
			--input-padding-x: 0.25rem;
			--input-bg-color: var(--black-mute);
			--input-bg-hover-color: var(--black-mute);
			display: grid;
			align-items: center;
			
			input {
				--input-height: 10px;
				background: var(--input-range-bg-image);
				border-radius: 8px;
				height: var(--input-height);
				outline: none;
				transition: all 450ms ease-in;
				border: 1px solid var(--input-bg-color);
				-webkit-appearance: none;
				&::-webkit-slider-thumb {
					width: var(--input-thumb-width);
					height: var(--input-thumb-width);
					border-radius: 50%;
					-webkit-appearance: none;
					cursor: ew-resize;
					background: var(--input-thumb-color);
				}
				&::-moz-range-thumb {
					width: var(--input-thumb-width);
					height: var(--input-thumb-width);
					border-radius: 50%;
					-webkit-appearance: none;
					cursor: ew-resize;
					background: var(--input-thumb-color);
				}
			}
		}
	}
	width: 100%;
	margin-bottom: 1rem;
	min-height: var(--input-height);

	&__label, label {
		color: var(--input-label);
		margin-bottom: 0.5rem;
	}
	&__input {
		input {
			width: 100%;
			height: var(--input-height);
			font-size: var(--input-font-size);
			font-family: var(--input-font-family);
			padding-block: var(--input-padding-y);
			padding-inline: var(--input-padding-x);
			border: 1px solid var(--input-border-color);
			background-color: var(--input-bg-color);
			color: var(--input-color);
			outline: none;
			appearance: none;
			transition: var(--transition);
			&::placeholder {
				color: var(--input-color);
			}
			&:not(:invalid, .input--error, .input--success):focus, 
			&:not(:invalid, .input--error, .input--success):hover {
				border-color: var(--input-border-hover-color);
				background-color: var(--input-bg-hover-color);
				color: var(--input-hover-color);
				box-shadow: 0 0 0 var(--input-focus-outline-width) var(--input-focus-outline-color);
			}
		}
	}
	&--error {
		--input-border-color: var(--danger);
		--input-bg-color: rgba(var(--danger-rgb), .15);
		--input-color: var(--white);
		--input-focus-outline-color: rgba(var(--danger-rgb), 0.15);
		input {
			&:focus, &:hover {
				box-shadow: 0 0 0 var(--input-focus-outline-width) var(--input-focus-outline-color);
			}
		}
	}
	&--success {
		--input-border-color: var(--success);
		--input-bg-color: rgba(var(--success-rgb), .15);
		--input-color: var(--white);
		--input-focus-outline-color: rgba(var(--success-rgb), 0.15);
		input {
			&:focus, &:hover {
				box-shadow: 0 0 0 var(--input-focus-outline-width) var(--input-focus-outline-color);
			}
		}
	}
}
</style>
