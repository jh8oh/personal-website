<template>
  <div>
    <p>{{ interestGroup.description }}</p>
    <SlideshowGallery @prev="prev()" @next="next()">
      <InterestCard
        :interest="interestGroup.interests[interestGroup.activeInterestId]"
      />
    </SlideshowGallery>
  </div>
</template>

<script>
import SlideshowGallery from "../SlideshowGallery.vue";
import InterestCard from "./InterestCard.vue";

export default {
  components: { SlideshowGallery, InterestCard },
  props: {
    interestGroup: {
      type: Object,
      required: true,
    },
  },
  methods: {
    prev() {
      if (this.interestGroup.activeInterestId === 0) {
        this.interestGroup.activeInterestId =
          this.interestGroup.interestAmount - 1;
      } else {
        this.interestGroup.activeInterestId--;
      }
    },
    next() {
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
