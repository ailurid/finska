<script setup lang="ts">
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/vue";
import { computed } from "vue";

import { forfeit, next, undo } from "../../actions";
import { TurnState } from "../../enums";
import { store, allOut, currentPlayer, nextPlayer, winner } from "../../store";
import { playerCurrentTurn } from "../../utils";

import Scoreboard from "./Scoreboard/Scoreboard.vue";
import ThrowScore from "./ThrowScore/ThrowScore.vue";
import CurrentScore from "./CurrentScore.vue";

const throwState = computed(() => store.currentTurn.state === TurnState.Throw);
const resultState = computed(() => store.currentTurn.state === TurnState.Result || allOut.value);

const turn = computed(() => playerCurrentTurn(store.currentTurn.player, store));

const nextUp = computed(() => `Next up: ${store.players[nextPlayer.value].name}`);

const title = computed(() => {
  const name = currentPlayer.value.name;
  if (winner.value !== null) return `${name} is the winner! 🎉`;
  if (currentPlayer.value.out) return `${name} is out!`;
  if (resultState.value) return `${name} threw ${turn.value.throw}!`;
  return name;
});
</script>


<template>
  <ion-card mode="ios">
    <ion-card-header>
      <div class="subtitle-container">
        <ion-card-subtitle v-if="throwState">{{ nextUp }}</ion-card-subtitle>
        <ion-button v-if="throwState" size="small" color="danger" @click="forfeit">Forfeit game</ion-button>
      </div>
      <div class="title-container">
        <CurrentScore v-if="winner === null" />
        <ion-card-title>{{ title }}</ion-card-title>
      </div>
    </ion-card-header>
    <ion-card-content class="content-container">
      <ThrowScore v-if="throwState" />
      <template v-else>
        <div>
          <ion-button v-if="!store.players[store.currentTurn.player].forfeited" @click="undo">Undo</ion-button>
        </div>
        <div>
          <ion-button v-if="winner === null" @click="next">{{ nextUp }}</ion-button>
        </div>
      </template>
    </ion-card-content>
  </ion-card>
  <Scoreboard />
</template>

<style scoped>
ion-card-title {
  text-align: center;
}

.subtitle-container {
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.content-container {
  display: flex;
  justify-content: space-between;
}
</style>
