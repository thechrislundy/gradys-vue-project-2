<template>
  <VueTinySlider :options="options">
    <div>Slide #1</div>
    <div>Slide #2</div>
    <div>Slide #3</div> </VueTinySlider
  >{{ images }}
</template>
<script>
import VueTinySlider from "@mentorkadriu/vue-tiny-slider";
import "tiny-slider/src/tiny-slider.scss";
export default {
  data() {
    return {
      images: [],
      options: {
        items: 1,
        speed: 400,
      },
    };
  },
  components: { VueTinySlider },
  methods: {
    fetchImages() {
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((json) => (this.images = json));
    },
  },
  mounted() {
    this.fetchImages();
  },
};
</script>

<style scss scoped></style>
