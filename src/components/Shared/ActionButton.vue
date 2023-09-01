<template>
  <button
    v-bind="$attrs"
    :type="type"
    :class="[
      'text-18-sb relative min-w-max rounded-2xl',
      theme === 'primary' && ' bg-primary text-white',
      theme === 'secondary' &&
        'bg-transparent text-blue-300 hover:bg-blue-700 hover:text-white',
    ]"
  >
    <div
      :class="[
        'h-full w-full rounded-2xl bg-black bg-opacity-0 px-5 py-3',
        'hover:bg-opacity-5',
        'transition-colors duration-200 ease-linear',
      ]"
    >
      {{ text }}
    </div>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  text: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: "button",
  },
});
</script>
