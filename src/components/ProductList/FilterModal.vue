<template>
  <form
    id="form"
    novalidate
    class="flex h-[calc(100%-141px-5rem)] w-full flex-col md:h-auto"
    @submit.prevent="submitForm"
  >
    <div class="w-full p-6">
      <p class="text-18-sb text-center">Filter</p>
    </div>

    <div
      class="no-scrollbar flex shrink flex-col gap-6 overflow-y-auto md:mb-0"
    >
      <div class="flex flex-col gap-4">
        <p class="text-16-m">Countries</p>
        <div class="flex flex-row flex-wrap gap-x-2 gap-y-3">
          <BaseChip
            v-for="country in productStore.countries"
            :key="country.id"
            :label="country"
            :is-selected="selectedFilters.countries.includes(country)"
            @chip-state="handleChip($event, country, 'countries')"
          />
        </div>
      </div>

      <div class="mb-6 flex flex-col gap-4">
        <p class="text-16-m">Categories</p>
        <div class="flex flex-row flex-wrap gap-2">
          <BaseChip
            v-for="category in productStore.categories"
            :key="category.id"
            :label="category"
            :is-selected="selectedFilters.categories.includes(category)"
            @chip-state="handleChip($event, category, 'categories')"
          />
        </div>
      </div>
    </div>
    <div
      :class="[
        'fixed bottom-0 left-0 z-10 flex  w-full justify-between gap-4 md:relative md:gap-6 ',
        'px-6 py-4 md:mt-6 md:p-0',
        'border-t border-border shadow-fixed md:border-0 md:shadow-none',
      ]"
    >
      <button
        class="text-16-sb flex w-full items-center justify-between underline"
        type="button"
        @click="handleReset"
      >
        Reset
      </button>
      <ActionButton
        type="submit"
        :text="`Show ${resultsNum} results`"
        theme="primary"
        class="w-full"
      />
    </div>
  </form>
</template>

<script setup>
import BaseChip from "@/components/Shared/BaseChip.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import { ref, computed, defineProps, toRaw } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useProductStore } from "@/stores/product.js";
import { useModalStore } from "@/stores/modal";

const props = defineProps({
  keyword: {
    type: String,
    required: true,
  },
});

const productStore = useProductStore();
const router = useRouter();
const { filters } = storeToRefs(productStore);
const { getFilteredProducts } = productStore;
const modalStore = useModalStore();

const selectedFilters = ref({
  countries: toRaw([...filters.value.countries]),
  categories: toRaw([...filters.value.categories]),
});

const urlQuery = computed(() => {
  const queryObject = {};

  if (props.keyword) {
    queryObject.keyword = props.keyword;
  }

  if (selectedFilters.value.countries.length !== 0) {
    queryObject.countries = selectedFilters.value.countries.toString();
  }

  if (selectedFilters.value.categories.length !== 0) {
    queryObject.categories = selectedFilters.value.categories.toString();
  }

  return queryObject;
});

const resultsNum = computed(() => {
  return getFilteredProducts(props.keyword, selectedFilters.value).length;
});

function handleChip(event, chipValue, filterType) {
  if (event) {
    selectedFilters.value[filterType].push(chipValue);
  } else {
    const chipIndex = selectedFilters.value[filterType].indexOf(chipValue);
    if (chipIndex !== -1)
      selectedFilters.value[filterType].splice(chipIndex, 1);
  }
}

function handleReset() {
  selectedFilters.value.countries = [];
  selectedFilters.value.categories = [];
}

function submitForm() {
  if (resultsNum.value) {
    router.push({
      path: "/productlist",
      query: urlQuery.value,
    });
    modalStore.closeModal();
  }
}
</script>
