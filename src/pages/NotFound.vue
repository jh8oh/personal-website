<template>
  <div>
    <div id="content">
      <span>404</span>
      <Button :text="'Back to home'" @clicked="goToHome()" />
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
  private goToHome(){
    this.$router.push("/");
  }
}
</script>
