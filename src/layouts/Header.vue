<template>
  <header>
    <router-link tag="a" to="/">
      <img id="logo" src="../assets/img/logo.png" alt="Website Logo" />
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
      navShown: false,
      tabs: [
        {
          title: "Home",
          url: "/",
          left: true,
        },
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
    toggleNavigation() {
      this.navShown = !this.navShown;
    },
    getDropdownMenuIcon() {
      if (this.navShown) {
        return require("../assets/img/header/menu-purpleheart.svg");
      } else {
        return require("../assets/img/header/menu-gallery.svg");
      }
    },
  },
};
</script>
