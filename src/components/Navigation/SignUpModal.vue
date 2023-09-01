<template>
  <form
    novalidate
    class="no-scrollbar mt-6 flex w-full flex-col items-center overflow-y-auto md:mt-9 md:px-3"
    @submit.prevent="submitForm"
  >
    <h1 class="mb-10">Sign up!</h1>
    <div class="flex w-full flex-col items-end gap-4">
      <TextInput
        v-model="formData.email"
        type="email"
        placeholder="Email"
        :err-msgs="v$.email.$errors"
        @blur="v$.email.$touch"
        @focus="v$.email.$dirty = false"
      />
      <TextInput
        v-model="formData.password"
        type="password"
        placeholder="Password(6-12 characters)"
        :err-msgs="v$.password.$errors"
        @blur="v$.password.$touch"
        @focus="v$.password.$dirty = false"
      />
      <TextInput
        v-model="formData.confirmPassword"
        type="password"
        placeholder="Confirm Password"
        :err-msgs="v$.confirmPassword.$errors"
        @blur="v$.confirmPassword.$touch"
        @focus="v$.confirmPassword.$dirty = false"
      />
      <BaseCheckbox
        v-model="formData.checked"
        label="I have read and agree to"
        :err-msgs="v$.checked.$errors"
        class="text-14-r mt-4"
      >
        <span class="text-14-r w-full text-blue-500">Terms & Conditions</span> &
        <span class="text-blue-500">Privacy Policy</span>
      </BaseCheckbox>
    </div>
    <p v-if="authStore.errMsg" class="text-14-r mt-6 w-full text-error">
      * {{ authStore.errMsg }}
    </p>

    <ActionButton
      class="mt-10 w-full"
      text="Sign up"
      theme="primary"
      type="submit"
    />

    <button
      type="button"
      class="text-16-r my-6 text-font-gray-1 hover:underline"
      @click="openLogInModal"
    >
      Log in here
    </button>
  </form>
</template>

<script setup>
import TextInput from "@/components/Shared/TextInput.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import LogInModal from "@/components/Navigation/LogInModal.vue";
import BaseCheckbox from "@/components/Shared/BaseCheckbox.vue";
import { reactive, onUnmounted, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import { useModalStore } from "@/stores/modal";
import { useAuthStore } from "@/stores/auth";

onUnmounted(() => {
  authStore.errMsg = "";
});
const { openModal } = useModalStore();
const authStore = useAuthStore();

const formData = reactive({
  email: "",
  password: "",
  confirmPassword: "",
  checked: false,
});

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6), maxLength: maxLength(12) },
  confirmPassword: {
    required,
    sameAs: sameAs(computed(() => formData.password)),
  },
  checked: {
    sameAs: helpers.withMessage("This field cannot be empty", sameAs(true)),
  },
};

const v$ = useVuelidate(rules, formData, { $lazy: true });

async function submitForm() {
  const result = await v$.value.$validate();
  console.log("result", result);
  if (result) {
    authStore.signUpUser(formData);
  } else {
    console.log("error");
  }
}

function openLogInModal() {
  openModal({
    component: LogInModal,
  });
}
</script>
