<template>
  <div
    :class="[
      'w-max rounded-full border px-4 py-2 ',
      'flex items-center gap-2',
      type === 'text' && 'cursor-pointer',
      !isSelected &&
        'border-border bg-white text-font-gray-1 lg:hover:border-primary',
      isSelected && 'border-primary bg-primary-light text-primary-dark',
    ]"
    @click="toggleChip"
  >
    <p class="text-14-r flex items-center">{{ label }}</p>
    <button
      v-if="type === 'removable'"
      class="hover:text-font-dark"
      type="button"
      @click="$emit('removeChip', true)"
    >
      <XMarkIcon class="h-5 w-5 stroke-2" />
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: "text",
  },
  isSelected: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emit = defineEmits(["chipState", "removeChip"]);

const isSelectedRef = ref(props.isSelected);

function toggleChip() {
  if (props.type !== "removable") isSelectedRef.value = !props.isSelected;
  emit("chipState", isSelectedRef.value);
}
</script>
