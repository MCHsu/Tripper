<template>
  <div id="wishlist" class="flex min-h-full flex-col">
    <section
      class="container mb-6 mt-6 flex h-full flex-grow flex-col lg:mb-14 lg:mt-12"
    >
      <div class="flex">
        <h2 class="mb-6">
          Wish List
          <span class="text-16-r align-middle"
            >({{ wishListStore.wishListItemNum }} items)</span
          >
        </h2>
      </div>
      <ProductWishlist />
    </section>
  </div>
</template>

<script setup>
import ProductWishlist from "@/components/Wishlist/ProductWishlist.vue";
import { useWishListStore } from "@/stores/wishlist.js";

const wishListStore = useWishListStore();
</script>
