<script setup lang="ts">
import Spinner from "./Spinner.vue";
const VARIANTS = {
  primary: "bg-green-500 text-white  hover:bg-green-700",
  secondary:
    "bg-transparent text-blue-500  border border-blue-500 hover:bg-blue-500 hover:text-gray-900",
};

interface props {
  variant: string;
  loading?: boolean;
}

defineProps<props>();
</script>

<template>
  <button
    :class="[
      VARIANTS[variant],
      'flex w-full items-center justify-center gap-4 rounded p-4 text-sm transition-colors disabled:opacity-50',
    ]"
  >
    <Spinner v-if="loading" />
    <slot v-else />
  </button>
</template>
