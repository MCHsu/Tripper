<template>
  <div
    v-if="isLoading"
    class="container flex h-full items-center justify-center"
  >
    <h2>Loading...</h2>
  </div>
  <div v-else-if="product !== null" id="product" class="flex flex-col">
    <section class="lg:container lg:mt-12">
      <div
        class="flex aspect-video w-full items-center overflow-hidden md:h-[400px] lg:rounded-3xl"
      >
        <img
          class="w-full object-cover object-center"
          :src="product.image"
          alt="product-image"
        />
      </div>
    </section>
    <section
      :class="[
        'container mb-10 mt-6 sm:mb-12 sm:mt-8 lg:mb-16 lg:mt-10',
        'lg:grid lg:grid-cols-[5fr_2fr] lg:gap-12',
      ]"
    >
      <div class="flex flex-col lg:gap-10">
        <div class="flex flex-col gap-6">
          <div class="flex items-center justify-between">
            <p class="w-max rounded-lg bg-[#F6F8F0] px-2.5 py-2 text-[#57af34]">
              {{ product.category }}
            </p>
            <WishListButton
              class="h-7 w-7 sm:h-8 sm:w-8"
              theme="outline"
              :product="product"
            />
          </div>

          <h1>
            {{ product.name }}
          </h1>
          <div class="flex">
            <MapPinIcon class="mr-1 mt-px h-5 w-5" />
            {{ product.address }}
          </div>
        </div>
        <!-- Description -->
        <div class="mt-6 flex flex-col">
          <div class="flex items-center">
            <span class="mr-2 h-6 w-2 rounded bg-primary"></span>
            <h2>Description</h2>
          </div>
          <div class="mt-6 rounded-3xl bg-slate-50 p-8">
            <p class="whitespace-pre-line">
              {{
                product.description
                  .replaceAll("\\n", "\n")
                  .replaceAll("\\n\\u2022", "\n\u2022")
                  .replaceAll("\\xa0", "\xa0")
              }}
            </p>
          </div>
        </div>
      </div>

      <div
        :class="[
          'fixed bottom-0 left-0 w-full px-6 py-4 lg:sticky lg:top-20 lg:h-max lg:py-6 ',
          'border-t border-border bg-white lg:rounded-2xl lg:border ',
          'shadow-fixed lg:shadow-none',
        ]"
      >
        <div class="flex flex-col items-start gap-4">
          <h3><span class="text-16-r">from</span> TWD {{ formattedPrice }}</h3>

          <ActionButton
            text="Choose plan"
            theme="primary"
            class="w-full"
            @click="openAddToCartModal()"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ActionButton from "@/components/Shared/ActionButton.vue";
import WishListButton from "@/components/Shared/WishListButton.vue";
import AddToCartModal from "@/components/Product/AddToCartModal.vue";
import { ref, onMounted, computed, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/product";
import { useModalStore } from "@/stores/modal";
import { useFormattedPrice } from "@/composables/useFormattedPrice";
import { MapPinIcon } from "@heroicons/vue/24/solid";

const route = useRoute();
const product = ref(null);

const { getUniqueProduct, isLoading } = storeToRefs(useProductStore());
const { openModal } = useModalStore();

const currentProductID = computed(() => route.params.id);
const formattedPrice = computed(() => useFormattedPrice(product.value.price));

onMounted(() => {
  watchEffect(() => {
    product.value = getUniqueProduct.value(currentProductID.value);
  });
});

function openAddToCartModal() {
  openModal({
    component: AddToCartModal,
    props: { product: product.value },
  });
}
</script>
