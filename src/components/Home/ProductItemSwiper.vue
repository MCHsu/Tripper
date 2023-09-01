<template>
  <div class="relative flex items-center">
    <swiper-container
      ref="swiperEl"
      slides-per-view="1.5"
      speed="1100"
      loop="true"
      space-between="16"
      :breakpoints="{
        '576': {
          slidesPerView: 2.5,
          spaceBetween: 16,
        },
        '768': {
          slidesPerView: 3,
          slidesPerView: 3,
          spaceBetween: 16,
        },
        '992': {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 16,
        },
      }"
    >
      <swiper-slide v-for="product in products" :key="product.id"
        ><ProductCard :product="product" class="w-auto"
      /></swiper-slide>
    </swiper-container>

    <button
      class="absolute -left-[3.25rem] xl:-left-14 hidden h-10 w-10 rounded-full border shadow-md md:block"
      @click="slidePrev()"
    >
      <ChevronLeftIcon
        class="mx-auto h-6 w-6 stroke-2 text-slate-400 hover:text-slate-800"
      />
    </button>

    <button
      class="absolute -right-[3.25rem] xl:-right-14 hidden h-10 w-10 rounded-full border shadow-md md:block"
      @click="slideNext()"
    >
      <ChevronRightIcon
        class="mx-auto h-6 w-6 stroke-2 text-slate-400 hover:text-slate-800"
      />
    </button>
  </div>
</template>

<script setup>
import ProductCard from "@/components/Card/ProductCard.vue";
import { ref,defineProps} from "vue";
// import { storeToRefs } from "pinia";
// import { useProductStore } from "@/stores/product";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

// const { products } = storeToRefs(useProductStore());
defineProps({
  products: {
    type: Array,
    required: true,
  },
})
const swiperEl = ref(null);

function slideNext() {
  swiperEl.value.swiper.slideNext();
}
function slidePrev() {
  swiperEl.value.swiper.slidePrev();
}
</script>
