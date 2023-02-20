<script setup>
  // import { RouterLink } from 'vue-router';
  import { ref } from "vue";
  const props = defineProps({
    links: {
      type: [Array, Object], 
      default: () => [
        { path: '#example', name: 'example' },
        { path: '#example', name: 'example' },
        { path: '#example', name: 'example' },
      ]
    },
  });
  const toggleState = ref(false);
  const selectedItem = ref('');
  const activeToggle = (item) => {
    item === selectedItem.value ? (toggleState.value = !toggleState.value) : (toggleState.value = true);
    selectedItem.value = item;
  }
</script>

<script>
  export default { name: "PageAsideLinks" }
</script>
<template>
  <a href="#" class="text--white text-decoration--none text-hover--primary text-hover--underline"><strong>One this Page</strong></a>
  <hr />
  <ul class="aside__links">
    <li v-for="(item, index) in props.links" :key="index">
      <a 
        :href="item.path"
        @click="activeToggle(item.name)" 
        :class="{'active': toggleState && item.name === selectedItem }"
      > {{item.name}} </a>
    </li>
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
        text-transform: capitalize;
        &:hover, &.active {
          background-color: var(--primary);
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