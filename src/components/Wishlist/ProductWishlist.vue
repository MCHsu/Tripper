<template>
  <div
    v-if="wishListStore.wishLists.length != 0"
    class="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <ProductCard
      v-for="product in wishListStore.getWishListItems()"
      :key="product.id"
      :product="product"
    />
  </div>

  <div v-else class="flex flex-grow items-center justify-center">
    <ResultNotFound text="Your wish list is empty!" />
  </div>
</template>

<script setup>
import ProductCard from "@/components/Card/ProductCard.vue";
import ResultNotFound from "@/components/Shared/ResultNotFound.vue";
import { useWishListStore } from "@/stores/wishlist.js";

const wishListStore = useWishListStore();
</script>
