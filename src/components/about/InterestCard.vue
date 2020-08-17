<template>
  <div>
    <h4>{{ interest.title }}</h4>
    <img :src="getImg()" :alt="interest.title" />
    <p v-html="interest.description" />
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
