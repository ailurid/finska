<script setup lang="ts">
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/vue";
import { computed } from "vue";

import { TurnState } from "../../enums";
import { store, nextPlayer } from "../../store";
import { playerCurrentTurn } from "../../utils";

import CurrentScore from "./CurrentScore.vue";

const currentPlayer = computed(() => store.players[store.currentTurn.player]);

const turn = computed(() => playerCurrentTurn(store.currentTurn.player, store));

const next = () => {
  store.currentTurn = {
    player: nextPlayer.value,
    state: TurnState.Throw
  };
};

</script>

<template>
  <ion-card mode="ios">
    <ion-card-header>
      <ion-card-title v-if="currentPlayer.out">{{ currentPlayer.name }} is out!</ion-card-title>
      <div v-else class="title-container">
        <CurrentScore />
        <ion-card-title>{{ currentPlayer.name }} threw {{ turn.throw }}!</ion-card-title>
      </div>
    </ion-card-header>
    <ion-card-content class="content-container">
      <ion-button @click="next">Next up: {{ store.players[nextPlayer].name }}</ion-button>
    </ion-card-content>
  </ion-card>
</template>

<style scoped>
.title-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.content-container {
  display: flex;
  justify-content: end;
}
</style>
