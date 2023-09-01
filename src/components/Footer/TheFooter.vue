<template>
  <!-- <footer class="bg-[#f2f1f1] border-t"> -->
  <footer class="border-t border-border bg-white">
    <div
      :class="[
        'container mx-auto flex flex-col items-center justify-between py-6 sm:flex-row',
        activeClass,
      ]"
    >
      <p>© 2023 Tripper Ltd.</p>

      <div class="mt-4 flex gap-3 text-font-gray-1 sm:ml-auto sm:mt-0">
        <div>
          <svg
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="h-5 w-5"
            viewBox="0 0 24 24"
          >
            <path
              d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
            ></path>
          </svg>
        </div>
        <div>
          <svg
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="h-5 w-5"
            viewBox="0 0 24 24"
          >
            <path
              d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
            ></path>
          </svg>
        </div>
        <div>
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="h-5 w-5"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path
              d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
// const currentRoute = computed(() => route.name);
const activeClass = computed(() => {
  switch (route.name) {
    case "cart":
      return "cart-add-mb";
    case "productDetail":
      return "product-add-mb";
    case "checkout":
      return "checkout-add-mb";
    default:
      return null;
  }
});

</script>

<style scoped>
.cart-add-mb {
  @apply mb-[148px] sm:mb-[140px] md:mb-[80px] lg:mb-0;
}
.product-add-mb {
  @apply mb-[132px] lg:mb-0;
}
.checkout-add-mb {
  @apply mb-[174px] lg:mb-0;
}
</style>
