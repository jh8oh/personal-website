<template>
  <header>
    <img class="logo" src="../assets/img/logo.png" alt="Website Logo" />
    <nav>
      <ul class="header-ul">
        <li
          v-for="tab in tabs"
          :key="tab.title"
          v-bind:class="tab.left ? 'item-left' : 'item-right'"
        >
          <router-link
            tag="a"
            v-bind:to="tab.url"
            v-bind:exact="tab.title === 'Home' ? true : false"
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
  }
};
</script>
