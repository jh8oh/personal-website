<template>
  <div id="home">
    <div id="greeting">
      <h4>Hi, I'm</h4><br />
      <h2>Ji Ho Oh</h2><br />
      <h4>Programmer, Artist, World-building enthusiast</h4>
      <Button :text="'Get to know me'"/>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue"

export default {
  components: {
    Button
  }
}
</script>
