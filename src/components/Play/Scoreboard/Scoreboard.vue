<script setup lang="ts">
import { IonCard, IonCardContent } from "@ionic/vue";
import { computed } from "vue";

import { PlayerScore } from "../../../interfaces";
import { store } from "../../../store";
import { playerCurrentTurn } from "../../../utils";

import ScoreboardPlayer from "./ScoreboardPlayer.vue";

// TODO: assigning player.out in this way means the value is outdated
const scores = computed<PlayerScore[]>(() => store.players.map((player, index) => {
  const turn = playerCurrentTurn(index, store);
  return { ...player, playerIndex: index, score: turn.score ?? 0 };
}).sort((a, b) => b.score - a.score));

const notOut = computed(() => scores.value.filter((s) => !store.players[s.playerIndex]?.out));
const out = computed(() => scores.value.filter((s) => store.players[s.playerIndex]?.out));
</script>

<template>
  <ion-card mode="ios">
    <ion-card-content>
      <div>
        <table>
          <tbody>
            <ScoreboardPlayer v-for="score, index in notOut" :player-score="score" />
            <ScoreboardPlayer v-for="score, index in out" :player-score="score" />
          </tbody>
        </table>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<style scoped>
div {
  width: 100%;
  overflow-x: auto;
}

table {
  border-collapse: separate;
  border-spacing: 0 0.25rem;
}
</style>
