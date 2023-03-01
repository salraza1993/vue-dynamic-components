<template>
	<div 
		class="input-block" 
		:style="`--input-range-gradient-size: ${rangeComputedValue || inputValue }%`"
		:class="[
			`input-block__type--${props.type}`,
			{ 
				'input-block--error': errorClass, 
				'input-block--success': successClass,
				'input-block--disabled': props.disabled,
				'input-block--plain': props.plain,
			}
		]">
		<div class="input-block__label-container" v-if="label">
			<label :for="props.id" class="input-block__label-container__label" :class="labelClass">
        {{ labelComputedValue }}
        <span v-if="props.required" class="text--danger">*</span>
      </label>
		</div>
		<slot v-if="!label" />
		<div 
			class="input-block__input-container" 
			:class="[inputContainerClass, { 'input-block__input-container--error': error }]">
			<input
				:class="[
					`input-block__type--${props.type}`,
					inputClass, 
					{ 
						'input--error': error && !props.disabled, 
						'input--success': valid && !props.disabled,
						'input--disabled': props.disabled,
						'input--plain': props.plain,
					}
				]"
				@blur="inputValidation(inputValue)"
				v-model="inputValue"
				:id="props.id"
				:name="props.name"
				:type="props.type || 'text'"
				:placeholder="props.placeholder || 'Enter something...'"
				:disabled="props.disabled"
				:readonly="props.readonly || props.plain"
				:required="props.required"
				:step="props.step"
				:minlength="props.minlength"
				:maxlength="props.maxlength"
				:min="props.min"
				:max="props.max"
			/>
			<small v-if="error" class="error-message" :class="{ 'text--danger': error }">{{ errorMessage }}</small>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";
