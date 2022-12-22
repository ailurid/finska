<script setup lang="ts">
import { computed } from "vue";

import { PlayerScore } from "../../interfaces";
import { store, maxTurns } from "../../store";

import LeaderboardPlayerRound from "./LeaderboardPlayerRound.vue";

const props = defineProps<{ playerScore: PlayerScore }>();

const out = computed(() => store.players[props.playerScore.playerIndex]?.out);
const rounds = computed(() => [...Array(maxTurns.value).keys()].reverse());

const className = computed(() => (out.value ? "out" : "not-out"));
</script>

<template>
  <tr :class="className">
    <td>{{ playerScore.name }}</td>
    <td class="number emphasis">{{ playerScore.score }}</td>
    <LeaderboardPlayerRound
      class="number"
      v-for="round in rounds"
      :player-index="playerScore.playerIndex"
      :round-index="round"
    />
  </tr>
</template>

<style scoped>
td {
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
}

/* this doesn't quite work
td:nth-child(-n+3) {
  position: sticky;
  left: 0;
}
*/

td:first-of-type {
  border-radius: 10px 0 0 10px;
}

td:last-of-type {
  border-radius: 0 10px 10px 0;
}

.emphasis {
  font-weight: 550;
}

.number {
  text-align: right;
}

.not-out {
  background-color: var(--ion-color-secondary);
  color: var(--ion-color-secondary-contrast);
}

.out {
  background-color: var(--ion-color-light);
  color: var(--ion-color-light-contrast);
}
</style>
