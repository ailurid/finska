<script setup lang="ts">
import { computed, ref, watch } from "vue";

import { PlayerScore } from "../../interfaces";
import { store } from "../../store";
import { playerCurrentTurn } from "../../utils";
import Winner from "./Winner.vue";
import CurrentTurn from "./CurrentTurn.vue";
import Scoreboard from "./Scoreboard/Scoreboard.vue";

const winner = ref<PlayerScore>();

const scores = computed<PlayerScore[]>(() => store.players.map((player, index) => {
  const turn = playerCurrentTurn(index, store);
  return { ...player, playerIndex: index, score: turn.score ?? 0 };
}));

watch(scores, async (list) => {
  const remainingPlayers = list.filter((player) => !player.out);
  if (remainingPlayers.length === 1) {
    winner.value = remainingPlayers[0];
  }
  const winningScore = list.find((player) => player.score === 50);
  if (winningScore) {
    winner.value = winningScore;
  }
})
</script>

<template>
  <Winner v-if="winner" :name="winner.name" />
  <CurrentTurn v-else />
  <Scoreboard />
</template>

<style scoped>

</style>
