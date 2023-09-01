<template>
  <!-- <div
    v-if="isLoading === true && filteredProducts.length === 0"
    class="container flex grow items-center justify-center"
  >
    <h2>Loading...</h2>
  </div> -->

  <!-- <div  class="h-full"> -->
  <div
    v-if="filteredProducts.length !== 0"
    class="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <ProductCard
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
    />
  </div>
  <div v-else class="flex h-full flex-grow items-center justify-center">
    <ResultNotFound />
  </div>
  <!-- </div> -->
</template>

<script setup>
import ProductCard from "@/components/Card/ProductCard.vue";
import ResultNotFound from "@/components/Shared/ResultNotFound.vue";
import { useProductStore } from "@/stores/product.js";
import { storeToRefs } from "pinia";

const { filteredProducts } = storeToRefs(useProductStore());
</script>
