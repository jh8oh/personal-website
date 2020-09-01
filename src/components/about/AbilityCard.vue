<template>
  <div id="ability">
    <div id="ability-container">
      <div id="ability-title" @click="toggleDescription()">
        <img :src="getImg()" :alt="ability.name" />
        <h3 v-if="!ability.isExpanded">{{ ability.name }}</h3>
      </div>
      <div id="ability-description" v-if="ability.isExpanded">
        <h3>{{ ability.name }}</h3>
        <p v-html="ability.description" />
        <h5>Skills:</h5>
        <ul>
          <li v-for="skill in ability.skills" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ability: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImg() {
      return require("../../assets/img/about/abilities/" + this.ability.img);
    },
    toggleDescription() {
      this.$emit("toggleExpand");
      this.ability.isExpanded = !this.ability.isExpanded;
    },
  },
};
</script>
