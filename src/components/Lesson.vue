<script setup lang="ts">
import { format, isPast } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import BaseBadge from "./BaseBadge.vue";
import { computed } from "vue";
import { CheckCircleIcon, LockClosedIcon } from "@heroicons/vue/solid";

interface Props {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}
const props = defineProps<Props>();

const availableDateFormatted = computed(() =>
  format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })
);
const isLessonAvailable = computed(() => isPast(props.availableAt));
</script>

<template>
  <router-link :to="`/event/lesson/${slug}`" class="group">
    <span class="text-gray-300">
      {{ availableDateFormatted }}
    </span>

    <div class="mt-2 rounded border border-gray-500 p-4 group-hover:border-green-500 transition-colors">
      <header class="flex items-center justify-between">
        <span
          v-if="isLessonAvailable"
          class="flex items-center gap-2 text-sm font-medium text-blue-500"
        >
          <CheckCircleIcon class="h-5 w-5" />
          Conteúdo liberado
        </span>

        <span
          v-else
          class="flex items-center gap-2 text-sm font-medium text-orange-500"
        >
          <LockClosedIcon class="h-5 w-5" /> Em breve
        </span>

        <BaseBadge>
          {{ type === "live" ? "AO VIVO" : "AULA PRÁTICA" }}
        </BaseBadge>
      </header>

      <strong class="mt-5 block text-gray-200">
        {{ title }}
      </strong>
    </div>
  </router-link>
</template>
