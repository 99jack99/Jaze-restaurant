<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { RouterView } from "vue-router";
/* import Home from "../views/Home.vue"; */
</script>

<template>
  <div id="wall-page">
    <Header />
    <RouterView />
    <Footer />
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
