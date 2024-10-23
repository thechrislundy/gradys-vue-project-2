<template>{{ images }}</template>
<script>
export default {
  data() {
    return {
      images: [],
    };
  },

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
