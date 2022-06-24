import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("subscribed") as boolean;

  if (to.meta.requiresAuth && !isAuthenticated) {
    return next({
      name: "subscribe",
    });
  } else if (!to.meta.requiresAuth && isAuthenticated) {
    return next({
      name: "event",
    });
  } else {
    return next();
  }
});

export default router;
