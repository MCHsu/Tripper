<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modalStore.modalState?.component"
        class="fixed inset-0 z-[100] flex h-screen w-screen justify-center bg-black/60 md:items-center"
        @click.self="modalStore.closeModal()"
      >
        <div
          :class="[
            'relative flex h-full w-full rounded-3xl bg-white md:shadow-md',
            'mt-16 px-6 md:mt-0 md:h-max md:max-h-[90vh] md:max-w-md md:px-9 md:pb-9 ',
          ]"
        >
          <component
            :is="modalStore.modalState?.component"
            v-bind="modalStore.modalState?.props"
          />

          <button
            aria-label="close"
            class="absolute right-4 top-4 flex h-12 w-12 items-center justify-center bg-white text-font-dark"
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
