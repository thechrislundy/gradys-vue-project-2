import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ArrayView from "../views/ArrayView.vue";
import CounterView from "../views/CounterView.vue";
import ImageView from "../views/ImageView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/array",
      name: "array",
      component: ArrayView,
    },
    {
      path: "/counter",
      name: "counter",
      component: CounterView,
    },
    {
      path: "/image",
      name: "image",
      component: ImageView,
    },
  ],
});

export default router;
