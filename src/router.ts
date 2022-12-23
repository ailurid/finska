import { createRouter, createMemoryHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

import Game from "./views/Game.vue";
import Leaderboard from "./views/Leaderboard.vue";
import Score from "./views/Score.vue";
import Setup from "./views/Setup.vue";

import { GameState } from "./enums";
import { store } from "./store";
// import { shouldRedirect, ghPagesUrl } from "./utils";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/setup"
  },
  {
    path: "/setup",
    // beforeEnter(to, from) {
    //   if (shouldRedirect(window.location.href)) {
    //     // TODO: let the user know they've been redirected and why?
    //     window.location.href = ghPagesUrl;
    //   }
    // },
    component: Setup
  },
  {
    path: "/game/",
    component: Game,
    children: [
      {
        path: "",
        redirect: "/game/score"
      },
      {
        path: "score",
        component: Score
      },
      {
        path: "leaderboard",
        component: Leaderboard
      }
    ]
  }
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes
});

router.beforeEach(async (to, from) => {
  if (store.state !== GameState.Active && to.path !== "/setup") {
    return { path: "/setup" };
  }
});
