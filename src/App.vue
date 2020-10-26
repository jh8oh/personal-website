<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<<<<<<< HEAD
<style lang="scss" src="./scss/main.scss" />
=======
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/layouts/Header.vue";

@Component({
  components: { Header },
})
export default class App extends Vue {}
</script>

<style lang="scss" src="./scss/main.scss"/>
>>>>>>> c713c83 (init header)
