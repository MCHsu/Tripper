<template>
  <div class="relative flex items-center">
    <button
      ref="dropdown"
      :class="[
        'text-16-m flex w-max items-center rounded-full px-3 py-2 lg:hover:bg-white',
        isActive && 'bg-white',
      ]"
      @click="toggle()"
    >
      <slot name="icon" />
      {{ title }}<span><slot name="title" /></span>
    </button>
    <div
      v-if="isActive"
      ref="dropdownContent"
      :class="[
        'absolute right-0 top-11 flex w-full min-w-min flex-col gap-2 overflow-visible py-4 lg:left-0',
        'rounded-2xl border border-border bg-white  drop-shadow-sm',
      ]"
    >
      <div ref="dropdownContentSlot" @click="toggle">
        <slot  />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watchEffect } from "vue";
import { onClickOutside } from "@vueuse/core";

const dropdown = ref(null);
const dropdownContent = ref(null);
const dropdownContentSlot = ref(null);
const isActive = ref(false);

defineProps({
  title: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["checkActive"]);

watchEffect(() => {
  emit("checkActive", isActive.value);
});

function toggle() {
  isActive.value = !isActive.value;
}

onClickOutside(
  dropdownContent,
  () => {
    isActive.value = false;
  },
  { ignore: [dropdown, dropdownContentSlot] }
);
</script>
