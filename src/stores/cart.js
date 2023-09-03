import { ref, computed, watchEffect } from "vue";
import { defineStore } from "pinia";
import { useModalStore } from "@/stores/modal";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/stores/firebaseConfig";
import { useUserStore } from "@/stores/user";
import { useToastStore } from "@/stores/toast";
import { useCreateBookingNum } from "@/composables/useCreateBookingNum";

export const useCartStore = defineStore("cart", () => {
  const userStore = useUserStore();
  const modalStore = useModalStore();
  const { showToastSuccess } = useToastStore();
  const cartItems = ref(JSON.parse(localStorage.getItem("cart")) || []);
  const validCartItems = ref([]);
  const expiredCartItems = ref([]);
  const selectedCartItems = ref([]);
  const checkoutItems = ref(
    JSON.parse(localStorage.getItem("checkoutItems")) || []
  );
  const today = ref(new Date());
  const cartItemNum = computed(() => validCartItems.value.length);

  const cartTotalPrice = computed(() =>
    selectedCartItems.value
      .map((item) => item.totalPrice)
      .reduce((acc, currentVal) => {
        return acc + currentVal;
      }, 0)
  );
  const checkoutTotalPrice = computed(() =>
    checkoutItems.value
      .map((item) => item.totalPrice)
      .reduce((acc, currentVal) => {
        return acc + currentVal;
      }, 0)
  );

  watchEffect(() => {
    cartItems.value.forEach((item) => {
      item.totalPrice = item.price * item.quantity;
    });

    validCartItems.value = cartItems.value.filter((item) => {
      if (new Date(item.date) > today.value) {
        return item;
      }
    });
    expiredCartItems.value = cartItems.value.filter((item) => {
      if (new Date(item.date) <= today.value) {
        return item;
      }
    });
    localStorage.setItem("cart", JSON.stringify(cartItems.value));
  });

  function addToCart(product, date, quantity) {
    const cartItem = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      date,
      quantity,
    };

    const cartItemIndex = cartItems.value.findIndex((cartItem) => {
      return cartItem.id === product.id && cartItem.date === date;
    });
    if (cartItemIndex === -1) {
      cartItems.value.push(cartItem);
      showToastSuccess("Product successfully added to your cart!");
    } else {
      cartItems.value[cartItemIndex].quantity += quantity;
      showToastSuccess("Shopping cart has been updated!");
    }

    modalStore.closeModal();
  }

  function updateCartItem(item, newDate, newQuantity) {
    const { id, date } = item;

    const currentItemIndex = cartItems.value.findIndex((cartItem) => {
      return cartItem.id === id && cartItem.date === date;
    });

    const existedItemIndex = cartItems.value.findIndex((cartItem) => {
      return cartItem.id === id && cartItem.date === newDate;
    });

    if (newDate === date) {
      cartItems.value[currentItemIndex].quantity = newQuantity;
    } else if (existedItemIndex > 0) {
      cartItems.value[existedItemIndex].quantity += newQuantity;
      cartItems.value.splice(currentItemIndex, 1);
    } else {
      if (date <= new Date()) {
        cartItems.value.splice(currentItemIndex, 1);
        cartItems.value.push(item);
      }
      cartItems.value[currentItemIndex].date = newDate;
      cartItems.value[currentItemIndex].quantity = newQuantity;
    }

    showToastSuccess("Shopping cart has been updated!");

    modalStore.closeModal();
  }

  function removeFromCart(item) {
    const { id, date } = item;
    const cartItemIndex = cartItems.value.findIndex((cartItem) => {
      return cartItem.id === id && cartItem.date === date;
    });
    cartItems.value.splice(cartItemIndex, 1);
  }

  function checkout(data) {
    const orderedItems = JSON.parse(JSON.stringify(data.orderedItems));

    orderedItems.forEach((item) => {
      item.bookingNum = useCreateBookingNum();
    });

    const checkoutData = {
      buyerInfo: data.buyerInfo,
      orderedItems: orderedItems,
      ordered_at: serverTimestamp(),
    };

    addDoc(
      collection(collection(db, "users"), userStore.userInfo.id, "orders"),
      checkoutData
    );

    data.orderedItems.forEach((item) => {
      removeFromCart(item);
    });
  }

  return {
    cartItems,
    validCartItems,
    expiredCartItems,
    selectedCartItems,
    checkoutItems,
    checkoutTotalPrice,
    cartItemNum,
    cartTotalPrice,
    addToCart,
    updateCartItem,
    removeFromCart,
    checkout,
  };
});
