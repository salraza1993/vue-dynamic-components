<template>
<pre class="code__block">
<pre><slot /></pre>
</pre>
</template>

<script>
export default {
  name: 'CodeEditor'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;500;600&display=swap');
.code__block {
  --pre-border-radius: .6rem;
  --pre-bg-color: var(--vt-c-black-soft);
  --pre-color: var(--color-text);
  --pre-padding-y: calc(1rem + .5vw);
  --pre-padding-x: calc(1rem + .5vw);
  --pre-font-family: 'Source Code Pro', monospace;
  --max-height: 50vh;

  border-radius: var(--pre-border-radius);
  background-color: var(--vt-c-black-extra);
  color: var(--pre-color);
  font-family: var(--pre-font-family);
  max-height: var(--max-height);
  overflow-y: scroll;
  padding-inline: var(--pre-padding-x);
  padding-block: var(--pre-padding-y);
  white-space: normal;
  @include scroller();
  pre { white-space: pre-wrap; }
}
</style>