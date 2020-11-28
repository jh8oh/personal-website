<template>
  <div id="home" class="page">
    <div id="background-image" class="absolute-center"/>
    <div id="greeting">
      <span>Hi, I'm</span><br />
      <span id="name" :glitch-text="name">{{ name }}</span><br />
      <span>Software Developer, Programmer, Designer</span>
      <br /><br />
      <Button :text="'Get to know me'" :color="'secondary'" @clicked="goToAbout()" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "@/components/Button.vue";

@Component({
  components: { Button },
})
export default class Home extends Vue {
  private name = "Ji Ho Oh";

  private goToAbout() {
    this.$router.push("/about");
  }
}
</script>
