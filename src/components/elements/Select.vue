<template>
  <div 
    class="select-block"
		:class="[
			{ 
				'select-block--error': errorClass, 
				'select-block--success': successClass,
				'select-block--disabled': props.disabled,
				'select-block--plain': props.plain,
			}
		]">
    <div class="select-block__label-container" v-if="label">
      <label :for="props.id" class="select-block__label-container__label" :class="labelClass">
        {{ labelComputedValue }}
        <span v-if="props.required" class="text--danger">*</span>
      </label>
    </div>
    <slot v-if="!label" />
    <div 
      class="select-block__select-container"
      :class="[selectContainerClass, { 'select-block__select-container--error': error }]">

			<template v-if="checkOptionsType === 'string'">
				<select 
					class="select-block__select"
					:class="[ selectClass, { 
						'select--error': error && !props.disabled, 
						'select--success': valid && !props.disabled,
						'select--disabled': props.disabled,
						'select--plain': props.plain,
						'select--squired': props.squired,
						}
					]"
					:name="props.name" 
					:id="props.id"
					@blur="selectValidation(selectedValue)"
					@change="inputHandler($event)">

					<option v-if="placeholder" value="">{{ placeholder }}</option>					
					<option 
						:value="option" 
						v-for="option in options" 
						:key="option"
						:selected="option === modelValue"
					>{{ option }}</option>
				</select>
			</template>

			<template v-else>
				<select 
					class="select-block__select"
					:class="[ selectClass, { 
						'select--error': error && !props.disabled, 
						'select--success': valid && !props.disabled,
						'select--disabled': props.disabled,
						'select--plain': props.plain,
						'select--squired': props.squired,
						}
					]"
					:name="props.name" 
					:id="props.id"
					@blur="selectValidation(selectedValue)"
					@change="inputHandler($event)">

					<option v-if="placeholder" value="">{{ placeholder }}</option>
					
					<option 
						:value="option[valueField]" 
						v-for="option in nonGroupedOptions" 
						:key="option.value"
						:selected="option.value === modelValue"
						:disabled="option[notEnabled]"
						>
						{{ option[textField] }}
					</option>
					
					<optgroup :label="group.label" v-for="group in groupedOptions" :key="group.label">
						<option :value="option[valueField]" v-for="option in group.options" :key="option.text">
							{{ option[textField] }}
						</option>
					</optgroup>
				</select>
			</template>
      <small v-if="error" class="error-message" :class="{ 'text--danger': error }">{{ errorMessage }}</small>
    </div>
  </div>
</template>

<script>
export default { name: "SelectComponent", }
</script>
<script setup>
import { ref, computed, onMounted } from "vue";

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: { type: String },
  label: [String, Boolean ],
  labelClass: [String],
  selectClass: [String],
	selectContainerClass: [String],
  id: {type: [String, Number]},
  name: {type: String},
  required: Boolean,
	plain: Boolean,
	readonly: Boolean,
	plainText: Boolean,
	disabled: Boolean,
	squired: Boolean,
	placeholder: {type: String, default: () => '-- Select --'},
	validate: {type: Boolean, default: false},
	textField: {type: String, default: () => 'text'},
	valueField: {type: String, default: () => 'value'},
	notEnabled: {type: String, default: () => 'disabled'},
  options: {
    type: [Object, Array],
    default: () => [
      { value: null, text: '-- Select --' },
      { value: 'option one', text: 'Option Name' },
    ]
  }
});

const selectedValue = ref(props.modelValue);

const error = ref(false);
const errorMessage = ref("This field is required!");
const valid = ref(false);

const successClass = computed(() => valid.value && props.validate  && selectedValue.value);
const errorClass = computed(() => error.value && !props.disabled && !props.readonly);
const groupedOptions = computed(() => {
	return props.options.filter(item => {
		if(item.label) return item.options
	})
});
const nonGroupedOptions = computed(() => {
	return props.options.filter(item => {
		if(!item.label) return item
	})	
});

const labelComputedValue = computed(() => {
	return props.label === true ? 'Block Label' : props.label
})
const checkOptionsType = computed(() => {
	let option_type = 'string';
	if(props.options.length > 0 && typeof props.options[0] !== 'string') {
		option_type = 'object';
	}
	return option_type;
})



const inputHandler = (event) => {
  let select_value = event.target.value;
  selectedValue.value = select_value;
  selectValidation(selectedValue.value)
  emit("update:modelValue", select_value);
}
onMounted(() => {
  // selectValidation(selectedValue.value)
}) 

const selectValidation = (event) => {
  if((event == null || event.includes('--') || event === '') && props.required) {
    error.value = true;
    valid.value = false;
  } else {
    error.value = false;
    if(props.validate) {
			valid.value = true;
		}
  }
}

