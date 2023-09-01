<template>
  <div
    :class="[
      ' flex w-full items-start border-b border-border',
      'gap-4 py-6 sm:gap-6 md:py-6 lg:gap-8 lg:px-6 xl:gap-8',
    ]"
  >
    <div
      class="flex h-16 w-16 flex-none flex-col overflow-hidden rounded-xl"
    >
      <img :src="product.image" alt="product image" class="h-full" />
    </div>

    <div class="flex flex-col gap-2 w-full">
      <p class="w-88 text-16-m">
        {{ product.name }}
      </p>

      <div class="flex flex-col gap-1 text-font-gray-1">
        <div class="text-16-r justify-start">
          {{ product.date }}
        </div>
        <div class="text-16-r flex basis-2/5 items-center">
          <TicketIcon class="mr-1 h-5 w-5 stroke-font-dark stroke-[1.5]" /> x
          {{ product.quantity }}
        </div>
      </div>

      <p class="text-16-m flex w-full justify-end">
        TWD
        {{ useFormattedPrice(product.totalPrice) }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { TicketIcon } from "@heroicons/vue/24/outline";
import { useFormattedPrice } from "@/composables/useFormattedPrice";

defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>
