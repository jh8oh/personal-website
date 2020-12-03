<template>
  <div id="not-found" class="page">
    <div id="not-found-content">
      <span id="code" glitch-text="404">404</span>
      <br /><br />
      <Button :text="'Back to home'" :buttonClass="'secondary'" @clicked="goToHome()" />
    </div>
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
