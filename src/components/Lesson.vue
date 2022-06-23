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
  isActive: boolean;
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
  <component
    :is="isLessonAvailable ? 'router-link' : 'span'"
    :to="isLessonAvailable ? `/event/lesson/${slug}` : ''"
    class="group"
  >
    <span class="capitalize text-gray-300">
      {{ availableDateFormatted }}
    </span>

    <div
      :class="[
        'mt-2 rounded border border-gray-500 p-4 transition-colors',
        isActive ? 'bg-green-500' : 'bg-transparent',
        isLessonAvailable ? 'group-hover:border-green-500' : '',
      ]"
    >
      <header class="flex items-center justify-between">
        <span
          v-if="isLessonAvailable"
          :class="[
            'flex items-center gap-2 text-sm font-medium',
            isActive ? 'text-white' : 'text-blue-500',
          ]"
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

        <BaseBadge
          :variant="
            type === 'live' && !isActive
              ? 'primary'
              : isActive
              ? 'ghost'
              : 'secondary'
          "
        >
          {{ type === "live" ? "AO VIVO" : "AULA PRÁTICA" }}
        </BaseBadge>
      </header>

      <strong
        :class="['mt-5 block ', isActive ? 'text-white' : 'text-gray-200']"
      >
        {{ title }}
      </strong>
    </div>
  </component>
</template>
