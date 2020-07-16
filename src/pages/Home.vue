<template>
  <div id="home">
    <img id="background-image" src="../assets/img/home/home_background.png" />
    <div id="greeting">
      <span>Hi, I'm</span><br />
      <span id="name">Ji Ho Oh</span><br />
      <span>Programmer, Artist, World-building enthusiast</span>
      <br /><br />
      <Button :text="'Get to know me'" @clicked="goToAbout()" />
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  components: {
    Button,
  },
  methods: {
    goToAbout(){
      this.$router.push('/about');
    }
  }
};
</script>
