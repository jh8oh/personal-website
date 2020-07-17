<template>
  <div id="app">
    <Header />
    <div id="content">
      <router-view />
    </div>
    <SocialLinks v-if="!isHomePage()" />
    <Footer v-if="!isHomePage()" />
  </div>
</template>

<script>
import Header from "./layouts/Header.vue";
import SocialLinks from "./layouts/SocialLinks.vue";
import Footer from "./layouts/Footer.vue";

export default {
  components: { Header, SocialLinks, Footer },
  methods: {
    isHomePage() {
      return this.$route.name === "Home";
    },
  },
};
</script>

<style lang="scss" src="./sass/main.scss"></style>
