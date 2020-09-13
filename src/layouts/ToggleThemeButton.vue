<template>
  <div id="theme">
    <label id="theme-switch">
      <input type="checkbox" @click="switchTheme()" />
      <span id="theme-slider">
        <img id="icon-light" src="../assets/ico/toggle-theme-button/theme-light.png" />
        <img id="icon-dark" src="../assets/ico/toggle-theme-button/theme-dark.png" />
      </span>
    </label>
  </div>
</template>

<script>
export default {
  methods: {
    switchTheme() {
      this.$store.commit("toggleTheme");
    },
  },
};
</script>
