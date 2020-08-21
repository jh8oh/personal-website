<template>
  <a id="scroll-to-top" ref="scrollToTop" href="#top">
    <img src="../assets/ico/scroll-to-top/arrow-up-dark.png" />
    <span>Back To Top</span>
  </a>
</template>

<script>
export default {
  created() {
    window.addEventListener("scroll", this.toggleScrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.toggleScrollToTop);
  },
  methods: {
    toggleScrollToTop() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        this.$refs.scrollToTop.style.display = "flex";
      } else {
        this.$refs.scrollToTop.style.display = "none";
      }
    },
  },
};
</script>
