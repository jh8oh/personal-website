<template>
  <header>
    <img class="logo" src="../assets/img/logo.png" alt="Website Logo" />
    <img
      class="menu-dropdown"
      alt="Navigate to…"
      :src="getDropdownMenuIcon()"
      v-on:click="toggleNavigation()"
    />
    <nav v-bind:class="navShown ? 'shown' : ''">
      <ul class="header-ul">
        <li v-for="tab in tabs" :key="tab.title">
          <router-link
            tag="a"
            v-bind:to="tab.url"
            v-bind:exact="tab.title === 'Home' ? true : false"
            v-bind:class="tab.left ? '' : 'item--right'"
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
          left: true
        },
        {
          title: "Bio",
          url: "/bio",
          left: true
        },
        {
          title: "Portfolio",
          url: "/portfolio",
          left: true
        },
        {
          title: "Contact Me",
          url: "/contact-me",
          left: false
        }
      ]
    };
  },
  methods: {
    toggleNavigation() {
      this.navShown = !this.navShown;
    },
    getDropdownMenuIcon() {
      if (this.navShown) {
        return require("../assets/ico/header/menu-purpleheart.svg");
      } else {
        return require("../assets/ico/header/menu-gallery.svg");
      }
    }
  }
};
</script>
