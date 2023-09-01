<template>
  <div id="cart">
    <CartStepBar />
    <section class="container mb-6 lg:mb-14 lg:mt-12">
      <div
        class="rounded-3xl border border-border bg-white p-6 sm:px-8 sm:py-10"
      >
        <h2 class="mb-6">Shopping Cart</h2>
        <div v-if="validCartItems.length != 0">
          <div class="flex flex-col content-start">
            <CartItemCard
              v-for="cartItem in validCartItems"
              :key="cartItem.id"
              :product="cartItem"
              class="last:border-0 lg:last:border-b"
              @count-num="cartItem.quantity = $event"
              @remove="cartStore.removeFromCart(cartItem)"
            />
          </div>
          <!-- 前往結帳條 -->
          <div
            ref="checkoutBar"
            class="fixed -bottom-[1px] left-0 flex h-min w-full items-center bg-white shadow-none md:h-20 lg:sticky lg:mt-4"
          >
            <div
              class="flex w-full flex-col items-center gap-6 px-6 py-4 md:flex-row md:py-0"
            >
              <div class="mr-auto flex w-full items-center justify-between">
                <div class="flex gap-1">
                  <BaseCheckbox
                    v-model="allSelected"
                    label="Select all"
                    @change="selectAll()"
                  >
                    <span> ({{ cartItemNum }})</span>
                  </BaseCheckbox>
                </div>

                <div class="flex items-center gap-2 sm:gap-3">
                  <div
                    class="flex flex-col items-end text-font-gray-1 sm:flex-row"
                  >
                    <p class="text-14-r text-end">Subtotal</p>
                    <p class="text-14-r text-end sm:ml-1">
                      ({{ selectedCartItems.length }} items)
                    </p>
                  </div>
                  <h3>
                    {{ useFormattedPrice(cartTotalPrice) }}
                  </h3>
                </div>
              </div>

              <ActionButton
                text="Check out"
                theme="primary"
                class="w-full md:w-max"
                @click="handleCheckout"
              />
            </div>
          </div>
        </div>

        <div v-else class="flex flex-grow items-center justify-center">
          <ResultNotFound text="Your cart is empty!" />
        </div>
      </div>
    </section>

    <section
      v-if="expiredCartItems.length != 0"
      class="container mb-6 lg:mb-14 lg:mt-12"
    >
      <div
        class="rounded-3xl border border-border bg-white p-6 sm:px-8 sm:py-10"
      >
        <h2 class="mb-6">Items require reconfirmation</h2>
        <div class="flex flex-col content-start">
          <expiredCartItemCard
            v-for="cartItem in expiredCartItems"
            :key="cartItem.id"
            :product="cartItem"
            class="last:border-0"
            @count-num="cartItem.quantity = $event"
            @remove="cartStore.removeFromCart(cartItem)"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import CartItemCard from "@/components/Card/CartItemCard.vue";
import expiredCartItemCard from "@/components/Card/expiredCartItemCard.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import ResultNotFound from "@/components/Shared/ResultNotFound.vue";
import BaseCheckbox from "@/components/Shared/BaseCheckbox.vue";
import CartStepBar from "@/components/Shared/CartStepBar.vue";
import { useRouter } from "vue-router";
import { useFormattedPrice } from "@/composables/useFormattedPrice";
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
const cartStore = useCartStore();
const {
  validCartItems,
  expiredCartItems,
  selectedCartItems,
  checkoutItems,
  cartItemNum,
  cartTotalPrice,
} = storeToRefs(cartStore);
const router = useRouter();
// const { openModal } = useModalStore();
const checkoutBar = ref(null);
const allSelected = ref(true);

watchEffect(() => {
  if (selectedCartItems.value.length === validCartItems.value.length) {
    allSelected.value = true;
  } else {
    allSelected.value = false;
  }
});

function selectAll() {
  if (allSelected.value) {
    selectedCartItems.value = validCartItems.value;
  } else {
    selectedCartItems.value = [];
  }
}

function handleCheckout() {
  if (selectedCartItems.value.length !== 0) {
    checkoutItems.value = [...selectedCartItems.value];

    localStorage.setItem("checkoutItems", JSON.stringify(checkoutItems.value));
    router.push({ path: "/checkout" });
  }
}

onMounted(() => {
  // cartStore.selectedCartItems = cartStore.validCartItems;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (checkoutBar.value) {
        checkoutBar.value.classList.toggle(
          "is-pinned",
          entry.intersectionRatio < 1
        );
      }
    },
    { threshold: [1] }
  );

  if (checkoutBar.value) {
    observer.observe(checkoutBar.value);
  }
});
</script>

<style scoped>
.is-pinned {
  @apply border-t bg-white shadow-fixed;
}
</style>
