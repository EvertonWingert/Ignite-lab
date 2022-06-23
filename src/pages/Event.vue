<script setup lang="ts">
import Header from "../components/Header.vue";
import SideBar from "../components/SideBar.vue";
import Video from "../components/Video.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();


const slug = computed(() => route.params.slug as string);

</script>
<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <main class="flex flex-1">
      <Video v-if="slug" :lesson-slug="slug" :key="slug" />
      <div v-else class="flex-1">
        <span>Oi</span>
      </div>
      <SideBar />
    </main>
  </div>
</template>
