<template>
  <header>
    <router-link tag="a" to="/">
      <img
        @mouseover="logoHovered = true"
        @mouseleave="logoHovered = false"
        :src="getLogoIcon()"
        alt="Website Logo"
      />
    </router-link>
    <img
      id="menu-dropdown"
      alt="Navigate to…"
      :src="getDropdownMenuIcon()"
      v-on:click="navShown = !navShown"
    />
    <nav v-bind:class="navShown ? 'shown' : ''">
      <ul>
        <li v-for="tab in tabs" :key="tab.title">
          <router-link
            tag="a"
            v-bind:to="tab.url"
            v-bind:exact="tab.title === 'Home' ? true : false"
            v-bind:class="tab.left ? '' : 'right'"
          >
            {{ tab.title }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import logoIcon from "@/assets/ico/header/logo-gallery.png";
import logoHoveredIcon from "@/assets/ico/header/logo-curiousblue.png";
import navIcon from "@/assets/ico/header/menu-gallery.svg";
import navClickedIcon from "@/assets/ico/header/menu-curiousblue.svg";

export default {
  data() {
    return {
      logoHovered: false,
      navShown: false,
      tabs: [
        {
          title: "About Me",
          url: "/about",
          left: true,
        },
        {
          title: "Portfolio",
          url: "/portfolio",
          left: true,
        },
        {
          title: "Contact Me",
          url: "/contact-me",
          left: false,
        },
      ],
    };
  },
  methods: {
    getLogoIcon() {
      return this.logoHovered? logoHoveredIcon : logoIcon;
    },
    getDropdownMenuIcon() {
      return this.navShown? navClickedIcon : navIcon;
    },
  },
};
</script>
