<script setup lang="ts">
import { IonButton, IonContent, IonItem, IonList, IonPage, IonTitle } from "@ionic/vue";
import { computed } from "vue";

import { forfeit, next, undo } from "../actions";
import { TurnState } from "../enums";
import { store, allOut, currentPlayer, winner } from "../store";
import { playerCurrentTurn } from "../utils";

import ThrowScore from "../components/ThrowScore/ThrowScore.vue";
import CurrentScore from "../components/CurrentScore.vue";
import PlayOrder from "../components/PlayOrder/PlayOrder.vue";

const throwState = computed(() => store.currentTurn.state === TurnState.Throw);
const resultState = computed(() => store.currentTurn.state === TurnState.Result || allOut.value);

const turn = computed(() => playerCurrentTurn(store.currentTurn.player, store));

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
    maybe move undo/next buttons above title
    allow undo forfeit?
-->

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-item lines="none">
        <ion-button slot="end" v-if="throwState" color="danger" @click="forfeit" size="small">
          Forfeit game
        </ion-button>
      </ion-item>
      <ion-item lines="none">
        <div class="container">
          <ion-list>
            <ion-item lines="none">
              <CurrentScore v-if="winner === null" :playerIndex="store.currentTurn.player" slot="start" />
              <ion-title>{{ title }}</ion-title></ion-item
            >
          </ion-list>
        </div>
      </ion-item>
      <ThrowScore v-if="throwState" />
      <ion-item v-else lines="none">
        <ion-button v-if="!store.players[store.currentTurn.player].forfeited" @click="undo" size="default">
          Undo
        </ion-button>
        <ion-button v-if="winner === null" slot="end" @click="next" size="default">Next</ion-button>
      </ion-item>
      <ion-item lines="none">
        <PlayOrder v-if="winner === null" />
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-item {
  --padding-bottom: 0.5rem;
  --padding-top: 0.5rem;
}

ion-title {
  text-align: center;
}
</style>
