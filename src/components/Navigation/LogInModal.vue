<template>
  <form
    id="form"
    novalidate
    class="no-scrollbar mt-6 flex w-full flex-col items-center overflow-y-auto md:mt-9 md:px-3"
    @submit.prevent="submitForm"
  >
    <h1 class="mb-10">Log in Tripper!</h1>
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
        placeholder="Password"
        :err-msgs="v$.password.$errors"
        @blur="v$.password.$touch"
        @focus="v$.password.$dirty = false"
      />
    </div>
    <p v-if="authStore.errMsg" class="text-14-r mt-6 w-full text-error">
      * {{ authStore.errMsg }}
    </p>
    <ActionButton
      class="mt-10 w-full"
      text="Log In"
      theme="primary"
      type="submit"
    />
    <button
      type="button"
      class="text-16-r my-6 text-font-gray-1 hover:underline"
      @click="openSignUpModal"
    >
      Not a member yet? Join Now!
    </button>
  </form>
</template>

<script setup>
import TextInput from "@/components/Shared/TextInput.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import SignUpModal from "@/components/Navigation/SignUpModal.vue";
import { reactive, onUnmounted } from "vue";
import { useModalStore } from "@/stores/modal";
import { useAuthStore } from "@/stores/auth";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

onUnmounted(() => {
  authStore.errMsg = "";
});

const authStore = useAuthStore();
const { openModal } = useModalStore();

const formData = reactive({
  email: "",
  password: "",
});

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6), maxLength: maxLength(12) },
};

const v$ = useVuelidate(rules, formData, { $lazy: true });

async function submitForm() {
  const result = await v$.value.$validate();

  if (result) {
    authStore.logInUser(formData);
  } else {
    console.log("error");
  }
}

function openSignUpModal() {
  openModal({ component: SignUpModal });
}
</script>
