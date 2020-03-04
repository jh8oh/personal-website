<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./layouts/Header.vue";

export default {
  components: { Header }
};
</script>

<style lang="scss" src="./sass/main.scss"></style>
