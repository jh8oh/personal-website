<template>
  <div id="contact" class="page">
    <h1>Contact Me</h1>
    <div id="contact-content">
      <p>
        I'm always open for any work opportunities or collaborations. If you
        want to get in touch or just want to share some spicy memes, send me a
        message by using the form below or by emailing me directly at
        <a href="mailto: ohjiho.ca@gmail.com">ohjiho.ca@gmail.com</a>.
      </p>
      <form id="contact-form">
        <input
          name="name"
          type="text"
          placeholder="Your Name (required)"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email (required)"
          required
        />
        <input name="subject" type="text" placeholder="Subject" />
        <textarea
          name="message"
          rows="10"
          placeholder="Your Message (required)"
          required
        ></textarea>
      </form>
      <Button :text="'SEND'" @clicked="sendEmail()" />
    </div>
    <Footer />
  </div>
</template>

<script>
import emailjs from "emailjs-com";

import Footer from "../layouts/Footer.vue";
import Button from "../components/Button.vue";

export default {
  components: { Footer, Button },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "default_service",
          "contact_me",
          "#contact-form",
          "user_KPA6UZpEDVA0yIJHW5WPo"
        )
        .then(
          (result) => {
            console.log("Success", result.status, result.text);
          },
          (error) => {
            console.log("Error", error);
          }
        );
    },
  },
};
</script>
