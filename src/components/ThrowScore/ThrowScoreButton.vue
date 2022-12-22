<script setup lang="ts">
import { IonButton } from "@ionic/vue";

import { TurnState } from "../../enums";
import { Turn } from "../../interfaces";
import { store } from "../../store";

const props = defineProps<{ value: number }>();

const score = () => {
  const playerTurns = store.turns[store.currentTurn.player];
  const currentScore = playerTurns.length > 0 ? playerTurns[playerTurns.length - 1].score ?? 0 : 0;
  const newScore = currentScore + props.value;
  const newScoreAdjusted = newScore > 50 ? 25 : newScore;

  const turn: Turn = {
    throw: props.value,
    score: newScoreAdjusted
  };
  store.turns[store.currentTurn.player].push(turn);

  if (props.value === 0) {
    const lastThreeTurns = playerTurns.slice(-3);
    if (lastThreeTurns.length === 3 && lastThreeTurns.every((t) => t.throw === 0)) {
      store.players[store.currentTurn.player].out = true;
    }
  }

  store.currentTurn.state = TurnState.Result;
};
</script>

<template>
  <ion-button @click="score" size="large">{{ value }}</ion-button>
</template>

<style scoped></style>
