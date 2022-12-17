import { TurnState } from "./enums";

export interface Player {
  name: string;
  out?: boolean;
  forfeited?: boolean;
}

export interface Turn {
  throw?: number;
  score?: number;
}

export interface PlayerScore extends Player {
  playerIndex: number;
  score: number;
}

export interface CurrentTurn {
  state: TurnState;
  player: number;
}
