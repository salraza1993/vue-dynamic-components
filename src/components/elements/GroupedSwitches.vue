<script>
export default { name: "GroupedSwitchesToggler" }
</script>
<script setup>
import { computed } from 'vue';
import Switch from './Switch.vue';

const props = defineProps({
  modelValue: Array,
  inline: Boolean,
  block: Boolean,
  fullWidth: Boolean,
});

const emit = defineEmits(["update:modelValue"]);
const switchValue = computed({
  get() { return props.modelValue; },
  set(checkedInputs) {
    emit("update:modelValue", checkedInputs);
  }
});

</script>
<template> 
  <div class="switch-block__container">
    <Switch 
      v-for="switchItem in switchValue"
      :key="switchItem"
      :label="switchItem.label"
      :size="switchItem.size"
      :id="switchItem.id"
      :error="switchItem.error"
      :errorMessage="switchItem.errorMessage"
      :required="switchItem.required"
      :readonly="switchItem.readonly"
      :disabled="switchItem.disabled"
      :inline="inline"
      :block="block"
      :fullWidth="fullWidth"
    />
  </div> 
</template>

<style lang="scss">
  .switch-block {
    &__container {
      --switch-gap-x: 0.75rem;
      --switch-gap-y: 0.6rem;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      row-gap: calc(var(--switch-gap-y) * 1);
      column-gap: calc(var(--switch-gap-x) * 1);;
    }
  }
</style>