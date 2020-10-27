<template>
  <header>
    <router-link to="/">
      <img @mouseover="setLogo(true)" @mouseleave="setLogo(false)" :src="logoIcon" alt="Logo" />
    </router-link>
    <nav>
      <ul>
        <li v-for="page in pages" :key="page.title">
          <router-link :to="page.url" exact="false" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import logo from "@/assets/ico/header/logo-border-white.png";
import logoHovered from "@/assets/ico/header/logo-border-accent.png";

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
