import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateProductsView from "../views/CreateProductsView.vue";
import TeamDetailView from "../views/TeamDetailView";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/teams",
    name: "teams",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TeamsView.vue"),
  },
  {
    path: "/createProducts",
    name: "createProducts",
    component: CreateProductsView,
  },
  {
    path: "/teamDetail",
    name: "teamDetail",
    component: TeamDetailView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
