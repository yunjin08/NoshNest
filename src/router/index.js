import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByIngredients from "../views/MealsByIngredients.vue";
import GuestLayout from "../components/GuestLayout.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import MealDetails from "../views/MealDetails.vue";
import Ingredients from "../views/Ingredients.vue";
import AddRecipe from "../views/AddRecipe.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
        meta: {
          linkExactActiveClass: "custom-exact-active-class",
        },
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
        meta: {
          linkExactActiveClass: "custom-exact-active-class",
        },
      },
      {
        path: "/by-ingredients/:ingredients?",
        name: "byIngredients",
        component: MealsByIngredients,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
        meta: {
          linkExactActiveClass: "custom-exact-active-class",
        },
      },
      {
        path: "/addrecipe",
        name: "addRecipe",
        component: AddRecipe,
      },
    ],
  },
  {
    path: "/auth",
    component: GuestLayout,
  },
  {
    path: "/meal:id",
    name: "mealDetails",
    component: MealDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
