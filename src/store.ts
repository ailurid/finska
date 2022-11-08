import { computed, reactive } from "vue";

import { GameState, TurnState } from "./enums";
import { Player, Turn, CurrentTurn } from "./interfaces";

export interface Store {
  state: GameState;
  players: Player[];
  turns: Turn[][];
  currentTurn: CurrentTurn;
}

export const store: Store = reactive({
  state: GameState.Setup,
  players: [],
  turns: [],
  currentTurn: {
    state: TurnState.Throw,
    player: 0
  }
});

export const allOut = computed(() => store.players.every((p) => p.out));

export const nextPlayer = computed(() => {
  let next = store.currentTurn.player + 1 === store.players.length ? 0 : store.currentTurn.player + 1;

  while (store.players[next].out) {
    if (allOut.value) break;

    if (next + 1 === store.players.length) {
      next = 0;
    } else {
      next += 1;
    }
  }

  return next;
});

export const maxTurns = computed(() => {
  const turns = store.turns.map((t) => t.length);
  return Math.max(...turns);
});

