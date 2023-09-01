<template>
  <div v-if="isLoading && filteredProducts.length === 0" class="container">
    Loading...
  </div>
  <div v-else class="flex min-h-full flex-col">
    <section
      class="container mb-6 mt-6 flex h-full flex-grow flex-col lg:mb-14 lg:mt-12"
    >
      <h3 v-if="keyword" class="mb-4 border-b border-border pb-3 lg:mb-6">
        Search results "<span class="text-primary-dark">{{ keyword }}</span
        >"
      </h3>

      <div class="mb-4 flex items-center justify-between lg:mb-6">
        <p class="text-18-m">
          {{ filteredProducts.length }}
          results found
        </p>

        <div
          class="flex divide-x divide-font-gray-1 rounded-xl border border-font-gray-1"
        >
          <button
            class="text-16-m mx-2 flex items-center px-3 py-2"
            @click="openFilterModal"
          >
            <FunnelIcon class="h-5 w-5 stroke-2 sm:mr-1" />
            <span class="hidden sm:block">Filters</span>
          </button>

          <BaseDropdown class="z-10 pl-2 pr-2">
            <template #icon>
              <ArrowsUpDownIcon class="h-5 w-5 stroke-2 sm:mr-1" />
            </template>
            <template #title>
              <p class="hidden lg:block">Sort By | {{ sortByTitle }}</p>
              <p class="hidden sm:block lg:hidden">Sort</p>
            </template>
            <div
              v-for="option in sortBy"
              :key="option.id"
              class="mx-4 flex min-w-max cursor-pointer justify-start rounded-xl px-4 py-2 hover:bg-slate-50"
              @click="sortByValue = option.value"
            >
              {{ option.title }}
            </div>
          </BaseDropdown>
        </div>
      </div>
      <div
        v-if="filters.countries.length || filters.categories.length"
        class="mb-6 flex flex-wrap gap-2"
      >
        <BaseChip
          v-for="country in filters.countries"
          :key="country.index"
          :label="country"
          type="removable"
          :is-selected="true"
          @remove-chip="handleRemoveChip($event, country, 'countries')"
        />

        <BaseChip
          v-for="category in filters.categories"
          :key="category.index"
          :label="category"
          type="removable"
          :is-selected="true"
          @remove-chip="handleRemoveChip($event, category, 'categories')"
        />
        <button
          v-if="filters.countries.length || filters.categories.length"
          :class="[
            'w-max rounded-full border border-primary px-4 py-2 lg:hover:border-primary-dark',
            'flex items-center gap-2',
            'text-14-m text-primary-dark',
          ]"
          @click="handleClearAll"
        >
          clearAll
        </button>
      </div>
      <ProductSearchResult />
    </section>
  </div>
</template>

<script setup>
import ProductSearchResult from "@/components/ProductList/ProductSearchResult.vue";
import FilterModal from "@/components/ProductList/FilterModal.vue";
import BaseDropdown from "@/components/Shared/BaseDropdown.vue";
import BaseChip from "@/components/Shared/BaseChip.vue";
import { computed, watchEffect, ref } from "vue";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import { useProductStore } from "@/stores/product.js";
import { useModalStore } from "@/stores/modal";
import { FunnelIcon, ArrowsUpDownIcon } from "@heroicons/vue/24/outline";

const { openModal } = useModalStore();
const route = useRoute();
const router = useRouter();
const { filters, isLoading, sortBy, filteredProducts } = storeToRefs(
  useProductStore()
);
const { getFilteredProducts, SortProducts } = useProductStore();

const keyword = computed(() => route.query.keyword);
const sortByTitle = computed(() => {
  return sortBy.value.find((item) => item.value === sortByValue.value).title;
});
const sortByValue = ref("lowToHigh");

watchEffect(() => {
  filters.value.countries = route.query.countries
    ? route.query.countries.split(",")
    : [];

  filters.value.categories = route.query.categories
    ? route.query.categories.split(",")
    : [];

  filteredProducts.value = getFilteredProducts(keyword.value, filters.value);

  SortProducts(sortByValue.value);
});

function openFilterModal() {
  openModal({
    component: FilterModal,
    props: { keyword: keyword.value ? keyword.value : "" },
  });
}

function handleRemoveChip(event, chipValue, filterType) {
  if (event) {
    const chipIndex = filters.value[filterType].indexOf(chipValue);

    if (chipIndex !== -1) {
      filters.value[filterType].splice(chipIndex, 1);
    }

    const updatedFilterValue = filters.value[filterType].toString();
    const updatedQuery = {
      ...route.query,
      [filterType]: updatedFilterValue,
    };

    if (updatedFilterValue === "") {
      delete updatedQuery[filterType];
    }
    router.replace({
      query: updatedQuery,
    });
  }
}

function handleClearAll() {
  filteredProducts.value = { countries: [], categories: [] };

  const updatedQuery = {};

  if (keyword.value) {
    updatedQuery.keyword = keyword.value;
  }

  router.replace({
    query: updatedQuery,
  });
}
</script>
