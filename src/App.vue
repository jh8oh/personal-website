<template>
  <div id="app">
    <Header />
    <div id="content">
      <transition :name="transition.name" :mode="transition.mode">
        <router-view />
      </transition>
    </div>
    <SidebarLinks v-if="!(this.$route.name === 'Home')" />
  </div>
</template>

<script>
import Header from "./layouts/Header.vue";
import SidebarLinks from "./layouts/SidebarLinks.vue";

export default {
  components: { Header, SidebarLinks },
  data() {
    return {
      transition: {
        name: "slide-left",
        mode: "in-out",
      },
    };
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
