<template>
  <div id="sidebar-links">
    <ul>
      <li v-for="link in links" :key="link.title">
        <a :href="link.to">
          <img
            @mouseover="link.setIcon(true)"
            @mouseleave="link.setIcon(false)"
            :src="link.icon"
          />
        </a>
        <span class="body-2">{{ link.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import sidebarLinks from "@/ts/content/sidebar-links.ts";

@Component
export default class SidebarLinks extends Vue {
  private links = sidebarLinks;
}
</script>
