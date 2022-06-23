<script setup lang="ts">
interface Props {
  variant: "primary" | "secondary" | "ghost";
}

defineProps<Props>();

const availableVariants = {
  primary: "border-green-300 text-green-300",
  secondary: "border-green-300 text-white",
  ghost: "border-white text-white",
};
</script>
<template>
  <span
    :class="[
      'rounded border py-[0.125rem] px-2 text-xs font-bold',
      availableVariants[variant],
    ]"
  >
    <slot />
  </span>
</template>
