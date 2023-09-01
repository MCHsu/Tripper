<template>
  <Teleport to="body">
    <Transition name="modal">
      <!-- modal-backdrop -->
      <div
        v-if="modalStore.modalState?.component"
        class="fixed inset-0 z-[100] flex h-screen w-screen justify-center bg-black/60 md:items-center"
        @click.self="modalStore.closeModal()"
      >
        <!-- modal-container -->
        <div
          :class="[
            'relative flex h-full w-full rounded-3xl bg-white md:shadow-md',
            'mt-16 px-6 md:mt-0 md:h-max md:max-h-[90vh] md:max-w-md md:px-9 md:pb-9 ',
          ]"
        >
          <!-- <div class="md:max-h-full w-full pb-6  sm:px-9 sm:pb-9 flex flex-col"> -->
          <component
            :is="modalStore.modalState?.component"
            v-bind="modalStore.modalState?.props"
          />
          <!-- </div> -->
          <!-- modal-button -->

          <button
            aria-label="close"
            class="absolute top-4 right-4 flex h-12 w-12 items-center justify-center text-font-dark bg-white"
            @click.prevent="modalStore.closeModal()"
          >
            <XMarkIcon class="h-7 w-7 stroke-2" />
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useModalStore } from "@/stores/modal";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const modalStore = useModalStore();
</script>

<style scoped>
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s ease;
}
</style>
