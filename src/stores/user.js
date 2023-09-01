import { ref, computed,  } from "vue";
import { defineStore } from "pinia";
import { auth, db } from "@/stores/firebaseConfig";
import {
  doc,
  setDoc,
  onSnapshot,
  collection,
  // getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { useToastStore } from "@/stores/toast";
import { onAuthStateChanged } from "firebase/auth";

export const useUserStore = defineStore("user", () => {
  const userInfo = ref(JSON.parse(localStorage.getItem("userInfo")) || {});
  // const orderListsRef = collection(db, "users", userInfo.value?.id, "orders");
  const { showToastSuccess } = useToastStore();
  const orderLists = ref(
    JSON.parse(localStorage.getItem("orderLists")) || []
  );

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      getUserInfo(user);
      getOrders();

      // console.log("orderLists.value 111", orderLists.value);

      // const userInfoData = {
      //   userInfo: JSON.parse(localStorage.getItem("userInfo")),
      //   orderLists: [...orderLists.value],
      // };

      // console.log("orderLists.value 666", orderLists.value);
      // console.log("userInfoData 777", userInfoData);

      // localStorage.setItem("userInfo", JSON.stringify(userInfoData));

      // console.log("orderLists.value", orderLists.value);
    }
  });

  function getUserInfo(user) {
    onSnapshot(doc(db, "users", user.uid), (doc) => {
      userInfo.value = doc.data();
      localStorage.setItem("userInfo", JSON.stringify(userInfo.value));
    });
  }

  async function updateUserProfile(data) {
    console.log("userInfo.value.length", userInfo.value.id);
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
    // const orderListsData = await getDocs(orderListsRef);

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

    
    // return newOrderLists;
    // orderLists.value = newOrderLists;

    // orderLists.value.sort((a, b) => {
    //   if (a.date !== b.date) {
    //     return b.date - a.date;
    //   } else {
    //     return b.ordered_at - a.ordered_at;
    //   }
    // });
    // console.log("orderLists.value2", orderLists.value);
  }

  const getUniqueOrder = computed(() => {
    return (bookingNum) => {
      console.log("orderLists.value3", orderLists.value);
      return orderLists.value.find((order) => {
        return order.bookingNum === bookingNum;
      });
    };
  });

  return {
    userInfo,
    orderLists,
    getOrders,
    getUniqueOrder,
    // orders,
    updateUserProfile,
  };
});
