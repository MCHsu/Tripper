<template>
  <div
    class="flex w-full items-start gap-4 border-b border-border py-7 sm:gap-6 lg:items-center lg:gap-10 lg:px-6"
  >
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
        class="text-16-r line-clamp-3 hover:underline lg:w-40"
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
        <p class="text-14-m flex basis-2/4 text-error lg:justify-end">
          Sold out, please select other items
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
import { defineProps, computed, defineEmits } from "vue";
import { useModalStore } from "@/stores/modal";
import { PencilIcon, TrashIcon, TicketIcon } from "@heroicons/vue/24/outline";

const { openModal } = useModalStore();

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

defineEmits(["remove", "countNum"]);

const productPageLink = computed(() => `product/${props.product.id}`);

function openUpdateCartItemModal() {
  openModal({
    component: UpdateCartItemModal,
    props: { product: props.product, cartType:"expired" },
  });
}
</script>
