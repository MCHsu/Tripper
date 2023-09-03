<template>
    <section
      :class="[
        'container mb-6 mt-6 lg:mb-14 lg:mt-12',
        'lg:grid lg:grid-cols-12 lg:gap-10',
      ]"
    >
      <div class="col-span-3 hidden lg:block">
        <aside
          class="h-max divide-y divide-border rounded-3xl border border-border bg-white"
        >
          <div class="flex flex-col items-center py-8">
            <img
              src="@/assets/Image/user_photo.png"
              class="mb-4 h-20 w-20 rounded-full border object-contain"
              alt="User profile image"
            />
            <p class="px-6">{{ userStore.userInfo.email }}</p>
          </div>
          <div class="flex w-full flex-col py-4">
            <router-link
              to="/profile"
              :class="[
                'relative flex items-center px-6 py-3 hover:bg-slate-50',
                route.name === 'userProfile' && [
                  ' before:absolute before:left-0 before:block before:h-6 before:w-1.5 before:rounded-full before:bg-primary',
                  'font-semibold text-primary',
                ],
              ]"
              ><UserIcon class="mr-2 h-5 w-5 stroke-2" />My Profile</router-link
            >
            <router-link
              to="/order"
              :class="[
                'relative flex items-center px-6 py-3 hover:bg-slate-50',
                route.name === 'userOrder' && [
                  ' before:absolute before:left-0 before:block before:h-6 before:w-1.5 before:rounded-full before:bg-primary',
                  'font-semibold text-primary',
                ],
                ,
              ]"
              ><ShoppingBagIcon class="mr-2 h-5 w-5 stroke-2" />My
              Orders</router-link
            >
          </div>
        </aside>
      </div>

      <div
        class="col-span-9 h-max rounded-3xl border border-border bg-white p-6 lg:p-10"
      >
        <router-view></router-view>
      </div>
    </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";
import { ShoppingBagIcon, UserIcon } from "@heroicons/vue/24/outline";

const userStore = useUserStore();
const route = useRoute();
</script>
