<template>
  <div class="relative w-full">
    <router-link
      :to="productPageLink"
      class="flex flex-shrink-0 flex-col rounded-2xl"
    >
      <div
        class="relative flex aspect-video w-full overflow-hidden rounded-2xl"
      >
        <img
          :src="product.image"
          alt="product image"
          class="w-full object-cover object-center transition duration-1000 ease-out hover:scale-125"
        />
      </div>
      <div class="py-3">
        <p
          class="text-14-r mb-1 w-max rounded-md bg-[#F6F8F0] py-1 px-1.5 text-[#57af34]"
        >
          {{ product.category }}
        </p>
        <p class="text-16-r mb-2 line-clamp-2">
          {{ product.name }}
        </p>
        <div class="text-16-sb mt-4">
          <span class="mr-1">TWD</span>
          <span> {{ productPrice }}</span>
        </div>
      </div>
    </router-link>

    <WishListButton
      class="absolute top-0 right-0 h-12 w-12 p-3"
      theme="solid"
      :product="product"
    />
  </div>
</template>

<script setup>
import WishListButton from "@/components/Shared/WishListButton.vue";
import { defineProps, computed } from "vue";
import { useFormattedPrice } from "@/composables/useFormattedPrice";

const props = defineProps({
  product: {
    type: Object,
    default() {
      return {};
    },
    required: true,
  },
});

const productPageLink = computed(() => `product/${props.product.id}`);

const productPrice = useFormattedPrice(props.product.price);
</script>
