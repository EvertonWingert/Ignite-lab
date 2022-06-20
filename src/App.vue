<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'


const GET_LESSONS_QUERY = gql`
   query {
        lessons {
            id
            title
        }
    }
`;

interface Lessons {
    id: string;
    title: string;
}


const { result, loading, error } = useQuery(GET_LESSONS_QUERY);
const lessons = computed(() => result.value?.lessons ?? [])



</script>

<template>
    <div v-if="loading">
        <span>Carregando...</span>
    </div>
    <div v-else-if="error">
        <span>Falha ao carregar: {{ error.message }}</span>
    </div>
    <div v-else-if="!lessons.lenght">
        <span>Nenhuma aula encontrada</span>
    </div>
    <ul v-else-if="lessons.lenght">
        <li v-for="lesson in lessons" :key="lesson.id">
            {{ lesson.title }}
        </li>
    </ul>

</template>
