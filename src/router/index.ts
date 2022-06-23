import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = true;

  if (to.name !== "subscribe" && !isAuthenticated) next({ name: "subscribe" });
  else if (to.name === "login" && isAuthenticated) next({ name: "event" });
  else next();
});

export default router;
