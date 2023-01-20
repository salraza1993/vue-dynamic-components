<script>
  export default { name: "AsideMenu" };    
</script>

<script setup>
  import { RouterLink } from 'vue-router';
  import componentMenus from '@/static/componentMenus.js'
</script>

<template>
  <aside class="aside__container [ display--flex flex--column ]">
    <div class="aside__logo__block [ display--flex ai--center ]">
      <div class="aside__logo__block__icon">
        <RouterLink to="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69"  xmlns:v="https://vecta.io/nano">
            <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/>
            <path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/>
          </svg>
        </RouterLink>
      </div>
      <div class="aside__logo__block__text">
        <h2 class="fw--700 text--primary mb--0">VueJs 3</h2>
        <h5>Dynamic Custom Components</h5>
      </div>
    </div>
    <ul class="aside__menus">
      <li class="aside__menus__item" v-for="(item, index) in componentMenus" :key="index">
        <RouterLink class="aside__menus__item--link" :to="item.path">{{ item.name }}</RouterLink>
      </li>
      <!-- <li><RouterLink to="/about">About</RouterLink></li> -->
    </ul>
  </aside>
</template>



<style lang="scss" scoped>
  .aside {
    &__container {
      --block-padding-x: .755rem;
      --block-padding-y: .355rem;
      flex-shrink: 0;
      background-color: var(--aside-menu-bg-color);
      // border-right: 1px solid var(--border-color);
      width: var(--aside-width);
      max-height: 100vh;
      padding-inline: var(--block-padding-x);
      padding-block: var(--block-padding-x);
      z-index: 1;
      position: sticky;
      top: 0;
    }
    &__logo__block {
      --block-inline-gap: calc(1rem + 0.25vw);
      position: relative;
      padding-inline: var(--block-padding-x);
      padding-block: calc(var(--block-padding-y) * 3);
      gap: var(--block-inline-gap);
      margin-bottom: calc(1rem + 0.75vw);
      background: var(--vt-c-black-extra);
      margin-inline: calc(0px - var(--block-padding-x));
      margin-top: calc(0px - calc(var(--block-padding-y) * 2));
      border-bottom: 1px solid var(--border-color);

      &__icon {
        flex-shrink: 0;
        svg {
          width: var(--aside-main-logo-width);
        }      }
      &__text {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: calc(.25rem + .25vw);
        padding-inline-start: var(--block-inline-gap);
        border-left: 1px solid var(--border-color);
        * {
          line-height: 100%;
          scale: 1.025;
        }
      }
    }

    &__menus {
      position: relative;
      padding: 0;
      margin: 0;
      list-style: none;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1px;

      
      &__item {
        position: relative;
        &--link {
          position: relative;
          display: block;
          text-decoration: none;
          padding-block: calc(var(--block-padding-y) * 1.5) calc(var(--block-padding-y) * 2);
          padding-inline: var(--block-padding-x);
          font-size: 115%;
          line-height: normal;
          transition: var(--transition);
          border-radius: var(--border-radius);
          color: var(--aside-menu-link-color);
          &.router-link-exact-active {
            background-color: var(--aside-menu-bg-active-color);
            color: var(--aside-menu-active-link-color);
            font-weight: 600;
          }
          &:not(.router-link-exact-active):hover {
            background-color: var(--aside-menu-bg-color);
            color: var(--aside-menu-active-link-color);
          }
        }
      }
    }
  }
</style>