<template>
  <div id="contact-me" class="page">
    <div id="contact-me-content">
      <p>
        I'm always open for any work opportunities or collaborations. If you want to get in touch or just want to share
        some spicy memes, send me a message by using the form below or by emailing me directly at
        <a href="mailto: ohjiho.sk@gmail.com">ohjiho.sk@gmail.com</a>.
      </p>
      <div id="">
        <form id="contact-form">
          <input name="name" v-model="name" type="text" placeholder="Your Name (required)" />
          <input name="email" v-model="email" type="email" placeholder="Your Email (required)" />
          <input name="subject" type="text" placeholder="Subject" />
          <textarea name="message" v-model="message" rows="10" placeholder="Your Message (required)" />
        </form>
        <Button :text="'SEND'" @clicked="sendEmail()" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "@/components/Button.vue";

import emailjs from "emailjs-com";

@Component({
  components: { Button },
})
export default class ContactMe extends Vue {
  private name = "";
  private email = "";
  private message = "";

  private sendEmail(): void {
    // Validate Name
    if (this.name.length === 0) {
      alert("Please enter in a name");
      return;
    }
    // Validate Email
    if (this.email.length === 0) {
      alert("Please enter in an email");
      return;
    }
    const emailRegex = /\S+@\S+/;
    if (!emailRegex.test(this.email.toLowerCase())) {
      alert("Please enter a valid email");
      return;
    }
    // Validate Message
    if (this.message.length === 0) {
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
  }
}
</script>
