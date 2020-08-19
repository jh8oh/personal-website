<template>
  <div>
    <p>{{ interestGroup.description }}</p>
    <SlideshowGallery @prev="prev()" @next="next()">
      <transition :name="transitionName" mode="out-in">
        <InterestCard
          :key="interestGroup.activeInterestId"
          :interest="interestGroup.interests[interestGroup.activeInterestId]"
        />
      </transition>
    </SlideshowGallery>
  </div>
</template>

<script>
import SlideshowGallery from "../SlideshowGallery.vue";
import InterestCard from "./InterestCard.vue";

export default {
  components: { SlideshowGallery, InterestCard },
  data() {
    return {
      transitionName: "",
    };
  },
  props: {
    interestGroup: {
      type: Object,
      required: true,
    },
  },
  methods: {
    prev() {
      this.transitionName = "fade-slide-right";
      if (this.interestGroup.activeInterestId === 0) {
        this.interestGroup.activeInterestId =
          this.interestGroup.interestAmount - 1;
      } else {
        this.interestGroup.activeInterestId--;
      }
    },
    next() {
      this.transitionName = "fade-slide-left";
      if (
        this.interestGroup.activeInterestId ===
        this.interestGroup.interestAmount - 1
      ) {
        this.interestGroup.activeInterestId = 0;
      } else {
        this.interestGroup.activeInterestId++;
      }
    },
  },
};
</script>
