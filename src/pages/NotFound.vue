<template>
  <div id="not-found">
    <span id="code" glitch-text="404">404</span><br />
    <span id="message">Page Not Found</span>
    <br /><br /><br />
    <Button :text="'Back to home'" @clicked="goToHome()" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "@/components/Button.vue";

@Component({
  components: { Button },
})
export default class NotFound extends Vue {
  private goToHome() {
    this.$router.push("/");
  }
}
</script>
