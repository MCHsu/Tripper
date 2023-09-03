<template>
  <div id="checkout">
    <CartStepBar />
    <form
      id="form"
      novalidate
      class="container mb-6 lg:mb-14 lg:mt-12 lg:grid lg:grid-cols-[4fr_2fr] lg:gap-8 xl:gap-12"
      @submit.prevent="submitForm"
    >
      <section class="flex flex-col gap-5">
        <BaseAccordion title="Buyer Info">
          <div class="grid grid-cols-2 gap-x-2 gap-y-4 sm:gap-4 lg:gap-6">
            <TextInput
              v-model="formData.buyerInfo.firstName"
              label="First name"
              placeholder="First name"
              :err-msgs="v$.buyerInfo.firstName.$errors"
              @blur="v$.buyerInfo.firstName.$touch"
              @focus="v$.buyerInfo.firstName.$dirty = false"
            />
            <TextInput
              v-model="formData.buyerInfo.lastName"
              label="Last name"
              placeholder="Last name"
              :err-msgs="v$.buyerInfo.lastName.$errors"
              @blur="v$.buyerInfo.lastName.$touch"
              @focus="v$.buyerInfo.lastName.$dirty = false"
            />
            <TextInput
              v-model="formData.buyerInfo.phone"
              label="Phone number"
              type="phone"
              placeholder="Phone number"
              max-length="10"
              :err-msgs="v$.buyerInfo.phone.$errors"
              class="col-span-2 sm:col-span-1"
              @blur="v$.buyerInfo.phone.$touch"
              @focus="v$.buyerInfo.phone.$dirty = false"
            />
            <TextInput
              v-model="formData.buyerInfo.email"
              label="Email"
              type="email"
              placeholder="Email"
              :err-msgs="v$.buyerInfo.email.$errors"
              class="col-span-2 sm:col-span-1"
              @blur="v$.buyerInfo.email.$touch"
              @focus="v$.buyerInfo.email.$dirty = false"
            />
          </div>
        </BaseAccordion>

        <BaseAccordion title="Payment">
          <div class="grid grid-cols-2 gap-x-2 gap-y-4 sm:gap-4 lg:gap-6">
            <TextInput
              v-model="formData.cardInfo.cardNumber"
              label="Credit Card Number"
              type="email"
              placeholder="0000 0000 0000 0000"
              max-length="16"
              :err-msgs="v$.cardInfo.cardNumber.$errors"
              class="col-span-2 sm:col-span-1"
              @blur="v$.cardInfo.cardNumber.$touch"
              @focus="v$.cardInfo.cardNumber.$dirty = false"
            />
            <TextInput
              v-model="formData.cardInfo.cardExpire"
              label="Expiration date"
              type="email"
              placeholder="MM/YY"
              max-length="4"
              :err-msgs="v$.cardInfo.cardExpire.$errors"
              class="col-span-2 sm:col-span-1"
              @blur="v$.cardInfo.cardExpire.$touch"
              @focus="v$.cardInfo.cardExpire.$dirty = false"
            />
            <TextInput
              v-model="formData.cardInfo.cvc"
              label="CVC"
              type="email"
              placeholder="CVC"
              max-length="3"
              :err-msgs="v$.cardInfo.cvc.$errors"
              class="col-span-2 sm:col-span-1"
              @blur="v$.cardInfo.cvc.$touch"
              @focus="v$.cardInfo.cvc.$dirty = false"
            />
            <div class="col-span-2 flex items-center gap-2">
              <p class="text-14-r">Accepted</p>
              <img src="@/assets/Icon/visa.png" alt="visa logo" class="h-8" />
              <img
                src="@/assets/Icon/mastercard.png"
                alt="mastercard logo"
                class="h-8"
              />
              <img src="@/assets/Icon/jcb.png" alt="jcb logo" class="h-5" />
            </div>
          </div>
        </BaseAccordion>

        <BaseAccordion title="Payment Review">
          <CheckoutItemCard
            v-for="item in checkoutItems"
            :key="item.id"
            :product="item"
            class="last:border-0"
          />
        </BaseAccordion>
      </section>

      <section>
        <div
          :class="[
            'fixed bottom-0 left-0 w-full px-6 py-4 lg:sticky lg:top-20 lg:h-max lg:py-6 ',
            'border-t border-border bg-white lg:rounded-2xl lg:border ',
            'shadow-fixed lg:shadow-none',
          ]"
        >
          <div class="flex flex-col items-start gap-3 lg:gap-4">
            <p
              class="text-14-sb flex w-full items-center justify-between text-font-gray-1"
            >
              <span class="text-14-r"
                >Subtotal ({{ checkoutItems.length }} items)</span
              >
              TWD
              {{ useFormattedPrice(cartStore.checkoutTotalPrice) }}
            </p>
            <div class="w-full border-b border-dashed border-border"></div>
            <h3 class="flex w-full items-center justify-between">
              <span class="text-16-r">Total</span> TWD
              {{ useFormattedPrice(cartStore.checkoutTotalPrice) }}
            </h3>
            <ActionButton
              type="submit"
              text="Buy Now"
              theme="primary"
              class="w-full"
            />
          </div>
        </div>
      </section>
    </form>
  </div>
</template>

<script setup>
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";
import BaseAccordion from "@/components/Shared/BaseAccordion.vue";
import CartStepBar from "@/components/Shared/CartStepBar.vue";
import CheckoutItemCard from "@/components/Card/CheckoutItemCard.vue";
import { ref, onMounted, reactive, onBeforeUnmount } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  alpha,
  numeric,
  minLength,
  maxLength,
  email,
} from "@vuelidate/validators";
import { useFormattedPrice } from "@/composables/useFormattedPrice";
import { useCartStore } from "@/stores/cart";

const router = useRouter();
const cartStore = useCartStore();
const { checkoutItems } = storeToRefs(cartStore);
const checkoutBar = ref(null);

onMounted(() => {
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

onBeforeUnmount(() => {
  localStorage.removeItem("checkoutItems");
});

const formData = reactive({
  buyerInfo: {
    firstName: "",
    lastName: "",
    phone: null,
    email: "",
  },
  cardInfo: {
    cardNumber: null,
    cardExpire: null,
    cvc: null,
  },
  orderedItems: checkoutItems.value,
});

const rules = {
  buyerInfo: {
    firstName: { required, alpha },
    lastName: { required, alpha },
    phone: {
      required,
      numeric,
      minLength: minLength(8),
      maxLength: maxLength(10),
    },
    email: { required, email },
  },
  cardInfo: {
    cardNumber: {
      required,
      numeric,
      minLength: minLength(16),
    },
    cardExpire: { required, numeric },
    cvc: { required, numeric, minLength: minLength(3) },
  },
};

const v$ = useVuelidate(rules, formData, { $lazy: true });

async function submitForm() {
  const result = await v$.value.$validate();
  if (result) {
    cartStore.checkout(formData);
    router.push({ path: "/checkout-done" });
  } else {
    console.log("error");
  }
}
</script>
