<template>
  <div id="home">
    <img id="background-image" src="@/assets/img/home/logo-border-base.png"/>
    <div id="greeting">
      <span>Hi, I'm</span><br />
      <span id="name">{{ name }}</span><br />
      <span>Software developer, Programmer, Designer</span>
      <br /><br />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  private name = "Ji Ho Oh"
}
</script>
