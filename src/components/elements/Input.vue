<template>
	<div class="input__block" :class="{ 'error': error, 'success': valid }">
		<div class="input__block__label" v-if="label">
			<label for="">
        {{ labelComputedValue }}
        <span v-if="props.required">*</span>
      </label>
		</div>
		<slot v-if="!label" />
		<div class="input__block__input">
			<input
				v-model="inputValue"
				:id="props.id"
				:name="props.name"
				:minlength="props.min"
				:maxlength="props.max"
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
	type: String,
	id: String,
	name: String,
	min: {
		types: [String, Number],
		default: () => 0,
	},
	max: [String, Number],
	placeholder: String,
	required: Boolean,
	readonly: Boolean,
	plainText: Boolean,
	disabled: Boolean,
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
.input__block {
	--input-height: 40px;
	--input-padding-y: 0.5rem;
	--input-padding-x: 0.85rem;
	--input-border-color: #656565;
	--input-bg-color: transparent;
	--input-color: #cccccc;
	--input-label: #ffffff;
	--input-font-size: inherit;
	--input-font-family: inherit;
	--input-hover-bg-color: #ffffff;
	--input-hover-color: #ffffff;
	
	width: 100%;
	margin-bottom: 1rem;

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
		}
	}
	&.error {
		--input-border-color: var(--danger);
		--input-bg-color: transparent;
		--input-color: var(--danger);
	}
	&.success {
		--input-border-color: var(--success);
		--input-bg-color: transparent;
		--input-color: var(--success);
	}
}
</style>
