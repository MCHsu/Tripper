<template>
  <form
    novalidate
    class="flex h-[calc(100%-141px-5rem)] w-full flex-col md:h-auto"
    @submit.prevent="submitForm"
  >
    <div class="w-full p-6">
      <p class="text-18-sb text-center">Select date & quantity</p>
    </div>

    <div class="no-scrollbar flex shrink flex-col overflow-y-auto md:mb-0">
      <BaseDatePicker @usage-date="date = $event" />
      <div v-if="showErrorMsg && !isDateSelected" class="mb-4 text-error">
        Please select a usage date
      </div>
      
      <div
        class="mb-4 flex items-center justify-between rounded-xl border border-border p-4"
      >
        <p class="text-16-m">Quantity</p>
        <NumCounter
          :default-quantity="quantity"
          @count-num="quantity = $event"
        />
      </div>
    </div>

    <div
      :class="[
        'fixed bottom-0 left-0 flex w-full flex-col justify-between gap-4 md:relative md:gap-6 ',
        'z-10 px-6 py-4 md:mt-6 md:p-0',
        'border-t border-border shadow-fixed md:border-0 md:shadow-none',
      ]"
    >
      <h3 class="flex w-full items-center justify-between">
        <p class="text-16-m">Total</p>
        {{ useFormattedPrice(totalPrice) }}
      </h3>
      <ActionButton
        type="submit"
        text="Add To Cart"
        theme="primary"
        class="w-full"
      />
    </div>
  </form>
</template>

<script setup>
import { ref, defineProps, computed } from "vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import BaseDatePicker from "@/components/Shared/BaseDatePicker.vue";
import NumCounter from "@/components/Shared/NumCounter.vue";
import { useCartStore } from "@/stores/cart";
import { useFormattedPrice } from "@/composables/useFormattedPrice";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const { addToCart } = useCartStore();

const date = ref("");
const quantity = ref(1);
const showErrorMsg = ref(false);

const totalPrice = computed(() => {
  return props.product.price * quantity.value;
});

const isDateSelected = computed(() => {
  return date.value !== "";
});

function submitForm() {
  if (date.value !== "") {
    addToCart(props.product, date.value, quantity.value);
  } else {
    showErrorMsg.value = true;
  }
}
</script>
