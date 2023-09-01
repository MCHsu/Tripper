<template>
  <section>
    <h2 class="mb-6">My Orders</h2>
    <div v-if="orderLists.length!==0">
      <OrderItemCard
        v-for="order in orderLists"
        :key="order"
        :product="order"
        :order-info="order"
      />
    </div>
    <div v-else class="flex flex-grow items-center justify-center">
      <ResultNotFound text="Your order is empty!" />
    </div>
  </section>
</template>

<script setup>
import OrderItemCard from "@/components/Card/OrderItemCard.vue";
import ResultNotFound from "@/components/Shared/ResultNotFound.vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { orderLists } = storeToRefs(userStore);



// console.log("userStore.orderLists", orderLists);
// console.log("userStore.orderLists", userStore.orderLists);

</script>
