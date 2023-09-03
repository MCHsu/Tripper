import { ref, onBeforeMount } from "vue";
import { defineStore } from "pinia";
import { auth, db } from "@/stores/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "vue-router";
import { useModalStore } from "@/stores/modal";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseErrors = {
  "auth/email-already-in-use": "The email address is already in use",
  "auth/invalid-email": "The email address is invalid",
  "auth/user-not-found": "No user corresponding to this email",
  "auth/user-disabled": "User has been disabled",
  "auth/wrong-password": "The password is invalid",
  "auth/weak-password": "The password is too weak",
};

export const useAuthStore = defineStore("auth", () => {
  const isLoggedIn = ref(false);
  const errMsg = ref("");
  const router = useRouter();
  const modalStore = useModalStore();

  onBeforeMount(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        isLoggedIn.value = true;
      } else {
        isLoggedIn.value = false;
      }
    });
  });

  async function signUpUser(data) {
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await setDoc(doc(db, "users", userData.user.uid), {
        id: userData.user.uid,
        email: userData.user.email,
      });
      modalStore.closeModal();
    } catch (error) {
      errMsg.value = firebaseErrors[error.code];
    }
  }

  async function logInUser(data) {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

      modalStore.closeModal();
      isLoggedIn.value = true;
    } catch (error) {
      errMsg.value = firebaseErrors[error.code];
    }
  }

  async function logOutUser() {
    await signOut(auth);
    localStorage.removeItem("userInfo");
    localStorage.removeItem("orderLists");
    isLoggedIn.value = false;
    router.push("/");
  }

  return {
    isLoggedIn,
    errMsg,
    logInUser,
    logOutUser,
    signUpUser,
  };
});
