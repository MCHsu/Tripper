<template>
  <router-link
    :to="orderDetailPageLink"
    :class="[
      ' flex w-full flex-col items-start rounded-2xl border border-gray-200 md:flex-row lg:hover:shadow',
      'mb-4 gap-4 p-4  md:gap-5 md:p-4 lg:gap-6 lg:p-5 xl:gap-8',
    ]"
  >
    <div
      class="flex aspect-[2/1] w-full flex-none flex-col overflow-hidden rounded-xl md:h-44 md:w-44"
    >
      <img
        :src="product.image"
        alt="product image"
        class="h-full object-cover"
      />
    </div>

    <div class="flex w-full flex-col gap-2">
      <div class="flex items-center justify-between">
        <p class="text-16-m text-[#57af34]">
          <span v-if="!isExpired" class="flex items-center">
            <MegaphoneIcon
              class="mr-1 h-5 w-5 stroke-[#57af34] stroke-[1.5]"
            />Upcoming</span
          ><span v-else>History</span>
        </p>
        <div
          :class="[
            'text-16-m rounded-lg  py-1 px-2 ',
            !isExpired && 'bg-primary-light text-[#57af34]',
            isExpired && 'bg-gray-100 text-gray-400',
          ]"
        >
          {{ usageDate() }}
        </div>
      </div>

      <p class="text-16-m">
        {{ product.name }}
      </p>
      <div class="flex flex-col gap-1 text-font-gray-1">
        <p class="text-14-r flex items-center">
          <TagIcon
            class="mr-1 h-4 w-4 shrink-0 stroke-font-dark stroke-[1.5]"
          />
          Booking no. : #{{ orderInfo.bookingNum }}
        </p>

        <p class="text-14-r flex basis-2/5 items-center">
          <TicketIcon class="mr-1 h-4 w-4 stroke-font-dark stroke-[1.5]" /> x
          {{ product.quantity }}
        </p>
      </div>
      <p class="text-16-m flex w-full justify-end">
        TWD
        {{ useFormattedPrice(product.totalPrice) }}
      </p>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps, watchEffect, ref, computed } from "vue";
import { useFormattedPrice } from "@/composables/useFormattedPrice";
import { TicketIcon, TagIcon, MegaphoneIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  orderInfo: {
    type: Object,
    required: true,
  },
});

const isExpired = ref(false);

const usageDate = () => {
  const month = new Date(props.product.date).toLocaleString("en-US", {
    month: "short",
  });
  const day = new Date(props.product.date).getDate();
  return `${month} ${day}`;
};

watchEffect(() => {
  if (new Date() > new Date(props.product.date)) {
    isExpired.value = true;
  }
});

const orderDetailPageLink = computed(() => `order/${props.product.bookingNum}`);
</script>
