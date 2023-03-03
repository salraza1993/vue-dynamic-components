<script>
export default {  name: 'SwitchToggler'}
</script>
<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: Boolean,
  label: { type: String },
  id: { type: String, default: () => 'switch-id-1' },
  name: { type: String },
  required: Boolean,
  readonly: Boolean,
  disabled: Boolean,
});

const emit = defineEmits(["update:modelValue"]);
const switchValue = computed({
  get() { return props.modelValue; },
  set(checkedInput) {
    emit("update:modelValue", checkedInput);
  }
});

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
    :class="{
      'switch-block__checked': switchValue
    }">
    <input type="checkbox" :id="props.id" v-model="switchValue"  />
    <label 
      class="switch-block__label" 
      :class="{
        'label-required': props.label,
        'checked': switchValue
      }" 
      :for="props.id">
      <span v-if="label" class="switch-block__label__value">{{ label }}</span>
    </label>
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
    
    position: relative;
    
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
      &:is(.label-required) {
        padding-inline-start: calc(var(--switch-width) + var(--switch-gap));
      }
  
      
      &::before, &::after {
        content: '';
        vertical-align: middle;
        position: absolute;
        border-radius: var(--switch-border-radius);
        left: 0;
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
          left: calc(var(--switch-width) / 2.15);
          background-color: var(--switch-button-active-color);
        }
      }
    }

  }
</style>