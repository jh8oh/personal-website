<template>
  <div id="app">
    <Header />
    <div id="content">
      <transition :name="transition.name" :mode="transition.mode">
        <router-view />
      </transition>
    </div>
    <SocialLinks v-if="!isHome()" />
    <ScrollToTop v-if="!isHome()" />
  </div>
</template>

<script>
import Header from "./layouts/Header.vue";
import SocialLinks from "./layouts/SocialLinks.vue";
import ScrollToTop from "./layouts/ScrollToTop.vue";

export default {
  components: { Header, SocialLinks, ScrollToTop },
  data() {
    return {
      transition: {
        name: "slide-left",
        mode: "in-out",
      },
    };
  },
  methods: {
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
        Blog: 3,
        Contact: 4,
      };
      const toId = routeIdMap[to.name];
      const fromId = routeIdMap[from.name];

      if (toId > fromId) {
        this.transition.name = "slide-left";
        this.transition.mode = "in-out";
      } else if (toId < fromId) {
        this.transition.name = "slide-right";
        this.transition.mode = "in-out";
      } else {
        this.transition.name = "";
        this.transition.mode = "";
      }
    },
  },
};
</script>

<style lang="scss" src="./sass/main.scss"></style>
