<template>
  <div class="relative z-40 flex h-12 w-full items-center bg-primary-light sm:h-14">
    <div class="lg:px-auto h-full w-full pl-6 lg:container">
      <ul
        :class="[
          scrollClass,
          'no-scrollbar relative flex h-full w-full items-center justify-start gap-0 md:gap-3 ',
        ]"
      >
        <li>
          <BaseDropdown
            title="Destinations"
            @check-active="showDropdown = $event"
          >
            <template #icon>
              <MapPinIcon class="mr-1 h-5 w-5 stroke-2" />
            </template>
            <router-link
              v-for="country in productStore.countries"
              :key="country.id"
              :to="{ name: 'productList', query: { countries: country } }"
              class="mx-4 flex justify-start rounded-xl px-4 py-2 hover:bg-slate-50"
              >{{ country }}</router-link
            >
          </BaseDropdown>
        </li>

        <li
          v-for="category in productStore.categories"
          :key="category.id"
          class="flex "
        >
          <router-link
            :to="{ name: 'productList', query: { categories: category } }"
            class="text-16-m w-max rounded-full py-1.5 px-3 lg:hover:bg-white"
            >{{ category }}</router-link
          >
        </li>
      </ul>
    </div>
    <!-- </div> -->
  </div>
</template>

<script setup>
import BaseDropdown from "@/components/Shared/BaseDropdown.vue";
import { ref, computed } from "vue";
import { useProductStore } from "@/stores/product.js";
import { MapPinIcon } from "@heroicons/vue/24/outline";

const productStore = useProductStore();
const showDropdown = ref(false);

const scrollClass = computed(() => {
  return {
    "overflow-x-clip": showDropdown.value,
    "overflow-x-auto": !showDropdown.value,
  };
});
</script>
