<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Header />
    <RouterView />
  </div>
</template>
