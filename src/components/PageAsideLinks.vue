<script>
export default {
  name: "PageAsideLinks",
}
</script>
<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <h3>One this Page</h3>
  <hr />
  <ul class="aside__links">
    <li><RouterLink to="#">Example</RouterLink></li>
    <li><RouterLink to="#">Sizing</RouterLink></li>
    <li><RouterLink to="#">Disabled</RouterLink></li>
    <li><RouterLink to="#">Readonly</RouterLink></li>
    <li><RouterLink to="#">Readonly plain text</RouterLink></li>
    <li><RouterLink to="#">File input</RouterLink></li>
    <li><RouterLink to="#">Color</RouterLink></li>
  </ul>
</template>
<style lang="scss">
  .aside__links {
    --padding-x: .65rem;
    --padding-y: .5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      width: 100%;
      a {
        display: block;
        text-decoration: none;
        color: var(--color-text);
        padding-block: var(--padding-y);
        padding-inline: var(--padding-x);
        margin-inline: calc(0px - var(--padding-x));
        line-height: normal;
        position: relative;
        border-radius: .3rem;
        transition: var(--transition);
        &:hover {
          background-color: var(--vt-c-brand);
          color: var(--white);
          margin-inline: 0;
        }
        &::after {
          content: '';
          width: 100%;
          height: 1px;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
    }
  }
</style>