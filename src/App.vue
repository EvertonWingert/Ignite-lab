<script setup lang="ts">
import Auth from "./layouts/Auth.vue";
import Main from "./layouts/Main.vue";
import { computed } from "@vue/reactivity";

const layouts = {
  main: Main,
  auth: Auth,
};

const layout = computed(() => layouts["main"]);
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
