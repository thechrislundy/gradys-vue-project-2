<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <h1>Grady Senior Project 2</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/array">Array</RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
      <RouterLink to="/image">Image</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
