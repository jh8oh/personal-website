<template>
  <a :href="href">
    <img
      id="next-section-button"
      @mouseover="chevronHovered = true"
      @mouseleave="chevronHovered = false"
      :src="getChevron()"
      alt="Next Section"
    />
  </a>
</template>

<script>
import chevronDark from "../assets/ico/components/next-section-button/chevron-down-dark.png";
import chevronAccent from "../assets/ico/components/next-section-button/chevron-down-accent.png";

export default {
  data() {
    return {
      chevronHovered: false,
    };
  },
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  methods: {
    getChevron() {
      return this.chevronHovered ? chevronAccent : chevronDark;
    },
  },
};
</script>
