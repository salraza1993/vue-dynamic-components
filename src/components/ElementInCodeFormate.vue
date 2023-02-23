<template>
  <code>&lt;{{props.label}}&gt;</code>
</template>

<script>
export default { name: 'ElementInCodeFormat' }
</script>
<script setup>
const props = defineProps({
  label: { type: String, default: () => 'Button' }
})
</script>

<style>

</style>