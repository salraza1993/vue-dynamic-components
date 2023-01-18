<script>
  export default { name: "AsideLayout", components: { AsideMenu, RouterView } };    
</script>
<script setup>
import { RouterView } from 'vue-router';
import AsideMenu from '../components/asideMenu.vue';
</script>

<template>
  <section class="d-flex elements__section display--flex">
    <AsideMenu />
    <main class="elements__main">
      <RouterView />
      <!-- <slot /> -->
    </main>    
  </section>
</template>
<style lang="scss" scoped>
  .elements {
    &__section {
      position: relative;
      background-color: var(--vt-c-black-soft);
    }
    &__main {
      position: relative;
      width: 100%;
      min-height: 100vh;
      padding-inline: var(--element-container-pading-x);
      padding-block: var(--element-container-pading-y);
    }
  }
</style>
