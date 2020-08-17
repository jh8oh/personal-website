<template>
  <div id="slideshow-gallery">
    <img :src="leftIcon" @click="back()" />
    <slot></slot>
    <img :src="rightIcon" @click="next()" />
  </div>
</template>

<script>
import arrowLeftDark from "../assets/ico/components/slideshow-gallery/arrow-left-dark.png";
import arrowLeftAccent from "../assets/ico/components/slideshow-gallery/arrow-left-accent.png";
import arrowRightDark from "../assets/ico/components/slideshow-gallery/arrow-right-dark.png";
import arrowRightAccent from "../assets/ico/components/slideshow-gallery/arrow-right-accent.png";

export default {
  data() {
    return {
      leftIcon: arrowLeftDark,
      rightIcon: arrowRightDark,
    };
  },
  methods: {
    back() {
      this.leftIcon = arrowLeftAccent;
      setTimeout(() => this.$emit("prev"), 100);
      this.leftIcon = arrowLeftDark;
    },
    next() {
      this.rightIcon = arrowRightAccent;
      setTimeout(() => this.$emit("next"), 100);
      this.rightIcon = arrowRightDark;
    },
  },
};
</script>
