<template>
  <Transition name="dropdown">
    <div
      class="flex min-w-[240px] flex-col gap-2.5 divide-y divide-border rounded-lg border border-border bg-white pt-6 drop-shadow-md"
    >
      <div class="flex flex-col items-center">
        <img
          src="@/assets/Image/user_photo.png"
          class="mb-4 h-14 w-14 rounded-full border border-border object-contain"
          alt="User profile image"
        />
        <p class="px-6 pb-2">{{ userStore.userInfo.email }}</p>
      </div>
      <div class="flex w-full flex-col pt-2.5">
        <router-link
          to="/profile"
          class="flex items-center py-2.5 px-6 hover:bg-slate-100"
          @click="$emit('closeDropdown', false)"
          ><UserIcon class="mr-2 h-4 w-4 stroke-2" />My Profile</router-link
        >
        <router-link
          to="/order"
          class="flex items-center py-2.5 px-6 hover:bg-slate-100"
          @click="$emit('closeDropdown', false)"
          ><ShoppingBagIcon class="mr-2 h-4 w-4 stroke-2" />My
          Orders</router-link
        >
      </div>

      <div
        class="flex w-full cursor-pointer justify-center hover:bg-slate-100"
        @click="logOutUser()"
      >
        <p class="py-2.5">Log out</p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { defineEmits } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useUserStore } from "@/stores/user";
import { ShoppingBagIcon, UserIcon } from "@heroicons/vue/24/outline";

const userStore = useUserStore();
const { logOutUser } = useAuthStore();
defineEmits(["closeDropdown"]);
</script>

<style scoped>
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
}
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 3s ease;
}
</style>
