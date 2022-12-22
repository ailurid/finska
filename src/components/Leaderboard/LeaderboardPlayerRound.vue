<script setup lang="ts">
import { computed } from "vue";

import { store } from "../../store";
import { playerRoundTurn } from "../../utils";

const props = defineProps<{ playerIndex: number; roundIndex: number }>();

const out = computed(() => store.players[props.playerIndex]?.out);
const turn = computed(() => playerRoundTurn(props.playerIndex, props.roundIndex, store));
const throwValue = computed(() => {
  if (turn.value.throw !== undefined) return turn.value.throw;
  if (out.value) return "-";
  return String.fromCharCode(160);
});
</script>

<template>
  <td>{{ throwValue }}</td>
</template>

<style scoped></style>
