<script setup>
import Header from "../components/Header.vue";
import Home from "../views/Home.vue";
</script>

<template>
  <div id="wall-page">
    <Header />
    <Home />
  </div>
</template>

<style scoped>
#wall-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
