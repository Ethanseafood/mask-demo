import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TeamDetailView from "../views/TeamDetailView";
import PlayerStatsView from "../views/PlayerStatsView";
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
    path: "/teamDetail",
    name: "teamDetail",
    component: TeamDetailView,
  },
  {
    path: "/playerStats",
    name: "playerStats",
    component: PlayerStatsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
