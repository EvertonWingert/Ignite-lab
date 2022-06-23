<script setup lang="ts">
import BaseLogo from "../components/BaseLogo.vue";
import BaseButton from "../components/BaseButton.vue";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useRouter } from "vue-router";
import BaseInput from "../components/BaseInput.vue";
import { reactive } from "vue";

const router = useRouter();

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CREATE_SUBSCRIBER_MUTATION($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

const {
  mutate: createSubscriber,
  loading,
  error,
} = useMutation(CREATE_SUBSCRIBER_MUTATION);

const form = reactive({
  name: "",
  email: "",
});

async function handleSubscribe(name: string, email: string) {
  await createSubscriber({ name, email });
  localStorage.setItem("subscribed", "true");
  await router.push({ name: "event" });
}
</script>
<template>
  <div
    class="bg-norepeat flex min-h-screen flex-col items-center bg-blur bg-cover"
  >
    <div
      class="mx-auto mt-20 w-full max-w-[1100px] flex-row items-center justify-between sm:flex"
    >
      <div class="max-w-[660px]">
        <BaseLogo />
        <h1 class="mt-8 text-[2.5rem] leading-tight">
          Construa uma
          <strong class="text-blue-500">aplicação completa</strong>, do zero,
          com
          <strong class="text-blue-500">React</strong>
        </h1>
        <p class="mt-4 leading-relaxed text-gray-200">
          Em apenas uma semana você vai dominar na prática uma das tecnologias
          mais utilizadas e com alta demanda para acessar as melhores
          oportunidades do mercado.
        </p>
      </div>
      <div class="rounded border border-gray-500 bg-gray-700 p-8">
        <strong class="mb-6 block text-2xl">Inscreva-se gratuitamente</strong>

        <form @submit.prevent="handleSubscribe(form.name, form.email)">
          <fieldset class="flex w-full flex-col gap-2" :disabled="loading">
            <BaseInput
              v-model="form.name"
              type="text"
              required
              placeholder="Seu nome completo"
            />
            <BaseInput
              v-model="form.email"
              type="email"
              required
              placeholder="Digite seu email"
            />

            <div class="mt-4">
              <BaseButton type="submit" variant="primary" :loading="loading">
                Garantir minha vaga
              </BaseButton>
              <span class="text-xs text-red-500">{{ error }}</span>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
    <img src="/src/assets/code-mockup.png" class="mt-10" alt="" />
  </div>
</template>