const props = defineProps({
	modelValue: { type: String },
	label: [String, Boolean ],
	labelClass: [String],
	inputClass: [String],
	inputContainerClass: [String],
	type: {type: String, default: () => 'text'},
	id: String,
	name: String,
	placeholder: String,
	
	// ======== [ validations ] ======== //
	min: { types: [String, Number] },
	max: { types: [String, Number] },
	minlength: { types: [String, Number] },
	maxlength: { types: [String, Number] },
	required: Boolean,
	plain: Boolean,
	readonly: Boolean,
	plainText: Boolean,
	disabled: Boolean,
	step: { type: [Number, String] },
	validate: {type: Boolean, default: false},
	
	// ======== [ styling ] ======== //
	lowercase: { type: Boolean, default: false },
	capitalize: { type: Boolean, default: false },
	camelCase: { type: Boolean, default: false },
	uppercase: { type: Boolean, default: false },
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

// Email Verifier
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

// ===============[ computed methods, Begin ]=============== //
// computed Input Value
const inputValue = computed({
	get() {
		return props.modelValue === undefined ? '' : String(props.modelValue);
	},
	set(newValue) {
		const value = String(newValue);
		inputValidation(value);
		if(props.capitalize || props.camelCase) {
			return emit("update:modelValue", textFormating(value, 'capitalize'));
		}
		if(props.lowercase) {
			return emit("update:modelValue", textFormating(value, 'lowercase'));
		}
		if(props.uppercase) {
			return emit("update:modelValue", textFormating(value, 'uppercase'));
		}
		emit("update:modelValue", value);
	},
});

// Input range computed value
const rangeComputedValue = computed(() => {	
	return Math.floor(((inputValue.value - props?.min) / ((props?.max - props?.min) / 100)));
})

const successClass = computed(() => valid.value && props.validate && inputValue.value?.length > 0);
const errorClass = computed(() => error.value && !props.disabled && !props.readonly);
// ===============[ computed methods, End ]=============== //

// input validation function
const inputValidation = (value) => {
	if(value?.length <= 0 && !props.required) {
		valid.value = false;
	} 
	else if (value.length <= 0 && props.required || value.length <= 0 && props.required && props.validate) {
		error.value = true;
		valid.value = false;
		errorMessage.value = `This field is required`;
	}
	else if (value.length <= props.minlength || value <= props.min && props.validate) {
		error.value = true;
		valid.value = false;
		if(props.type === 'range') {
			errorMessage.value = `Range value cannot be less than ${props.min}`;
		} else {
			errorMessage.value = `The letters cannot be less than ${props.minlength}`;
		}
	} 
	else if (value.length >= props.maxlength || value > props.max && props.validate) {
		error.value = true;
		valid.value = false;
		if(props.type === 'range') {
			errorMessage.value = `Range value cannot be more than ${props.max}`;
		} else {
			errorMessage.value = `The letters cannot be more than ${props.maxlength}`;
		}
	} 
	else {
		error.value = false;
		valid.value = true;
		
		// email validation
		if(props.type === 'email' && props.validate) {
			if(isEmailAddress(value)) console.log(value)
			else {
				error.value = true;
				errorMessage.value = 'Please, use valid email ID.';
				valid.value = false;
			}
		} 
	}
}

const textFormating = (values, formate) => {
	if(values.length > 0) {
		if(formate === 'uppercase') {
			return values.toUpperCase();
		} else if(formate === 'capitalize' || formate === 'camelcase') {
			return values.split(' ').map(letter => letter[0].toUpperCase() + letter.substring(1).toLowerCase()).join(' ');
		}
		return values.toLowerCase();			
	}
}

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
	--input-height: 45px;
	--input-container-height: 45px;
	--input-padding-y: 0.5rem;
	--input-padding-x: 0.85rem;
	--input-margin-bottom: 1rem;

	--input-border-width: 1px;
	--input-border-style: solid;
	--input-border-radius: var(--border-radius, 0.35rem);
	--input-border-color: var(--border-color, #a0aba6);

	--input-bg-color: var(--white, #ffffff);
	--input-color: var(--dark, #252525);
	--input-label: var(--white, #ffffff);
	--input-font-size: inherit;
	--input-font-family: inherit;
	
	--input-border-hover-color: transparent;
	--input-bg-hover-color: var(--white, #ffffff);
	--input-hover-color: var(--black, #1C1C1C);
	--input-focus-outline-color: rgba(var(--white-rgb), 0.15);
	--input-focus-outline-width: 3px;

	&--plain {
		--input-padding-y: 0;
		--input-padding-x: 0;
		--input-border-width: 0;
		--input-bg-color: transparent;
		--input-color: var(--white, #ffffff);
	}
	
	&__type {
		&--color {
			--input-padding-y: 0.1rem;
			--input-padding-x: 0.25rem;
		}
		
		&--range {
			--input-padding-y: 0.1rem;
			--input-padding-x: 0.25rem;
			--input-bg-color: transparent;
			--input-bg-hover-color: transparent;

			--input-range-gradient-size: 0;
			--input-range-bg-color: #1C1C1C;
			--gradient-active-first-color: var(--primary, #42b883);
			--gradient-active-second-color: #022b18;
			
			--input-range-bg-image: linear-gradient(to right, 
				var(--gradient-active-first-color) 0%, var(--gradient-active-second-color) var(--input-range-gradient-size), 
				var(--gradient-none-selected-color, var(--input-range-bg-color)) var(--input-range-gradient-size), 
				var(--gradient-none-selected-color, var(--input-range-bg-color)) 100%);
			
			--input-range-bar-height: 10px;
			--input-thumb-color: var(--primary, #42b883);
			--input-thumb-width: 20px;
			--input-thumb-hover-width: 30px;
			display: grid;
			&.input-block--error {
				--gradient-active-first-color: var(--danger, #d66666);
				--gradient-active-second-color: #330101;
				border: 1px solid var(--input-border-color);
				padding-block-start: 0.92rem;
				margin-bottom: calc(var(--input-margin-bottom) + 0.92rem);
				max-height: var(--input-container-height);
				.error-message { position: relative; bottom: -1rem; }
				input { --input-thumb-color: #ffffff; }
			}
			align-items: center;
			.input-block {
				&__input-container {
					--input-height: 10px;
					isolation: isolate;
					display: flex;
					flex-direction: column;
					&::after, &::before {
						content: '';
						position: absolute;
						left: 0;
						height: var(--input-height);
						border-radius: var(--input-height);
						width: 100%;
					}
					&::before {
						z-index: -1;
						background-color: var(--input-range-bg-color);
					}
					&::after {
						background: var(--input-range-bg-image);
						z-index: -1;
					}
					input {
						position: relative;
						--input-height: var(--input-range-bar-height);
						border-radius: var(--input-height);
						height: var(--input-height);
						outline: none;
						transition: all 450ms ease-in;
						border: 1px solid var(--input-bg-color);
						-webkit-appearance: none;
						appearance: none;

						&::-webkit-slider-thumb {
							width: var(--input-thumb-width);
							height: var(--input-thumb-width);
							border-radius: 50%;
							-webkit-appearance: none;
							appearance: none;
							cursor: ew-resize;
							background: var(--input-thumb-color);
						}
						&::-moz-range-thumb {
							width: var(--input-thumb-width);
							height: var(--input-thumb-width);
							border-radius: 50%;
							cursor: ew-resize;
							border: 0;
							background: var(--input-thumb-color);
						}
						&::-ms-thumb {
							width: var(--input-thumb-width);
							height: var(--input-thumb-width);
							border-radius: 50%;
							cursor: ew-resize;
							border: 0;
							background: var(--input-thumb-color);
						}
					}
					// &--error {}
				}
			}
		}
	}
	width: var(--input-width, 100%);
	margin-bottom: var(--input-margin-bottom);
	min-height: var(--input-height);

	&__label-container, &__label, label {
		color: var(--input-label);
		margin-bottom: 0.5rem;
	}
	&__input-container {
		position: relative;
		input {
			width: 100%;
			height: var(--input-height);
			font-size: var(--input-font-size);
			font-family: var(--input-font-family);
			padding-block: var(--input-padding-y);
			padding-inline: var(--input-padding-x);
			border: var(--input-border-width) var(--input-border-style) var(--input-border-color);
			background-color: var(--input-bg-color);
			color: var(--input-color);
			outline: none;
			appearance: none;
			transition: var(--transition);

			&::placeholder { color: var(--input-color); }
			
			&:not(:disabled, :invalid, .input--error, .input--success, .input--plain):focus, 
			&:not(:disabled, :invalid, .input--error, .input--success, .input--plain):hover,
			&:is(:required):not(.input--error, .input--success):focus, 
			&:is(:required):not(.input--error, .input--success):hover {
				border-color: var(--input-border-hover-color);
				background-color: var(--input-bg-hover-color);
				color: var(--input-hover-color);
				box-shadow: 0 0 0 var(--input-focus-outline-width) var(--input-focus-outline-color);
			}
		}
		.error-message { display: inline-block; }
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
			&:not(:disabled, :invalid):focus, 
			&:not(:disabled, :invalid):hover {
				border-color: var(--input-border-color);
				background-color: var(--input-bg-color);
				color: var(--input-color);
				box-shadow: 0 0 0 var(--input-focus-outline-width) var(--input-focus-outline-color);
			}
		}
	}
	&--disabled {
		--input-border-color: #363636;
		--input-bg-color: #666666;
		--input-color: #b6b6b6;
		cursor: not-allowed;
	}
	&:is(&.rounded, &.input-rounded) {
		input {
			border-radius: var(--input-border-radius);
		}
	}
}
</style>
