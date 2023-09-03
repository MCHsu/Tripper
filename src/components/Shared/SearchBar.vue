<template>
  <div ref="dropdown" class="relative flex flex-col">
    <div class="relative flex">
      <input
        v-model.trim="keyword"
        type="text"
        :placeholder="placeholder"
        class="text-16-r h-11 w-full rounded-2xl border border-border px-4 font-normal focus:outline-none focus:ring-1 focus:ring-primary"
        @keydown.enter="goToSearchResult"
        @focus="showDropdown"
        @input="showDropdown"
      />

      <button
        v-if="keyword"
        class="absolute right-16 flex h-full items-center"
        @click="clearKeyword"
      >
        <XMarkIcon class="h-6 w-6 stroke-2" />
      </button>

      <button
        ref="searchButton"
        :class="[
          'absolute right-0 flex h-full items-center rounded-2xl px-4',
          !keyword && 'cursor-default bg-slate-100 text-slate-400',
          keyword && 'bg-primary text-white',
        ]"
        @click="goToSearchResult"
      >
        <MagnifyingGlassIcon class="h-6 w-6 stroke-2" />
      </button>
    </div>

    <transition name="dropdown">
      <div
        v-if="keyword && isDropdownVisible"
        :class="[
          'absolute top-12 max-h-72 w-full rounded-2xl border  border-border bg-white py-4 shadow-md',
          'overflow-hidden overflow-y-auto overscroll-contain',
        ]"
      >
        <div v-if="searchProducts(keyword).length === 0" class="px-4 py-2">
          No search results for "{{ keyword }}"
        </div>
        <div
          v-for="product in searchProducts(keyword)"
          v-else
          :key="product.id"
          class="mx-4"
        >
          <router-link
            :to="`/product/${product.id}`"
            class="flex gap-3 rounded-lg px-3 py-2 hover:bg-slate-50"
            @click="hideDropdown"
          >
            <img :src="product.image" alt="" class="h-11 w-11 rounded-lg" />
            <div class="flex flex-col">
              <p class="line-clamp-1">{{ product.name }}</p>
              <p class="text-14-r flex items-center gap-0.5 text-font-gray-1">
                <MapPinIcon class="h-3.5 w-3.5" />
                {{ product.country }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
// import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { onClickOutside } from "@vueuse/core";
import { useProductStore } from "@/stores/product";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { MapPinIcon, XMarkIcon } from "@heroicons/vue/24/solid";

const { searchProducts } = useProductStore();
const router = useRouter();

const keyword = ref("");
const isDropdownVisible = ref(false);
const dropdown = ref(null);
const searchButton = ref(null);

defineProps({
  placeholder: {
    type: String,
    required: false,
    default: "Where to go or what to do",
  },
});

function hideDropdown() {
  isDropdownVisible.value = false;
}

function showDropdown() {
  isDropdownVisible.value = true;
}

function clearKeyword() {
  keyword.value = "";
}

function goToSearchResult() {
  if (keyword.value) {
    router.push({ name: "productList", query: { keyword: keyword.value } });
  }
  hideDropdown();
}

onClickOutside(
  dropdown,
  () => {
    isDropdownVisible.value = false;
  },
  { ignore: [searchButton] }
);
</script>

<style>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(5px);
}
</style>
