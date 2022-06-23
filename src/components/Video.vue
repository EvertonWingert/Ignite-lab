<script setup lang="ts">
import {
  LightningBoltIcon,
  DownloadIcon,
  ChevronRightIcon,
  PhotographIcon,
} from "@heroicons/vue/solid";
import BaseButton from "./BaseButton.vue";
import VideoPlayer from "./VideoPlayer.vue";
import { useQuery } from "@vue/apollo-composable";
import { watch } from "vue";
import gql from "graphql-tag";

interface Props {
  lessonSlug: string;
}

const props = defineProps<Props>();

interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    };
  };
}

const { result, error, loading, variables } = useQuery<GetLessonBySlugResponse>(
  gql`
    query GetLessonBySlug($slug: String) {
      lesson(where: { slug: $slug }) {
        title
        videoId
        description
        teacher {
          bio
          avatarURL
          name
        }
      }
    }
  `,
  {
    slug: props.lessonSlug,
  }
);

watch(
  () => props.lessonSlug,
  (newValue: Props["lessonSlug"]) => {
    variables.value = {
      newValue,
    };
  }
);
</script>
<template>
  <div class="flex-1">
    <div v-if="loading">
      <span>Carregando...</span>
    </div>
    <div v-else-if="error">
      <span>Falha ao buscar aula...</span>
    </div>

    <div v-else>
      <div class="flex justify-center bg-black">
        <div class="aspect-video h-full max-h-[60vh] w-full max-w-[1100px]">
          <VideoPlayer :link="result.lesson.videoId" />
        </div>
      </div>

      <div class="mx-auto max-w-[1100px] p-8">
        <div class="flex items-start gap-16">
          <div class="flex-1">
            <h1 class="text-2xl font-bold">{{ result.lesson.title }}</h1>
            <p class="mt-4 leading-relaxed text-gray-200">
              {{ result.lesson.description }}
            </p>

            <div class="mt-6 flex items-center gap-4">
              <img
                class="h-16 w-16 rounded-full border-2 border-blue-500"
                :src="result.lesson?.teacher?.avatarURL"
                alt=""
              />

              <div class="leading-relaxed">
                <strong class="text-block text-2xl font-bold">{{
                  result.lesson.teacher.name
                }}</strong>
                <span class="text block text-sm text-gray-200">{{
                  result.lesson.teacher.bio
                }}</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <a href="#">
              <BaseButton variant="primary">
                <svg
                  xmlns="#www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  class="h-5 w-5 fill-current"
                >
                  <title>Discord</title>
                  <path
                    d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                  />
                </svg>
                Comunidade do discord
              </BaseButton>
            </a>

            <a href="#">
              <BaseButton variant="secondary">
                <LightningBoltIcon class="h-5 w-5 fill-current" />
                Acesse o desafio
              </BaseButton>
            </a>
          </div>
        </div>
        <div class="mt-20 grid grid-cols-2 gap-8">
          <a
            href="#"
            class="flex items-stretch gap-6 overflow-hidden rounded bg-gray-700 transition-colors hover:bg-gray-600"
          >
            <div class="flex h-full items-center bg-green-700 p-6">
              <DownloadIcon class="h-8 w-8" />
            </div>
            <div class="py-6 leading-relaxed">
              <strong class="2xl">Material complementar</strong>
              <p class="mt-2 text-sm text-gray-200">
                Acesse o material complementar parar acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div class="flex h-full items-center p-6">
              <ChevronRightIcon class="h-8 w-8" />
            </div>
          </a>
          <a
            href="#"
            class="flex items-stretch gap-6 overflow-hidden rounded bg-gray-700 transition-colors hover:bg-gray-600"
          >
            <div class="flex h-full items-center bg-green-700 p-6">
              <PhotographIcon class="h-8 w-8" />
            </div>
            <div class="py-6 leading-relaxed">
              <strong class="2xl">Wallpapers exclusivos</strong>
              <p class="mt-2 text-sm text-gray-200">
                Baixe wallpapers exclusivos do Ignite Lab e personalize sua
                máquina
              </p>
            </div>
            <div class="flex h-full items-center p-6">
              <ChevronRightIcon class="h-8 w-8" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
