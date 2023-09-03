import { ref, computed, watch } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { useProductStore } from "@/stores/product";

export const useWishListStore = defineStore("wishList", () => {
  const wishLists = ref(JSON.parse(localStorage.getItem("wishList")) || []);
  const wishListItemNum = computed(() => wishLists.value.length);
  const { products } = storeToRefs(useProductStore());

  watch(wishLists.value, () => {
    localStorage.setItem("wishList", JSON.stringify(wishLists.value));
  });

  function toggleWishList(product) {
    const wishListItemIndex = wishLists.value.findIndex(
      (id) => id === product.id
    );

    if (wishListItemIndex === -1) {
      wishLists.value.push(product.id);
    } else {
      wishLists.value.splice(wishListItemIndex, 1);
    }
  }

  function getWishListItems() {
    const resultItems = [];
    for (const id of wishLists.value) {
      const matchedProduct = products.value.find(
        (product) => product.id === id
      );
      if (matchedProduct) {
        resultItems.push(matchedProduct);
      }
    }
    return resultItems;
  }

  return {
    wishLists,
    wishListItemNum,
    toggleWishList,
    getWishListItems,
  };
});
