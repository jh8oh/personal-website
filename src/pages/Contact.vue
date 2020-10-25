<template>
  <div id="contact" class="page">
    <h1>Contact Me</h1>
    <div id="contact-content">
      <p>
        I'm always open for any work opportunities or collaborations. If you want to get in touch or just want to share
        some spicy memes, send me a message by using the form below or by emailing me directly at
        <a href="mailto: ohjiho.ca@gmail.com">ohjiho.ca@gmail.com</a>.
      </p>
      <form id="contact-form">
        <input name="name" v-model="name" type="text" placeholder="Your Name (required)" />
        <input name="email" v-model="email" type="email" placeholder="Your Email (required)" />
        <input name="subject" type="text" placeholder="Subject" />
        <textarea name="message" v-model="message" rows="10" placeholder="Your Message (required)"></textarea>
      </form>
      <Button :text="'SEND'" @clicked="sendEmail()" />
    </div>
    <Footer />
  </div>
</template>

<script>
import emailjs from "emailjs-com";

import Footer from "@/layouts/Footer.vue";
import Button from "@/components/Button.vue";

export default {
  components: { Footer, Button },
  data() {
    return {
      name: null,
      email: null,
      message: null,
    };
  },
  methods: {
    sendEmail() {
      // Validate Name
      if (!this.name) {
        alert("Please enter in a name");
        return;
      }

      // Validate Email
      if (!this.email) {
        alert("Please enter in an email");
        return;
      }

      const emailRegex = /\S+@\S+/;
      if (!emailRegex.test(this.email.toLowerCase())) {
        alert("Please enter a valid email");
        return;
      }

      // Validate Message
      if (!this.message) {
        alert("Please enter a message");
        return;
      }

      // All clear, send email
      emailjs.sendForm("default_service", "contact_me", "#contact-form", "user_KPA6UZpEDVA0yIJHW5WPo").then(
        (result) => {
          console.log("Success", result.status, result.text);
          alert("Your email has been sent!");
        },
        (error) => {
          console.log("Error", error);
          alert("There was an error with your email.");
        }
      );
    },
  },
};
</script>
