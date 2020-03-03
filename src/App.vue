<template>
  <div id="app">
    <header>
      <img class="logo" src="./assets/img/logo.png" alt="Website Logo" />
      <nav>
        <ul class="header-nav">
          <li
            v-for="tab in tabs"
            :key="tab.title"
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

    <router-view />
  </div>
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
