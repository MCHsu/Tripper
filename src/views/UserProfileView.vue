<template>
  <section>
    <!-- content -->
    <div>
      <h2 class="mb-6">My Profile</h2>
      <form novalidate @submit.prevent="submitForm">
        <div class="grid grid-cols-2 gap-x-2 gap-y-4 sm:gap-4 lg:gap-6">
          <TextInput
            v-model="formData.firstName"
            label="First name"
            placeholder="First name"
            :err-msgs="v$.firstName.$errors"
            @blur="v$.firstName.$touch"
            @focus="v$.firstName.$dirty = false"
          />
          <TextInput
            v-model="formData.lastName"
            label="Last name"
            placeholder="Last name"
            :err-msgs="v$.lastName.$errors"
            @blur="v$.lastName.$touch"
            @focus="v$.lastName.$dirty = false"
          />
          <TextInput
            v-model="formData.phone"
            label="Phone number"
            type="phone"
            placeholder="Phone number"
            max-length="10"
            :err-msgs="v$.phone.$errors"
            class="col-span-2 sm:col-span-1"
            @blur="v$.phone.$touch"
            @focus="v$.phone.$dirty = false"
          />
          <TextInput
            v-model="userInfo.email"
            label="Email"
            type="email"
            placeholder="Email"
            disabled
            class="col-span-2 sm:col-span-1"
          />
        </div>
        <div class="mt-6 flex w-full justify-end">
          <ActionButton
            type="submit"
            text="Update"
            theme="primary"
            class="w-full lg:w-max"
          />
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import TextInput from "@/components/Shared/TextInput.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import { reactive, computed } from "vue";
import { storeToRefs } from "pinia";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  alpha,
  numeric,
  minLength,
  maxLength,
} from "@vuelidate/validators";
import { useUserStore } from "@/stores/user";

const { updateUserProfile } = useUserStore();
const { userInfo } = storeToRefs(useUserStore());

const formData = reactive({
  firstName: userInfo.value.firstName,
  lastName: userInfo.value.lastName,
  phone: userInfo.value.phone,
});
// console.log(userInfo.value.phone);
// console.log(formData.phone);
const isModified = computed(() => {
  return (
    formData.firstName !== userInfo.value.firstName ||
    formData.lastName !== userInfo.value.lastName ||
    formData.phone !== userInfo.value.phone
  );
});

const rules = {
  firstName: { required, alpha },
  lastName: { required, alpha },
  phone: {
    required,
    numeric,
    minLength: minLength(8),
    maxLength: maxLength(10),
  },
};

const v$ = useVuelidate(rules, formData, { $lazy: true });

async function submitForm() {
  const result = await v$.value.$validate();
  // const anyDirty = v$.value.$anyDirty;
  console.log("anyDirty", isModified.value);
  if (result && isModified.value) {
    updateUserProfile(formData);
  } else {
    console.log("error");
  }
}
</script>
