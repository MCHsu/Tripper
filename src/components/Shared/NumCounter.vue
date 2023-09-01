<template>
  <div class="flex items-center gap-4">
    <button
      type="button"
      class="rounded-lg bg-[#ECF2E1] p-2 disabled:bg-gray-50 disabled:text-font-gray-1 disabled:hover:bg-gray-50 lg:hover:bg-[#E3EBD2]"
      :disabled="countDisabled"
      @click="minusNum"
    >
      <MinusIcon class="h-5 w-5 stroke-2" />
    </button>
    <span class="w-8 text-center text-xl font-medium"> {{ quantity }}</span>
    <button
      type="button"
      class="rounded-lg bg-[#ECF2E1] p-2 lg:hover:bg-[#E3EBD2]"
      @click="addNum"
    >
      <PlusIcon class="h-5 w-5 stroke-2" />
    </button>
  </div>
</template>

<script setup>
import { ref, computed, defineEmits, defineProps } from "vue";
import { PlusIcon, MinusIcon } from "@heroicons/vue/24/outline";

const emit = defineEmits(["countNum"]);
const props = defineProps({
  defaultQuantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

const quantity = ref(props.defaultQuantity);

const countNum = () => {
  emit("countNum", quantity.value);
};

const countDisabled = computed(() => {
  return quantity.value <= 1;
});

function addNum() {
  quantity.value++;
  countNum();
}
function minusNum() {
  quantity.value--;
  countNum();
}
</script>
