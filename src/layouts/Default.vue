<script>
  import Footer from '../components/Footer.vue';
  import Header from '../components/Header.vue';
  export default {
    name: "DefaultLayout",
    components: [Header, Footer]
  }
</script>
<template>
  <Header />
  <slot />
  <Footer />
</template>

<style>

</style>