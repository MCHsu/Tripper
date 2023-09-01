import { ref, markRaw } from "vue";
import { defineStore } from "pinia";

const basicState = { component: null, props: {} };

export const useModalStore = defineStore("modal", () => {
  const modalState = ref(basicState);

  function openModal(payload) {
    const { props, component } = payload;

    modalState.value = markRaw({ component, props: props || {} });
    document.body.classList.add("overflow-y-hidden");
  }

  function closeModal() {
    modalState.value = basicState;
    document.body.classList.remove("overflow-y-hidden");
  }

  return { modalState, openModal, closeModal };
});
