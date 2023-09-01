<template>
  <div class="relative z-[60] h-8 w-8 lg:h-10 lg:w-10">
    <img
      ref="userImage"
      src="@/assets/Image/user_photo.png"
      alt="User profile image"
      class="cursor-pointer rounded-full border border-border object-contain"
      @click="toggleUserDropdown()"
    />
    <UserDropdown
      v-if="showUserDropdown"
      ref="userDropdown"
      class="absolute right-0 top-12"
      @close-dropdown="showUserDropdown = $event"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import UserDropdown from "@/components/Navigation/UserDropdown.vue";
import { onClickOutside } from "@vueuse/core";

const userDropdown = ref(null);
const userImage = ref(null);
const showUserDropdown = ref(false);

function toggleUserDropdown() {
  showUserDropdown.value = !showUserDropdown.value;
}

onClickOutside(
  userDropdown,
  () => {
    showUserDropdown.value = false;
  },
  { ignore: [userImage] }
);
</script>
