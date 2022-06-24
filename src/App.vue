<template>
  <NavBar />
  <router-view></router-view>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<style>
  :root {
    --small_font : 12px;
    --default_color : #F3F3F3;
  }
  body {
    padding : 0;
    margin: 0;
    font-family: century gothic, verdana, sans-serif, Arial, Helvetica;
    background: var( --default_color);
  }
</style>
