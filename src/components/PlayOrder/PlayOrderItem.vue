<script setup lang="ts">
import { IonItem, IonLabel } from "@ionic/vue";
import { computed } from "vue";

import { store } from "../../store";
import { playerCurrentTurn } from "../../utils";

import CurrentScore from "../CurrentScore.vue";

const props = defineProps<{ playerIndex: number }>();

const turn = computed(() => playerCurrentTurn(props.playerIndex, store));
</script>

<template>
  <ion-item  lines="none">
    <CurrentScore :playerIndex="playerIndex" slot="start" />
    <ion-label>{{ store.players[props.playerIndex].name }}</ion-label>
  </ion-item>
</template>

<style scoped>
ion-item {
  --padding-bottom: 0.25rem;
  --padding-top: 0.25rem;
}
</style>
