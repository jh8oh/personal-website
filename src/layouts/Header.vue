<template>
  <header>
    <router-link to="/">
      <img @mouseover="setLogo(true)" @mouseleave="setLogo(false)" :src="logoIcon" alt="Logo" />
    </router-link>
    <nav>
      <ul>
        <router-link tag="li" v-for="page in pages" :key="page.title" :to="page.url">
          {{ page.title }}
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import logo from "@/assets/ico/header/logo-white.png";
import logoHovered from "@/assets/ico/header/logo-accent.png";

@Component
export default class Header extends Vue {
  private logoIcon = logo;
  private pages = [
    { title: "About Me", url: "/about" },
    { title: "Portfolio", url: "/portfolio" },
    { title: "Blog", url: "/blog" },
    { title: "Contact Me", url: "/contact" },
  ];

  private setLogo(isLogoHovered: boolean) {
    if (isLogoHovered) {
      this.logoIcon = logoHovered;
    } else {
      this.logoIcon = logo;
    }
  }
}
</script>
