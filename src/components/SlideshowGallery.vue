<template>
  <div id="slideshow-gallery">
    <slot></slot>
    <img
      title="Next"
      class="navigation-buttons"
      :src="getNextIcon()"
      @mouseover="nextHovered = true"
      @mouseleave="nextHovered = false"
      @click="next()"
    />
    <img
      title="Prev"
      class="navigation-buttons"
      :src="getPrevIcon()"
      @mouseover="prevHovered = true"
      @mouseleave="prevHovered = false"
      @click="prev()"
    />
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
      prevHovered: false,
      nextHovered: false,
    };
  },
  methods: {
    getPrevIcon() {
      return this.prevHovered ? arrowLeftAccent : arrowLeftDark;
    },
    prev() {
      setTimeout(() => this.$emit("prev"), 100);
    },
    getNextIcon() {
      return this.nextHovered ? arrowRightAccent : arrowRightDark;
    },
    next() {
      setTimeout(() => this.$emit("next"), 100);
    },
  },
};
</script>
