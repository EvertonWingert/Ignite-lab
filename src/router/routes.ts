export const routes = [
  {
    path: "/",
    name: "event",
    component: () => import("../pages/Event.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Login.vue"),
  },
];
