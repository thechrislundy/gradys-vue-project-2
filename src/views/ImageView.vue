<template>
  <VueTinySlider v-if="loaded" :options="options">
    <div v-for="image in images">
      <img :src="image.thumbnailUrl" />
    </div> </VueTinySlider
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
        items: 3,
        speed: 400,
      },
      loaded: false,
    };
  },
  components: { VueTinySlider },
  methods: {
    fetchImages() {
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((json) => {
          this.images = json.slice(0, 10);

          this.loaded = true;
        });
    },
  },
  mounted() {
    this.fetchImages();
  },
};
</script>

<style scss scoped></style>
