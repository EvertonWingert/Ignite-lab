export const routes = [
  {
    path: "/event",
    name: "event",
    component: () => import("../pages/Event.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/event/lesson/:slug",
    name: "lesson",
    component: () => import("../pages/Event.vue"),
  },
];
