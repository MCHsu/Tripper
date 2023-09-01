<template>
  <section class="mb-4 bg-white py-3 lg:mb-6 lg:py-4">
    <div
      :class="[
        'mx-auto sm:w-[576px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] ',
        'flex justify-between',
        'sm:text-14-r text-xs text-font-gray-1',
      ]"
    >
      <router-link
        :to="pathName === 'checkout' ? '/cart' : ''"
        :class="[
          'w-1/3 px-2 text-center',
          pathName === 'cart' && 'sm:text-14-sb font-semibold text-[#444444]',
          pathName !== 'checkout' && 'pointer-events-none',
        ]"
      >
        <div class="relative flex">
          <ShoppingCartIcon
            :class="['mx-auto mb-1 h-7 w-7', pathName === 'cart' && 'stroke-2']"
          />
          <div
            class="absolute left-[calc((100%/2+1.75rem))] top-3 h-px w-[calc(100%-2.5rem)] rounded-full bg-font-gray-1"
          ></div>
        </div>
        <p>Shopping Cart</p>
      </router-link>
      <div
        :class="[
          'w-1/3 px-2 text-center',
          pathName === 'checkout' &&
            ' sm:text-14-sb font-semibold text-[#444444]',
        ]"
      >
        <div class="relative flex">
          <CreditCardIcon
            :class="[
              'mx-auto mb-1 h-7 w-7',
              pathName === 'checkout' && 'stroke-2',
            ]"
          />
          <div
            class="absolute left-[calc((100%/2+1.75rem))] top-3 h-px w-[calc(100%-2.5rem)] bg-font-gray-1"
          ></div>
        </div>
        <p>Info & Payment</p>
      </div>
      <div
        :class="[
          'w-1/3 px-2 text-center',
          pathName === 'checkoutDone' &&
            ' sm:text-14-sb font-semibold text-[#444444]',
        ]"
      >
        <CheckCircleIcon
          :class="[
            'mx-auto mb-1 h-7 w-7',
            pathName === 'checkoutDone' && 'stroke-2',
          ]"
        />
        <p>Done</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import {
  ShoppingCartIcon,
  CreditCardIcon,
  CheckCircleIcon,
} from "@heroicons/vue/24/outline";

const route = useRoute();
const pathName = ref(route.name);
</script>
