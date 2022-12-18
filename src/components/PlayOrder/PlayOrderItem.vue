<script setup lang="ts">
import { IonLabel } from "@ionic/vue";
import { computed } from "vue";

import { store } from "../../store";
import { playerCurrentTurn } from "../../utils";

const props = defineProps<{ playerIndex: number }>();

const turn = computed(() => playerCurrentTurn(props.playerIndex, store));
</script>

<template>
  <ion-label>{{ turn.score ?? 0 }} {{ store.players[props.playerIndex].name }}</ion-label>
</template>

<style scoped>
</style>
