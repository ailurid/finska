import { Store } from "./store";

export const ghPagesUrl = "https://ailurid.github.io/finska";

export const shouldRedirect = (url: string): boolean => {
  const redirectIncludes: string[] = ["codesandbox.io", "csb.app"];
  const lower = url.toLowerCase();
  return redirectIncludes.some((str) => lower.includes(str));
};

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
