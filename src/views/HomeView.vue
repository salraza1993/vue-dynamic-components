<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import componentMenus from './../static/componentMenus'
const items = ref(componentMenus);
</script>

<template>
  <sectioin class="home__page__section">
    <div class="home__page__header mb--4">
      <img alt="Vue logo" class="logo" src="@/assets/images/logo.svg" width="90" height="90" />
      <h1 class="font__weight__bold text--primary">Custom Form Elements</h1>
    </div>
    <div class="home__page__body">
      <ul class="tags">
        <li v-for="(item, i) in items" :key="i">
          <RouterLink :to="item.path">{{ item.name }}</RouterLink>
        </li>
      </ul>
    </div>
  </sectioin>
</template>
<style lang="scss">
  @import '@/assets/scss/_mixins.scss';
  .home__page {
    &__section {
      position: relative;
      width: 100%;
      min-height: 100vh;
      @include contentCenter();
    }

    &__header {
      position: relative;
      display: grid;
      place-content: center;
      place-items: center;
    }
  }
  .tags {
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    max-width: 80vw;
    li {
      a {
        display: block;
        text-decoration: none;
        padding: .5rem 1.5rem;
        border: 1px solid var(--border-color);
        color: var(--vt-c-brand);
        border-radius: var(--border-radius);
        transition: var(--transition);
        &:hover {
          background-color: var(--primary);
          border-color: var(--primary);
          color: var(--white);
        }

      }
    }
  }
</style>