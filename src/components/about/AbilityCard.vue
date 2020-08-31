<template>
  <details>
    <summary>
      <img :src="getImg()" :alt="ability.name" />
      <h3>{{ ability.name }}</h3>
    </summary>
    <div>
      <p>{{ ability.description }}</p>
      <br />
      <span>Skills:</span>
      <ul>
        <li v-for="skill in ability.skills" :key="skill">
          {{ skill }}
        </li>
      </ul>
    </div>
  </details>
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
  },
};
</script>
