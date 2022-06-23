<script setup lang="ts">
import { Player, Youtube, DefaultUi } from "@vime/vue-next";
import "@vime/core/themes/default.css";

interface Props {
  link: string;
}

defineProps<Props>();
</script>
<template>
  <Player>
    <Youtube :video-id="link" />
    <DefaultUi />
  </Player>
</template>
