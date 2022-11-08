<script setup lang="ts">
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel } from "@ionic/vue";
import { computed } from "vue";

import { TurnState } from "../../enums";
import { store, nextPlayer } from "../../store";
import CurrentScore from "./CurrentScore.vue";
import ThrowScore from "./ThrowScore/ThrowScore.vue";

const currentPlayer = computed(() => store.players[store.currentTurn.player]);

const forfeit = () => {
  // TODO: confirm modal
  currentPlayer.value.out = true;
  store.currentTurn.state = TurnState.Result;
};
</script>

<template>
  <ion-card mode="ios">
    <ion-card-header>
      <div class="subtitle-container">
        <ion-card-subtitle>Next up: {{ store.players[nextPlayer].name }}</ion-card-subtitle>
        <ion-button size="small" color="danger" @click="forfeit">Forfeit game</ion-button>
      </div>
      <div class="title-container">
        <CurrentScore />
        <ion-card-title>{{ currentPlayer.name }}</ion-card-title>
      </div>
    </ion-card-header>
    <ion-card-content>
      <ThrowScore />
    </ion-card-content>
  </ion-card>
</template>

<style scoped>
.subtitle-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
