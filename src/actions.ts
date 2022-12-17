import { TurnState } from "./enums";
import { store, currentPlayer, nextPlayer } from "./store";

export const forfeit = () => {
  currentPlayer.value.forfeited = true;
  currentPlayer.value.out = true;
  store.currentTurn.state = TurnState.Result;
};

export const next = () => {
  store.currentTurn = {
    player: nextPlayer.value,
    state: TurnState.Throw
  };
};

export const undo = () => {
  store.turns[store.currentTurn.player].pop();
  store.players[store.currentTurn.player].out = false;
  store.currentTurn.state = TurnState.Throw;
};
