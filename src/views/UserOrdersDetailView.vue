<template>
  <section
    class="container mb-6 mt-6 flex h-full flex-grow flex-col lg:mb-14 lg:mt-12 lg:items-center"
  >
    <div
      :class="[
        'w-full p-6 lg:w-max lg:divide-x lg:divide-y-0 lg:p-10',
        'flex flex-col divide-y rounded-3xl border border-border bg-white lg:flex-row',
      ]"
    >
      <div
        class="flex h-full w-full flex-col gap-3 pb-5 lg:w-max lg:pb-0 lg:pr-6"
      >
        <div
          class="flex aspect-video w-full flex-none flex-col overflow-hidden rounded-xl lg:w-80"
        >
          <img :src="order.image" alt="product image" class="h-full" />
        </div>

        <p class="text-14-m text-[#57af34]">
          <span v-if="!isExpired" class="flex items-center">
            <MegaphoneIcon
              class="mr-1 h-5 w-5 stroke-[#57af34] stroke-[1.5]"
            />Upcoming</span
          ><span v-else>History</span>
        </p>

        <div class="flex h-full flex-col gap-4">
          <p class="text-16-sb flex lg:w-80">
            {{ order.name }}
          </p>

          <div class="flex h-full flex-col gap-3 lg:justify-between">
            <div class="flex flex-col">
              <p class="text-14-r text-font-gray-1">Date of Use</p>
              <p class="text-14-m">{{ order.date }}</p>
            </div>
            <div class="flex flex-col">
              <p class="text-14-r text-font-gray-1">Quantity</p>
              <p class="text-14-m flex items-center">
                <TicketIcon class="mr-1 h-5 w-5 stroke-[1.5]" /> x
                {{ order.quantity }}
              </p>
            </div>
            <div class="flex flex-col">
              <p class="text-14-r text-font-gray-1">Paid</p>
              <p class="text-14-m">
                TWD {{ useFormattedPrice(order.totalPrice) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col divide-y lg:w-[440px]">
        <div class="flex flex-col gap-4 py-5 lg:pb-6 lg:pl-6 lg:pt-1">
          <div class="flex items-center">
            <span class="mr-1.5 h-4 w-1.5 rounded bg-primary"></span>
            <p class="text-16-m flex-wrap">Buyer Info</p>
          </div>

          <div class="flex flex-col gap-3">
            <div
              v-for="info in buyerInfo"
              :key="info.id"
              class="flex w-full flex-row items-center justify-between gap-5 lg:items-start"
            >
              <p class="text-14-r basis-2/5 flex-wrap text-font-gray-1">
                {{ info.title }}
              </p>
              <p class="text-14-m basis-3/5 text-right">{{ info.value }}</p>
            </div>
          </div>
        </div>

        <div class="flex h-full w-full flex-col gap-6 py-5 lg:pb-0 lg:pl-6">
          <div class="flex items-center">
            <span class="mr-1.5 h-4 w-1.5 rounded bg-primary"></span>
            <p class="text-16-m flex-wrap">Redeem your e-voucher</p>
          </div>

          <div class="flex h-full w-full items-center justify-center">
            <img
              src="@/assets/Image/fake_QRcode.png"
              alt="fake-QRcode"
              class="w-44 rounded-2xl border border-primary p-2"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
import { useUserStore } from "@/stores/user";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useFormattedPrice } from "@/composables/useFormattedPrice";
import { useFormattedDate } from "@/composables/useFormattedDate";
import { TicketIcon, MegaphoneIcon } from "@heroicons/vue/24/outline";

const route = useRoute();
const { getUniqueOrder } = storeToRefs(useUserStore());
const isExpired = ref(false);

const currentBookingNum = computed(() => route.params.id);
const order = ref(getUniqueOrder.value(currentBookingNum.value));
const buyerInfo = ref([
  {
    title: "Booking no.",
    value: `#${order.value.bookingNum}`,
  },
  {
    title: "Contact Name",
    value: `${order.value.buyerInfo.firstName} ${order.value.buyerInfo.lastName}`,
  },
  {
    title: "Email",
    value: order.value.buyerInfo.email,
  },
  {
    title: "Phone number",
    value: order.value.buyerInfo.phone,
  },
  {
    title: "Booking Date",
    value: useFormattedDate(order.value.ordered_at.seconds),
  },
]);

watchEffect(() => {
  if (new Date() > new Date(order.value.date)) {
    isExpired.value = true;
  }
});
</script>
