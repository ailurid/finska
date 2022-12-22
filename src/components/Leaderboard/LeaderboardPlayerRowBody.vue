<script setup lang="ts">
import { computed } from "vue";

import { PlayerScore } from "../../interfaces";
import { rounds } from "../../store";

import LeaderboardPlayerRound from "./LeaderboardPlayerRound.vue";

const props = defineProps<{ playerScore: PlayerScore; out: boolean }>();
const className = computed(() => (props.out ? "out" : "not-out"));
</script>

<template>
  <tr>
    <LeaderboardPlayerRound
      :class="className"
      class="number"
      v-for="round in rounds"
      :player-index="playerScore.playerIndex"
      :round-index="round"
    />
    <td :class="className" v-if="rounds.length < 1">&nbsp;</td>
  </tr>
</template>

<style scoped></style>
