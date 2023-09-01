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
  GoogleAuthProvider,
  signInWithPopup,
  // serverTimestamp,
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
  // const usersRef = collection(db, "users");
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
      console.log("Successfully registered");

      await setDoc(doc(db, "users", userData.user.uid), {
        id: userData.user.uid,
        email: userData.user.email,
      });
      modalStore.closeModal();
    } catch (error) {
      errMsg.value = firebaseErrors[error.code];
      console.log(error.code);
      console.log("failed");
    }
  }

  async function logInUser(data) {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log("login success");
      modalStore.closeModal();
      isLoggedIn.value = true;
    } catch (error) {
      console.log("login failed");
      errMsg.value = firebaseErrors[error.code];
    }
  }

  async function logInWithGoogle() {
    const provider = new GoogleAuthProvider();
    let result = await signInWithPopup(auth, provider);
    console.log(result.user);
  }

  async function logOutUser() {
    await signOut(auth);
    localStorage.removeItem("userInfo");
    localStorage.removeItem("orderLists");
    isLoggedIn.value = false;
    console.log("logout");
    router.push("/");
  }

  return {
    isLoggedIn,
    errMsg,
    logInUser,
    logOutUser,
    signUpUser,
    logInWithGoogle,
  };
});
