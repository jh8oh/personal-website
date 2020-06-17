<template>
  <header>
    <router-link id="logo" tag="a" to="/">
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
      v-on:click="toggleNavigation()"
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
export default {
  data() {
    return {
      logoHovered: false,
      navShown: false,
      tabs: [
        {
          title: "About",
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
    getLogoIcon(){
      if (this.logoHovered){
        return require("../assets/ico/header/logo-curiousblue.png");
      } else{
        return require("../assets/ico/header/logo-gallery.png");
      }
    },
    toggleNavigation() {
      this.navShown = !this.navShown;
    },
    getDropdownMenuIcon() {
      if (this.navShown) {
        return require("../assets/ico/header/menu-curiousblue.svg");
      } else {
        return require("../assets/ico/header/menu-gallery.svg");
      }
    },
  },
};
</script>
