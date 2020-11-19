<template>
  <div id="app">
    <Header />
    <div id="content">
      <transition :name="transitionName" mode="in-out">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import Header from "@/layouts/Header.vue";

@Component({
  components: { Header },
})
export default class App extends Vue {
  private transitionName = "";

  @Watch("$route.name", { immediate: true, deep: true })
  onUrlChanged(to: string, from: string) {
    const routeIdMap = new Map([
      ["Home", 0],
      ["About", 1],
      ["Portfolio", 2],
      ["Blog", 3],
      ["Contact", 4],
      ["NotFound", 5],
    ]);

    const toId = routeIdMap.get(to);
    const fromId = routeIdMap.get(from);

    if ((toId as number) > (fromId as number)) {
      this.transitionName = "page-slide-left";
    } else if ((toId as number) < (fromId as number)) {
      this.transitionName = "page-slide-right";
    } else {
      this.transitionName = "";
    }
  }
}
</script>

<style lang="scss" src="./scss/main.scss" />
