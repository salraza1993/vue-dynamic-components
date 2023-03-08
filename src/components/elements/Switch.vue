<script>
export default {  name: 'SwitchToggler'}
</script>
<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  modelValue: Boolean,
  label: { type: String },
  size: { type: String },
  id: { type: String, default: () => 'switch-id-1' },
  error: { type: Boolean },
  errorMessage: { type: String, default: () => 'This field is required' },
  name: { type: String },
  required: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  inline: Boolean,
  block: Boolean,
  fullWidth: Boolean,
});

const emit = defineEmits(["update:modelValue"]);
const switchValue = computed({
  get() { return props.modelValue; },
  set(checkedInput) {
    switchValidation(checkedInput)
    emit("update:modelValue", checkedInput);
  }
});

const switchSizes = computed(() => {
  switch (props.size) {
    case 'small': return 'switch-block--small'  
    case 'medium': return 'switch-block--medium'  
    case 'large': return 'switch-block--large'  
    default: return ''
  }
})

const checkError = ref(props.error);
const switchValidation = (value) => {
  checkError.value = props.required && !value ? true : false;
}

// const checkReturnValues = (input) => {
//   if (input && props.value) {
//     console.log(input && props.value)
//     emit("update:modelValue", props.value);
//   } else {
//     if (props.uncheckedValue) {
//       console.log(!input && props.uncheckedValue)
//       emit("update:modelValue", props.uncheckedValue);
//     }
//     emit("update:modelValue", input);
//   }
// }
  

</script>
<template>  
  <div
    class="switch-block" 
    :class="[switchSizes, {
      'switch-block--checked': switchValue,
      'switch-block--required': checkError,
      'switch-block--disabled': disabled,
      'switch-block--readonly': readonly,
      'switch-block--inline': inline,
      'switch-block--block': block,
      'switch-block--full-width': fullWidth,
    }]">
    <input type="checkbox" :id="props.id" v-model="switchValue"   />
    <label 
      class="switch-block__label" 
      :class="{
        'label--enabled': label,
        'switch-block__label--required': checkError,
        'switch-block__label--disabled': disabled,
        'switch-block__label--readonly': readonly,
        'checked': switchValue,
        'unchecked': !switchValue,
      }" 
      :for="props.id">
      <span v-if="label" class="switch-block__label__value">{{ label }}</span>
    </label>
    <small v-if="checkError" class="switch-block__error-message">{{ errorMessage }}</small>
  </div>
</template>

<style lang="scss">
  .switch-block {
    --switch-height: 18px;
    --switch-width: calc(var(--switch-height) * 1.85);
    --switch-gap: 0.75rem;
    --switch-border-radius: var(--switch-height);
    --switch-font-size: 1rem;
    --switch-line-height: 1.45rem;
    --switch-font-family: inherit;
    --switch-border-width: 1px;
    --switch-border-style: solid;
    
    --switch-active-base-bg-color: #42b883;
    --switch-active-base-border-color: #42b883;
    --switch-base-bg-color: #656565;
    --switch-base-border-color: #858585;
    
    --switch-button-color: #999999;
    --switch-button-active-color: #ffffff;

    &--small { 
      --switch-height: 14px; 
      --switch-font-size: 0.8rem;
    }
    &--medium { 
      --switch-height: 22px; 
      --switch-font-size: 1.25rem;
    }
    &--large { 
      --switch-height: 28px; 
      --switch-font-size: 1.4rem;
    }
    
    position: relative;
    isolation: isolate;
    display: inline-block;

    &--inline { 
      max-width: max-content; 
      display: inline-block; 
    }
    &--full-width, &--block { 
      max-width: 100%; 
      width: 100%; 
      display: block; 
    }

    &--required {
      --switch-base-bg-color: #333;
      --switch-base-border-color: #d66666;
      --switch-button-color: #d66666;
      &::before {
        content: '';
        position: absolute;
        z-index: -1;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% + 0.75rem);
        height: calc(100% + 0.25rem);
        border-radius: 0.25rem;
        box-shadow: 0 0 0 1px #d66666;
        background-color: rgba(214, 102, 102, 0.15);
        
      }
    }
    &--disabled {
      user-select: none;
      cursor: not-allowed;
      * { pointer-events: none; }
    }
    &--readonly {
      user-select: none;
      * { pointer-events: none; }
    }
    
    &__label {
      min-width: var(--switch-width);
      min-height: var(--switch-height);
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
      gap: var(--switch-gap);
      font-family: var(--switch-font-family);
      font-size: var(--switch-font-size);
      line-height: var(--switch-line-height);
      &:is(.label--enabled) {
        padding-inline-start: calc(var(--switch-width) + var(--switch-gap));
      }
      &--disabled { opacity: 0.75;}
      &::before, &::after {
        content: '';
        vertical-align: middle;
        position: absolute;
        border-radius: var(--switch-border-radius);
        left: 0;
        margin-top: 3px;
        cursor: pointer;
      }
      &::before {
        width: var(--switch-width);
        height: var(--switch-height);
        background-color: var(--switch-base-bg-color);
        border: var(--switch-border-width) var(--switch-border-style) var(--switch-base-border-color);
        transition: background .3s ease-in;
      }
      &::after {
        scale: 0.7;
        width: var(--switch-height);
        height: var(--switch-height);
        background-color: var(--switch-button-color);
        transition: left .3s ease-in;
      }
    }
    // &__error-message {}
    input { 
      position: absolute;
      left: 0;
      visibility: hidden;
      opacity: 0;
      z-index: -1;
      &:checked ~ label {
        &::before { 
          background-color: var(--switch-active-base-bg-color); 
          border-color: var(--switch-active-base-border-color ); 
        }
        &::after {
          left: calc(var(--switch-width) / 2.2);
          background-color: var(--switch-button-active-color);
        }
      }
    }

  }
</style>