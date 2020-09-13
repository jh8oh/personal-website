<template>
  <div :class="setTheme()">
    <div id="app">
      <Header />
      <ToggleThemeButton v-if="!isHome()" />
      <div id="content">
        <transition :name="transitionName" mode="in-out">
          <router-view />
        </transition>
      </div>
      <SocialLinks v-if="!isHome()" />
      <ScrollToTop v-if="!isHome()" />
    </div>
  </div>
</template>

<script>
import Header from "./layouts/Header.vue";
import ToggleThemeButton from "./layouts/ToggleThemeButton";
import SocialLinks from "./layouts/SocialLinks.vue";
import ScrollToTop from "./layouts/ScrollToTop.vue";

export default {
  components: { Header, ToggleThemeButton, SocialLinks, ScrollToTop },
  data() {
    return {
      transitionName: "",
    };
  },
  methods: {
    setTheme() {
      if (this.$store.getters.isLightTheme) {
        return "theme--light";
      }
      return "theme--dark";
    },
    isHome() {
      return this.$route.name === "Home";
    },
  },
  watch: {
    $route(to, from) {
      const routeIdMap = {
        Home: 0,
        About: 1,
        Portfolio: 2,
        Contact: 3,
      };
      const toId = routeIdMap[to.name];
      const fromId = routeIdMap[from.name];

      if (toId > fromId) {
        this.transitionName = "page-slide-left";
      } else {
        this.transitionName = "page-slide-right";
      }
    },
  },
};
</script>

<style lang="scss" src="./sass/main.scss"></style>
