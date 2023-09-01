<template>
  <header
    class="fixed left-0 top-0 z-50 h-[3.25rem] w-full border-b border-solid border-border bg-white pl-[calc(100vw-100%)] sm:h-16"
  >
    <div
      class="mx-6 flex h-full items-center justify-between lg:container xl:mx-auto"
    >
      <div class="flex items-center">
        <router-link
          to="/"
          class="flex h-full w-28 shrink-0 items-center sm:w-36 lg:mr-5 lg:w-40"
        >
          <img src="@/assets/Image/Logo_L.svg" class="h-auto w-full" />
        </router-link>

        <div v-if="showSearch" class="hidden w-80 lg:block">
          <SearchBar />
        </div>
      </div>
      <!-- Menu items -->
      <nav class="flex h-full sm:gap-3">
        <button
          v-if="showSearch"
          class="my-auto flex items-center rounded-full p-2 sm:p-2.5 lg:hidden lg:hover:bg-slate-100"
          @click="openSearch"
        >
          <MagnifyingGlassIcon class="h-7 w-7 stroke-font-dark stroke-2" />
        </button>

        <router-link
          to="/wishlist"
          class="relative my-auto flex items-center rounded-full p-2 sm:p-2.5 lg:hover:bg-slate-100"
        >
          <HeartIcon class="h-7 w-7 stroke-font-dark stroke-2" />
        </router-link>

        <router-link
          to="/cart"
          class="relative my-auto flex items-center rounded-full p-2 sm:p-2.5 lg:hover:bg-slate-100"
        >
          <ShoppingCartIcon class="h-7 w-7 stroke-font-dark stroke-2" />
          <span
            :class="[
              'absolute right-0 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-dark',
              'text-xs text-white',
              isBadgeHidden && 'hidden',
            ]"
            >{{ cartStore.cartItemNum }}</span
          >
        </router-link>

        <div class="flex h-full w-full items-center">
          <UserImage v-if="isLoggedIn" class="ml-2 sm:ml-2.5" />
          <button
            v-else
            class="my-auto flex items-center rounded-full p-2 sm:p-2.5 lg:hover:bg-slate-100"
            @click="openLogInModal"
          >
            <UserCircleIcon class="h-7 w-7 stroke-font-dark stroke-2" />
          </button>
        </div>
      </nav>
    </div>
  </header>
  <div
    v-if="isSearchOpened"
    class="fixed top-[3.25rem] z-50 w-full bg-black/70 px-6 py-3 sm:top-16"
  >
    <SearchBar />
  </div>

  <!-- <SubNav v-if="route.path === '/'" /> -->
</template>

<script setup>
// import SearchModal from "@/components/Navigation/SearchModal.vue";
// import SubNav from "@/components/Navigation/SubNav.vue";
import UserImage from "@/components/Navigation/UserImage.vue";
import SearchBar from "@/components/Shared/SearchBar.vue";
import LogInModal from "@/components/Navigation/LogInModal.vue";
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { useAuthStore } from "@/stores/auth";
import { useModalStore } from "@/stores/modal";
import {
  HeartIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/24/outline";

const route = useRoute();
const { isLoggedIn } = storeToRefs(useAuthStore());
const { openModal } = useModalStore();
const cartStore = useCartStore();
const isSearchOpened = ref(false);

const isBadgeHidden = computed(() => {
  return cartStore.cartItemNum === 0;
});

// function openSearchModal() {
//   openModal({
//     component: SearchModal,
//   });
// }
function openSearch() {
  isSearchOpened.value = !isSearchOpened.value;
}
const showSearch = computed(() => {
  if (route.name === "home" || route.name === "checkout") {
    return false;
  } else {
    return true;
  }
});

function openLogInModal() {
  openModal({
    component: LogInModal,
  });
}
</script>
