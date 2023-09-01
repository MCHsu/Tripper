<template>
  <div class="flex flex-col items-center justify-center gap-4">
    <img
      src="@/assets/Image/result-not-found.svg"
      alt="result-not-found"
      class="w-60"
    />
    <p class="text-18-m text-font-gray-1 mb-6">{{text}}</p>
  </div>
</template>

<script setup>
import { defineProps} from "vue";

defineProps({
  text: {
    type: String,
    required: false,
    default:"No search results found"
  },
});

</script>
