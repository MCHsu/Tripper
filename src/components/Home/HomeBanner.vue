<template>
  <div
    :class="[
      'h-max w-full sm:aspect-[2.5] lg:h-[340px] lg:rounded-3xl',
      'bg-hero-image bg-cover bg-center',
    ]"
  >
    <div
      class="flex w-full items-center bg-green-900/25 py-8 sm:h-full lg:rounded-3xl"
    >
      <div class="flex w-full flex-col items-center">
        <div class="mx-6 text-center text-white">
          <h1 class="md:text-[40px]">Find your special local experience</h1>
          <p class="text-18-m md:text-24-sb mt-2 md:mt-4">
            Holiday expert for travelers
          </p>
        </div>

        <div
          class="mt-6 h-12 w-full px-7 sm:w-[70%] sm:px-0 md:mt-9 lg:w-[55%]"
        >
          <SearchBar class="z-30"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchBar from "@/components/Shared/SearchBar.vue";
</script>
