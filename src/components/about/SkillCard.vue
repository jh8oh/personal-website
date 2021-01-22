<template>
  <div class="skill">
    <transition name="flicker" mode="out-in">
      <div
        class="title"
        key="1"
        @mouseover="setTitleHovered(true)"
        @mouseleave="setTitleHovered(false)"
        v-if="!showContent"
      >
        <img :src="skillTitle.icon" />
        <h3 :class="{ colorPrimary: isTitleHovered || activeTitle }">
          {{ skillTitle.name }}
        </h3>
      </div>
      <div class="content" key="2" v-else>
        <ul>
          <li v-for="skill in skills" :key="skill.name">
            <span class="name">
              {{ skill.name }}
            </span>
            <ul class="rating">
              <li
                v-for="i in 5"
                :key="i"
                :class="{ filled: skill.proficiency >= i }"
              />
            </ul>
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

  private isTitleHovered = false;

  @Watch("activeTitle")
  onActiveTitleChange(newVal: boolean) {
    if (!this.isTitleHovered) {
      this.skillTitle.setIcon(this.activeTitle);
    }
  }

  setTitleHovered(isTitleHovered: boolean) {
    this.isTitleHovered = isTitleHovered;
    if (!this.activeTitle) {
      this.skillTitle.setIcon(isTitleHovered);
    }
  }
}
</script>