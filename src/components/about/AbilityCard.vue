<template>
  <div class="ability">
    <div class="ability-container">
      <div
        class="ability-title"
        @click="toggleDescription()"
        @mouseover="imgHovered = true"
        @mouseleave="imgHovered = false"
      >
        <div class="img-container">
          <img :src="getImg()" :alt="ability.name" />
        </div>
        <h3 v-if="!ability.isExpanded">{{ ability.name }}</h3>
      </div>
      <div class="ability-description" v-if="ability.isExpanded">
        <h3>{{ ability.name }}</h3>
        <p v-html="ability.description" />
        <h5>Skills:</h5>
        <ul>
          <li v-for="skill in ability.skills" :key="skill" class="skill-item">{{ skill }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgHovered: false,
    };
  },
  props: {
    ability: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImg() {
      return this.imgHovered
        ? require("../../assets/img/about/abilities/" + this.ability.img[2])
        : require("../../assets/img/about/abilities/" + this.ability.img[0]);
    },
    toggleDescription() {
      this.$emit("toggleExpand");
      this.ability.isExpanded = !this.ability.isExpanded;
    },
  },
};
</script>
