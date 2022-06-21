<script setup lang="ts">
import Lesson from "./Lesson.vue";
import { GetLessonsQueryResponse } from "../types/lessons";
import { GET_LESSONS_QUERY } from "../graphql/queries/lessons-query";
import { useQuery } from "@vue/apollo-composable";

const { result } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);
</script>
<template>
  <aside class="w-[348px] border-l border-gray-600 bg-gray-700 p-6">
    <span class="mb-6 block border-b border-gray-500 pb-6 text-2xl font-bold">
      Cronograma de aulas
    </span>

    <div class="flex flex-col gap-8">
      <div v-for="lesson in result?.lessons" :key="lesson.id">
        <Lesson
          :title="lesson.title"
          :slug="lesson.slug"
          :available-at="new Date(lesson.availableAt)"
          :type="lesson.lessonType"
        />
      </div>
    </div>
  </aside>
</template>
