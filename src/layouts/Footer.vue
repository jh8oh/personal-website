<template>
  <footer>
    <p>© 2020 Ji Ho Oh</p>
    <ul id="footer-links">
      <li v-for="link in links" :key="link.title">
        <a v-bind:href="link.to">
          <img align="center" v-bind:src="link.icon" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: "GitHub",
          icon: require("../assets/ico/footer/github.png"),
          to: "https://github.com/jh8oh"
        },
        {
          title: "LinkedIn",
          icon: require("../assets/ico/footer/linkedin.png"),
          to: "https://www.linkedin.com/in/ji-ho-oh-63b590191/"
        },
        {
          title: "Resume",
          icon: require("../assets/ico/footer/resume.png"),
          to: "https://google.com"
        },
        {
          title: "Email",
          icon: require("../assets/ico/footer/email.png"),
          to: "https://google.com"
        }
      ]
    };
  }
};
</script>
