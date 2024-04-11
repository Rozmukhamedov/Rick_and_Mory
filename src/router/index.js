import { createRouter, createWebHashHistory } from "vue-router";
import Characters from "../pages/Characters.vue";
import Character from "../pages/Character.vue";
import Locations from "../pages/Locations.vue";
import Episodes from "../pages/Episodes.vue";

const routes = [
  {
    path: "/",
    name: "Characters",
    component: Characters,
  },
  {
    path: "/character/:id",
    name: "Character",
    component: Character,
  },
  {
    path: "/locations",
    name: "Locations",
    component: Locations,
  },
  {
    path: "/episodes",
    name: "Episodes",
    component: Episodes,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