</script>

<style lang="scss" scoped>

.select-block {
  
  @mixin elementColor($color: 333333) {
    // pass $color value without '#' wherever it's needed
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23#{$color}' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E");
  }
  --select-height: 45px;
	--select-container-height: 45px;
	--select-padding-y: 0.5rem;
	--select-padding-x: 0.85rem;
	--select-margin-bottom: 1rem;

	--select-border-width: 1px;
	--select-border-style: solid;
	--select-border-radius: var(--border-radius, 0.35rem);
	--select-border-color: var(--border-color, #a0aba6);

	--select-bg-color: var(--white, #ffffff);
	--select-color: var(--dark, #252525);
	--select-label: var(--white, #ffffff);
	--select-font-size: inherit;
	--select-font-family: inherit;

	--select-option-color: inherit;
	--select-option-bg-color: var(--primary);
	
	--select-border-hover-color: transparent;
	--select-bg-hover-color: var(--white, #ffffff);
	--select-hover-color: var(--black, #1C1C1C);
	--select-focus-outline-color: rgba(var(--white-rgb), 0.15);
	--select-focus-outline-width: 3px;
	--select-border-radius: var(--border-radius, 0.35rem);


	&--plain {
		--select-padding-y: 0;
		--select-padding-x: 0;
		--select-border-width: 0;
		--select-bg-color: transparent;
		--select-color: var(--white, #ffffff);
	}
	
  

	width: var(--select-width, 100%);
	margin-bottom: var(--select-margin-bottom);
	min-height: var(--select-height);

	&__label-container, &__label, label {
		color: var(--select-label);
		margin-bottom: 0.5rem;
	}
	&__select-container {
		position: relative;		
		select {
			border-radius: var(--select-border-radius);
			width: 100%;
			height: var(--select-height);
			font-size: var(--select-font-size);
			font-family: var(--select-font-family);
			padding-block: var(--select-padding-y);
			padding-inline: var(--select-padding-x);
			border: var(--select-border-width) var(--select-border-style) var(--select-border-color);
			background-color: var(--select-bg-color);
			color: var(--select-color);
			outline: none;
			appearance: none;
			transition: var(--transition);
			option:not(:disabled), optgroup { 
				color: var(--select-option-color); 
				padding-block: 0.5rem;
				border-radius: 0;
			}
      
      @include elementColor();
      background-repeat: no-repeat;
      background-size: 9.5px;
      background-position: center right 0.75rem;

			&:is(.squired, .select--squired) {
				--select-border-radius: 0;
			}

			&::placeholder { color: var(--select-color); }
			
			&:not(:disabled, :invalid, .select--error, .select--success, .select--plain):focus, 
			&:not(:disabled, :invalid, .select--error, .select--success, .select--plain):hover,
			&:is(:required):not(.select--error, .select--success):focus, 
			&:is(:required):not(.select--error, .select--success):hover {
				border-color: var(--select-border-hover-color);
				background-color: var(--select-bg-hover-color);
				color: var(--select-hover-color);
				box-shadow: 0 0 0 var(--select-focus-outline-width) var(--select-focus-outline-color);
			}
			&:focus > option:checked,
			&:focus > optgroup option:checked {
				background-color: var(--select-option-bg-color);
				--select-option-color: var(--white, #ffffff);
			}
		}
		.error-message { display: inline-block; }
	}
	&--error {
		--select-border-color: var(--danger);
		--select-bg-color: rgba(var(--danger-rgb), .15);
		--select-color: var(--white);
		--select-focus-outline-color: rgba(var(--danger-rgb), 0.15);
		--select-option-color: var(--dark, #333333);
		select {
      @include elementColor(ffffff);
			&:focus, &:hover {
				box-shadow: 0 0 0 var(--select-focus-outline-width) var(--select-focus-outline-color);
			}			
		}
	}
	&--success {
		--select-border-color: var(--success);
		--select-bg-color: rgba(var(--success-rgb), .15);
		--select-color: var(--white);
		--select-focus-outline-color: rgba(var(--success-rgb), 0.15);
		--select-option-color: var(--dark, #333333);
		select {
      @include elementColor(ffffff);
			&:not(:disabled, :invalid):focus, 
			&:not(:disabled, :invalid):hover {
				border-color: var(--select-border-color);
				background-color: var(--select-bg-color);
				color: var(--select-color);
				box-shadow: 0 0 0 var(--select-focus-outline-width) var(--select-focus-outline-color);
			}
		}
	}
	&--disabled {
		--select-border-color: #363636;
		--select-bg-color: #666666;
		--select-color: #b6b6b6;
		cursor: not-allowed;
	}
	
}
</style>