import { defineStore } from "pinia";
import { useToast } from "vue-toastification";

export const useToastStore = defineStore("toast", () => {
  const toast = useToast();
  const options = {
    toastClassName: ["custom-success", "custom-layout"],
    bodyClassName: "custom-layout",
    closeButtonClassName: "custom-close-btn",
    progressBarClassName: "custom-progress-bar",
    position: "top-right",
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
  };
  function showToastSuccess(toastMsg) {
    toast.success(toastMsg, options);
  }

  const sheet = new CSSStyleSheet();
  sheet.replaceSync(
    ".Vue-Toastification__toast.custom-layout { padding: 8px 24px; box-shadow: none; border-radius: 16px; font-family: Poppins; }"
  );
  sheet.insertRule(
    ".Vue-Toastification__toast-body.custom-layout { display: flex; align-items: center; font-weight: 500; } "
  );
  sheet.insertRule(
    ".Vue-Toastification__close-button.custom-close-btn { color: #57af34; } "
  );
  sheet.insertRule(
    ".Vue-Toastification__toast--success.custom-success { background-color: #ECF2E1; color: #57af34; border: 1px solid #57af34 } "
  );
  document.adoptedStyleSheets = [sheet];
  return { showToastSuccess };
});
