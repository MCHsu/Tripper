<template>
  <div id="home">
    <SubNav />

    <section class="mb-10 sm:mb-12 lg:container lg:mt-12 lg:mb-16">
      <HomeBanner class="z-30" />
    </section>

    <section class="sm:container mb-10 sm:mb-12 lg:mt-12 lg:mb-16 pl-6">
      <h2 class="mb-4 sm:mb-6">Latest travel promotions</h2>
      <BannerSwiper />
    </section>

    <section class="sm:container mb-10 sm:mb-12 lg:mt-12 lg:mb-16 pl-6">
      <h2 class="mb-4 sm:mb-6">Latest Experiences</h2>
      <ProductItemSwiper :products="getLatestProducts()" />
    </section>

    <section class="sm:container mb-10 sm:mb-12 lg:mt-12 lg:mb-16 pl-6">
      <h2 class="mb-4 sm:mb-6">Recommended for you</h2>
      <ProductItemSwiper :products="getRandomProducts()" />
    </section>

    <section class="container mb-10 sm:mb-12 lg:mt-12 lg:mb-16">
      <div
        class="flex flex-col justify-between rounded-3xl bg-[#F6F8F0] md:flex-row md:items-center"
      >
        <div class="flex flex-1 flex-col gap-4 p-10 lg:ml-10">
          <p class="text-3xl font-semibold">Why Tripper ?</p>
          <p class="text-font-gray-1">
            See why millions of travelers choose to experience the world as part
            of our strong and secure Tripper community.
          </p>
        </div>

        <div class="mb-6 flex h-72 flex-1 items-center justify-center md:mb-0">
          <img
            src="@/assets/Image/whyTripper.svg"
            alt="why Tripper"
            class="h-40 md:h-64"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ProductItemSwiper from "@/components/Home/ProductItemSwiper.vue";
import SubNav from "@/components/Navigation/SubNav.vue";
import HomeBanner from "@/components/Home/HomeBanner.vue";
import BannerSwiper from "@/components/Home/BannerSwiper.vue";
import { useProductStore } from "@/stores/product";

const { getRandomProducts, getLatestProducts } = useProductStore();
</script>
