<template>
  <div
    :class="[
      ' flex w-full items-start border-b border-border lg:items-center',
      'gap-4 py-6 sm:gap-6 md:py-7 lg:gap-8 lg:px-6 xl:gap-10',
    ]"
  >
    <BaseCheckbox v-model="cartStore.selectedCartItems" :value="product" />

    <router-link
      :to="productPageLink"
      class="flex h-16 w-16 flex-none flex-col overflow-hidden rounded-xl hover:opacity-75 sm:h-20 sm:w-20"
    >
      <img :src="product.image" alt="product image" class="h-full" />
    </router-link>

    <div
      class="grid flex-1 gap-2 lg:grid-cols-[3.5fr_4.5fr_4fr] lg:items-center lg:gap-0 xl:grid-cols-[3fr_5fr_4fr]"
    >
      <router-link
        :to="productPageLink"
        class="text-16-m line-clamp-3 hover:underline lg:w-40"
      >
        {{ product.name }}
      </router-link>

      <div class="flex flex-col gap-1 text-font-gray-1 lg:flex-row lg:gap-0">
        <p class="basis-3/5 justify-start">
          {{ product.date }}
        </p>
        <p class="flex basis-2/5 items-center">
          <TicketIcon class="mr-1 h-5 w-5 stroke-[1.5]" /> x
          {{ product.quantity }}
        </p>
      </div>

      <div class="flex flex-auto items-center justify-between">
        <p class="text-16-m flex basis-2/4 lg:justify-end xl:pr-6">
          TWD
          {{ useFormattedPrice(product.totalPrice) }}
        </p>

        <div
          class="flex basis-2/4 items-center justify-end gap-5 sm:gap-8 lg:w-32"
        >
          <button class="" @click="$emit('remove')">
            <TrashIcon class="h-6 w-6 stroke-font-dark stroke-2" />
          </button>
          <button class="" @click="openUpdateCartItemModal()">
            <PencilIcon class="h-6 w-6 stroke-font-dark stroke-2" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import UpdateCartItemModal from "@/components/Cart/UpdateCartItemModal.vue";
import BaseCheckbox from "@/components/Shared/BaseCheckbox.vue";
import {
  defineProps,
  computed,
  defineEmits,
  onUnmounted,
  onMounted,
} from "vue";
import { useCartStore } from "@/stores/cart";
import { useModalStore } from "@/stores/modal";
import { useFormattedPrice } from "@/composables/useFormattedPrice";
import { PencilIcon, TrashIcon, TicketIcon } from "@heroicons/vue/24/outline";

const cartStore = useCartStore();
const { openModal } = useModalStore();

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  cartStore.selectedCartItems.push(props.product);
});

onUnmounted(() => {
  const productIndex = cartStore.selectedCartItems.findIndex(
    (item) => item.id === props.product.id && item.date === props.product.date
  );
  if (productIndex > -1) cartStore.selectedCartItems.splice(productIndex, 1);
});

defineEmits(["remove", "countNum"]);

const productPageLink = computed(() => `product/${props.product.id}`);

function openUpdateCartItemModal() {
  openModal({
    component: UpdateCartItemModal,
    props: { product: props.product },
  });
}
</script>
