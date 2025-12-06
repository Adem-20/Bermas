<script setup>
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";
import WhatsAppFAB from "./components/WhatsAppFAB.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
  <WhatsAppFAB />
</template>
<style>
</style>
