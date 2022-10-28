<script setup>

</script>
<template>
  <aside class="aside__container">
    
    <ul class="aside__menus__container">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
  </aside>
</template>



<style lang="scss" scoped>
  .aside {
    &__container {
      --padding-x: .755rem;
      --padding-y: .355rem;
      position: relative;
      background-color: var(--vt-c-black-mute);
      width: var(--aside-width);
      padding-inline: var(--padding-x);
      padding-block: var(--padding-x);
      display: flex;
      flex-direction: column;
    }

    &__menus__container {
    }
  }
</style>