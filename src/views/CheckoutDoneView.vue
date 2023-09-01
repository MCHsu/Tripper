<template>
  <div class="flex h-full flex-col">
    <CartStepBar />
    <section class="container flex flex-grow items-center justify-center">
      <div class="flex flex-col items-center gap-4">
        <img
          src="@/assets/Image/checkout-done.svg"
          alt="checkout-done"
          class="w-60"
        />
        <div class="flex flex-col items-center">
          <h2>Order Complete!</h2>
          <p class="mt-1 text-font-gray-1">Thank you for purchasing.</p>
          <router-link to="/order" class="w-max">
            <ActionButton
              text="View order"
              theme="primary"
              class="mt-6"
            />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import CartStepBar from "@/components/Shared/CartStepBar.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
</script>
