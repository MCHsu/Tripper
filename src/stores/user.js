import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { auth, db } from "@/stores/firebaseConfig";
import {
  doc,
  setDoc,
  onSnapshot,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { useToastStore } from "@/stores/toast";
import { onAuthStateChanged } from "firebase/auth";

export const useUserStore = defineStore("user", () => {
  const userInfo = ref(JSON.parse(localStorage.getItem("userInfo")) || {});
  const { showToastSuccess } = useToastStore();
  const orderLists = ref(JSON.parse(localStorage.getItem("orderLists")) || []);

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      getUserInfo(user);
      getOrders();
    }
  });

  function getUserInfo(user) {
    onSnapshot(doc(db, "users", user.uid), (doc) => {
      userInfo.value = doc.data();
      localStorage.setItem("userInfo", JSON.stringify(userInfo.value));
    });
  }

  async function updateUserProfile(data) {
    if (userInfo.value) {
      await setDoc(
        doc(db, "users", userInfo.value.id),
        { ...data, updated_at: serverTimestamp() },
        { merge: true }
      );
      showToastSuccess("Successful Update!");
    }
  }
  function getOrders() {
    const orderListsRef = collection(db, "users", userInfo.value?.id, "orders");

    onSnapshot(orderListsRef, (docSnap) => {
      const newOrderLists = [];
      docSnap.forEach((doc) => {
        doc.data().orderedItems.forEach((item) => {
          const order = {
            buyerInfo: doc.data().buyerInfo,
            ...item,
            ordered_at: doc.data().ordered_at,
          };
          newOrderLists.push(order);
        });
      });
      orderLists.value = newOrderLists;
      localStorage.setItem("orderLists", JSON.stringify(orderLists.value));
    });
  }

  const getUniqueOrder = computed(() => {
    return (bookingNum) => {
      return orderLists.value.find((order) => {
        return order.bookingNum === bookingNum;
      });
    };
  });

  return {
    userInfo,
    orderLists,
    getUniqueOrder,
    getOrders,
    updateUserProfile,
  };
});
