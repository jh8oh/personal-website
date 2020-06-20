<template>
  <div id="home">
    <div id="greeting">
      <span>Hi, I'm</span><br />
      <span id="name">Ji Ho Oh</span><br />
      <span>Programmer, Artist, World-building enthusiast</span>
      <br /><br />
      <Button :href="'/about'" :text="'Get to know me'" />
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  components: {
    Button,
  },
};
</script>
