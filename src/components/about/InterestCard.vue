<template>
  <div id="interest-card">
    <img :src="getImg()" :alt="interest.title" />
    <div id="interest-card-text">
      <h4>{{ interest.title }}</h4>
      <p v-html="interest.description" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    interest: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImg() {
      return require("../../assets/img/about/interests/" + this.interest.img);
    },
  },
};
</script>
