<template>
  <div id="blog" class="page">
    <div id="blog-content" class="page-content"></div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "@/layouts/Footer.vue";

@Component({ components: { Footer } })
export default class Blog extends Vue {}
</script>
