export const routes = [
  {
    path: "/",
    redirect: "subscribe",
  },
  {
    path: "/subscribe",
    name: "subscribe",
    component: () => import("../pages/Subscribe.vue"),
  },
  {
    path: "/event",
    name: "event",
    component: () => import("../pages/Event.vue"),
  },
  {
    path: "/event/lesson/:slug",
    name: "lesson",
    component: () => import("../pages/Event.vue"),
  },
];
