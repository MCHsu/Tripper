<template>
  <div class="flex flex-col rounded-2xl bg-white border border-border px-5 py-2 sm:px-8 sm:py-3 md:px-10 lg:px-14 lg:py-4">
    <div
      :class="[
        'flex cursor-pointer items-center justify-between py-3',
        showContent && 'border-b border-border',
      ]"
      @click="toggleContent"
    >
      <div class="flex items-center">
        <span class="mr-2 h-6 w-2 rounded bg-primary"></span>
        <h2>{{ title }}</h2>
      </div>
      <ChevronUpIcon v-if="showContent" class="h-6 w-6 stroke-2" />
      <ChevronDownIcon v-else class="h-6 w-6 stroke-2" />
    </div>

    <div v-if="showContent" class="my-6">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/24/outline";

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const showContent = ref(true);

const toggleContent = () => {
  showContent.value = !showContent.value;
};
</script>
