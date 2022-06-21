<script setup lang="ts">
import Header from "../components/Header.vue";
import SideBar from "../components/SideBar.vue";
import Video from "../components/Video.vue";
</script>
<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <main class="flex flex-1">
      <Video />
      <SideBar />
    </main>
  </div>
</template>
