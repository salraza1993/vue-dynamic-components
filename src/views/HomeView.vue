<script setup>
  // import TheWelcome from '../components/TheWelcome.vue'
  import { RouterLink } from 'vue-router'
  import { ref } from 'vue'
  import componentMenus from './../static/componentMenus'
  const items = ref(componentMenus);

</script>
<script>
export default { name: "HomeView"}
</script>

<template>
  <section class="home__page__section">
    <div class="home__page__header mb--4">
      <img alt="Vue logo" class="logo" src="@/assets/images/logo.svg" width="90" height="90" />
      <h1 class="font__weight__bold text--primary">Custom Form Elements</h1>
    </div>
    <div class="home__page__body">
      <ul class="tags">
        <li v-for="(item, i) in items" :key="i">
          <RouterLink :to="item.path">
          {{ item.name }}
          </RouterLink>
        </li>  
      </ul>
    </div>
  </section>
</template>
<style lang="scss">
  @import '@/assets/scss/_mixins.scss';
  .home__page {
    &__section {
      position: relative;
      width: 100%;
      min-height: 100vh;
      @include contentCenter();
      background-color: var(--body-bg-color);
      isolation: isolate;
      &::before {
        display: none;
        content: 'SDFSADF';
        background-image: url('./../assets/images/logo.svg');
        position: fixed;
        inset: 0 0 0 50vw;
        z-index: -2;
        background-repeat: no-repeat;
        background-position: center right -23vw;
        background-blend-mode: luminosity;
        opacity: 0.1;
      }
      &::after {
        display: none;
        z-index: -1;
        content: '';
        position: absolute;
        inset: 0;
        background-color: var(--black);
        background-image: url('https://images.unsplash.com/photo-1503435980610-a51f3ddfee50');
        background-blend-mode: luminosity;
        background-repeat: repeat-x;
        background-size: 100%;
        background-position: bottom 50% center;
        filter: blur(0.25rem);
        opacity: 0.25;
      }
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
        color: var(--primary);
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