<script setup lang="ts">
import { useIonRouter, IonButton, IonHeader, IonToolbar } from "@ionic/vue";

import { GameState, TurnState } from "../enums";
import { store } from "../store";

const ionRouter = useIonRouter();

const start = () => {
  store.turns = store.players.map(() => []);
  store.state = GameState.Active;
  store.players = store.players.map((p) => ({ name: p.name }));
  ionRouter.push("/game/");
};

const stop = () => {
  store.state = GameState.Setup;
  store.turns = [];
  store.currentTurn = {
    state: TurnState.Throw,
    player: 0
  };
  ionRouter.push("/setup");
};
</script>

<template>
  <ion-header>
    <ion-toolbar color="primary">
      <div class="container">
        <div class="title">
          <a href="https://www.finska.com.au/how-to-play-finska" target="_blank" class="link">Finska</a>
        </div>
        <div>
          <ion-button v-if="store.state === GameState.Active" color="light" @click="stop">end game</ion-button>
          <ion-button v-else :disabled="store.players.length < 2" color="secondary" @click="start"
            >start playing!
          </ion-button>
        </div>
      </div>
    </ion-toolbar>
  </ion-header>
</template>

<style scoped>
.title {
  align-self: center;
}

.link {
  font-size: 2rem;
  text-decoration: none;
  color: var(--ion-color-primary-contrast);
}

.container {
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
}
</style>
