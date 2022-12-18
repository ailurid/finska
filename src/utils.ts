import { Store } from "./store";

export const playerCurrentTurn = (playerIndex: number, store: Store) => {
  const playerTurns = store.turns[playerIndex];
  const turn = playerTurns && playerTurns.length > 0 ? playerTurns[playerTurns.length - 1] : {};
  return turn;
};

export const playerRoundTurn = (playerIndex: number, roundIndex: number, store: Store) => {
  const playerTurns = store.turns[playerIndex];
  const turn = playerTurns && playerTurns.length > roundIndex ? playerTurns[roundIndex] : {};
  return turn;
};
