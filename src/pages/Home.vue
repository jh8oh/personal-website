<template>
  <div id="home">
    <div id="greeting">
      <span>Hi, I'm</span>
      <h2>Ji Ho Oh</h2>
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
