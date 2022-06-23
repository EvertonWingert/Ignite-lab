<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { computed } from "vue";

interface Props {
  modelValue: string;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);
const model = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <input
    v-model="model"
    :class="[
      'h-14 rounded rounded bg-gray-900 px-5 transition-colors',
      model.length
        ? 'invalid:border-red-500 invalid:text-red-500 focus:border-green-500 focus:ring-green-500 invalid:focus:border-red-500 invalid:focus:ring-red-500 disabled:opacity-50'
        : '',
    ]"
    v-bind="$attrs"
  />
</template>
