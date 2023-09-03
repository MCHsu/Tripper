<template>
  <div class="flex h-screen flex-col ">
    <MainNav />
    <main :class="['mt-[3.25rem] flex-grow sm:mt-16', activeClass]">
      <router-view />
      <ModalWindow />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import MainNav from "@/components/Navigation/MainNav.vue";
import TheFooter from "@/components/Footer/TheFooter.vue";
import ModalWindow from "@/components/Shared/ModalWindow.vue";
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/product.js";

const route = useRoute();
const productStore = useProductStore();

onMounted(async () => {
  if (!productStore.products.length) {
    await productStore.getProducts();
  }
});

const activeClass = computed(() => {
  if (["cart", "checkout", "userProfile", "userOrder","ordersDetail"].includes(route.name)) {
    return "bg-[#FAFAFA]";
  } else {
    return null;
  }
});
</script>
