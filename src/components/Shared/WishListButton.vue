<template>
  <button @click="wishListStore.toggleWishList(product)">
    <HeartIcon
      :class="[
        'h-full w-full stroke-2',
        'transition duration-500  ease-in-out hover:scale-110',
        theme === 'outline' && !isAdded && ' fill-transparent stroke-font-dark',
        theme === 'outline' && isAdded && 'fill-error stroke-error',
        theme === 'solid' && !isAdded && ' fill-black/60 stroke-white',
        theme === 'solid' && isAdded && 'fill-error stroke-white',
      ]"
    />
  </button>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { useWishListStore } from "@/stores/wishlist";
import { HeartIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  product: {
    type: Object,
    default() {
      return {};
    },
  },
  theme: {
    type: String,
    required: true,
  },
});

const wishListStore = useWishListStore();
const isAdded = computed(() => {
  return wishListStore.wishLists.includes(props.product.id);
});
</script>
