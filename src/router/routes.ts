export const routes = [
  {
    path: "/",
    redirect: {
      name: "event",
    },
  },
  {
    path: "/subscribe",
    name: "subscribe",
    component: () => import("../pages/Subscribe.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/event",
    name: "event",
    component: () => import("../pages/Event.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/event/lesson/:slug",
        name: "lesson",
        component: () => import("../pages/Event.vue"),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
];
