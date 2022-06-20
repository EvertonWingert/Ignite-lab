<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { computed } from '@vue/reactivity';
import { GET_LESSONS_QUERY } from './graphql/queries/lessons-query'
import { Lessons } from "./types/lessons";
import BaseButton from "./components/base/BaseButton.vue";

const { result, loading, error } = useQuery(GET_LESSONS_QUERY);
const lessons = computed(() => result?.lessons ?? [] as Lessons[]);

</script>

<template>
    <div class="bg-emerald-800 min-h-screen flex items-center justify-center text-white">
        <div v-if="loading">
            <span>Carregando...</span>
        </div>
        <div v-else-if="error">
            <span>Falha ao carregar: {{ error.message }}</span>
        </div>
        <div v-else-if="!lessons?.length">
            <span>Nenhuma aula encontrada</span>
        </div>
        <ul v-else-if="lessons?.length">
            <li v-for="lesson in lessons" :key="lesson.id">
                {{ lesson.title }}
            </li>
        </ul>

    </div>
</template>
