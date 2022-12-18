<script setup lang="ts">
import { computed } from "vue";

import { store } from "../../store";
import { playerRoundTurn } from "../../utils";

const props = defineProps<{ playerIndex: number, roundIndex: number }>();

const out = computed(() => store.players[props.playerIndex]?.out);
const turn = computed(() => playerRoundTurn(props.playerIndex, props.roundIndex, store));
const throwValue = computed(() => {
  if (turn.value.throw !== undefined) return turn.value.throw;
  if (out.value) return "-";
  return "";
});

</script>

<template>
  <!-- TODO: expand to see the score and throw value -->
  <!-- TODO: edit throw value in case of incorrect data entry -->
  <!-- TODO: also need to update any following scores and check if anyone won or went out -->
  <td>{{ throwValue }}</td>
</template>

<style scoped>

</style>
