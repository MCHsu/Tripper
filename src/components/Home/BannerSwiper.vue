<template>
  <div class="relative flex items-center">
    <swiper-container
      ref="swiperEl"
      slides-per-view="1.2"
      space-between="16"
      loop="true"
      speed="700"
      :breakpoints="{
        '400': {
          slidesPerView: 1.3,
          spaceBetween: 16,
        },
        '576': {
          slidesPerView: 1.5,
          spaceBetween: 16,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        '992': {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      }"
      class="-my-1"
    >
      <swiper-slide
        v-for="item in items"
        :key="item.id"
        class="py-1 lg:hover:-translate-y-1 lg:hover:transition-transform"
        ><img
          class="rounded-2xl object-cover"
          :src="require(`@/assets/Image/${item.img}`)"
          alt=""
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
import { ref } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

const items = ref([
  { id: 1, title: "Item 1", img: "banner-1.jpg" },
  { id: 2, title: "Item 2", img: "banner-2.jpg" },
  { id: 3, title: "Item 3", img: "banner-3.jpg" },
  { id: 4, title: "Item 4", img: "banner-4.jpg" },
  { id: 5, title: "Item 5", img: "banner-5.jpg" },
  { id: 6, title: "Item 6", img: "banner-6.jpg" },
]);

const swiperEl = ref(null);

function slideNext() {
  swiperEl.value.swiper.slideNext();
}
function slidePrev() {
  swiperEl.value.swiper.slidePrev();
}
</script>


