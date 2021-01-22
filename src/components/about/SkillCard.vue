<template>
  <div class="skill">
    <transition name="flicker" mode="out-in">
      <div
        key="1"
        class="title"
        @mouseover="setTitleHovered(true)"
        @mouseleave="setTitleHovered(false)"
        v-if="!showContent"
      >
        <img :src="skillTitle.icon" />
        <h3>{{ skillTitle.name }}</h3>
      </div>
      <div key="2" class="content" v-else>
        <ul>
          <li v-for="skill in skills" :key="skill.name">
            {{ skill.name }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

import SkillTitle from "@/ts/class/about/SkillTitle";
import Skill from "@/ts/class/about/Skill";

@Component
export default class SkillCard extends Vue {
  @Prop({ required: true, type: Object }) readonly skillTitle!: SkillTitle;
  @Prop({ required: true, type: Boolean }) readonly activeTitle!: boolean;
  @Prop({ required: true, type: Boolean }) readonly showContent!: boolean;
  @Prop({ required: false, type: Array }) readonly skills?: Skill[];

  @Watch("activeTitle")
  onActiveTitleChange(newVal: boolean) {
    this.skillTitle.setIcon(this.activeTitle);
  }

  setTitleHovered(isTitleHovered: boolean) {
    if (!this.activeTitle) {
      this.skillTitle.setIcon(isTitleHovered);
    }
  }
}
</script>