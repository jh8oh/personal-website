<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";

export default {
  components: { Header, Footer }
};
</script>

<style lang="scss" src="./sass/main.scss"></style>
