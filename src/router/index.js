import { createRouter, createWebHashHistory } from "vue-router";
import { auth, onAuthStateChanged } from "@/stores/firebaseConfig";
import { useModalStore } from "@/stores/modal";
import LogInModal from "@/components/Navigation/LogInModal.vue";

const HomeView = () => import("@/views/HomeView");
const WishlistView = () => import("@/views/WishlistView");
const ProductListView = () => import("@/views/ProductListView");
const ProductView = () =>
  import(/* webpackChunkName: "Products" */ "@/views/ProductView.vue");
const CartView = () => import("@/views/CartView");
const CheckoutView = () => import("@/views/CheckoutView");
const CheckoutDoneView = () => import("@/views/CheckoutDoneView");
const UserView = () =>
  import(/* webpackChunkName: "User" */ "@/views/UserView");
const UserProfileView = () =>
  import(/* webpackChunkName: "User" */ "@/views/UserProfileView");
const UserOrdersView = () =>
  import(/* webpackChunkName: "User" */ "@/views/UserOrdersView");
const UserOrdersDetailView = () =>
  import(/* webpackChunkName: "User" */ "@/views/UserOrdersDetailView");
const NotFoundView = () => import("@/views/NotFoundView");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: WishlistView,
  },
  {
    path: "/product/:id",
    name: "productDetail",
    component: ProductView,
  },
  {
    path: "/productlist",
    name: "productList",
    component: ProductListView,
  },
  {
    path: "/",
    name: "user",
    component: UserView,
    meta: { requiresAuth: true },
    children: [
      {
        path: "profile",
        name: "userProfile",
        component: UserProfileView,
      },
      {
        path: "order",
        name: "userOrder",
        component: UserOrdersView,
      },
    ],
  },
  {
    path: "/order/:id",
    name: "ordersDetail",
    component: UserOrdersDetailView,
    meta: { requiresAuth: true },
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutView,
    meta: { requiresAuth: true },
  },
  {
    path: "/checkout-done",
    name: "checkoutDone",
    component: CheckoutDoneView,
    meta: { requiresAuth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      auth,
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  const isAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (isAuth) {
    if (await getCurrentUser()) {
      next();
    } else {
      const { openModal } = useModalStore();
      openModal({
        component: LogInModal,
      });
      // next("/");
      // next("/");
    }
  } else {
    next();
  }
});

export default router;
