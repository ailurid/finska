<script setup lang="ts">
import { IonButton, IonContent, IonItem, IonLabel, IonPage, IonTitle } from "@ionic/vue";
import { computed } from "vue";

import { forfeit, next, undo } from "../actions";
import { TurnState } from "../enums";
import { store, allOut, currentPlayer, nextPlayer, winner } from "../store";
import { playerCurrentTurn } from "../utils";

import ThrowScore from "../components/ThrowScore/ThrowScore.vue";
import CurrentScore from "../components/CurrentScore.vue";
import PlayOrder from "../components/PlayOrder/PlayOrder.vue";

const throwState = computed(() => store.currentTurn.state === TurnState.Throw);
const resultState = computed(() => store.currentTurn.state === TurnState.Result || allOut.value);

const turn = computed(() => playerCurrentTurn(store.currentTurn.player, store));

const nextUp = computed(() => `Next up: ${store.players[nextPlayer.value].name}`);

const title = computed(() => {
  if (!currentPlayer.value) return "";
  const name = currentPlayer.value.name;
  if (winner.value !== null) return `${name} is the winner! 🎉`;
  if (currentPlayer.value.out) return `${name} is out!`;
  if (resultState.value) return `${name} threw ${turn.value.throw}!`;
  return `${name}'s turn`;
});
</script>

<!--
  TODO:
    prefer spa / address bar url to not change on routing 
    more spacing between ion-item elements
    conditional styling of title
    why doesn't the styling on ion-content work
    style next up list
    style leaderboard
    maybe move undo/next buttons above title
-->

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-item lines="none">
        <ion-button slot="end" v-if="throwState" color="danger" @click="forfeit" size="default"
          >Forfeit game</ion-button
        >
      </ion-item>
      <ion-item lines="none">
        <CurrentScore v-if="winner === null" :playerIndex="store.currentTurn.player" />
        <ion-title>{{ title }}</ion-title>
      </ion-item>
      <ion-item lines="none">
        <ThrowScore v-if="throwState" />
        <template v-else>
          <ion-button v-if="!store.players[store.currentTurn.player].forfeited" @click="undo" size="default"
            >Undo</ion-button
          >
          <ion-button v-if="winner === null" slot="end" @click="next" size="default">{{ nextUp }}</ion-button>
        </template>
      </ion-item>
      <ion-item lines="none">
        <PlayOrder v-if="winner === null" />
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

ion-title {
  text-align: center;
}
</style>
