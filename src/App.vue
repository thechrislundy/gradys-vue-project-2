<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/array">Array</RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
