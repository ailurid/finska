<script setup lang="ts">
import { IonItem, IonList, IonTitle } from "@ionic/vue";
import { computed } from "vue";

import { Player } from "../../interfaces";
import { store, nextPlayer } from "../../store";
import PlayOrderItem from "./PlayOrderItem.vue";

const addIndex = (player: Player, index: number) => ({ index, player });

const players = computed(() => store.players.map(addIndex).filter((p) => !p.player.out));

const playersAfter = computed(() => players.value.filter((p) => p.index >= nextPlayer.value));
const playersBefore = computed(() => players.value.filter((p) => p.index < nextPlayer.value));
</script>

<template>
  <div class="container">
    <ion-list>
      <ion-item lines="none">
        <ion-title class="next-up">Next up</ion-title>
      </ion-item>
      <PlayOrderItem v-for="item in playersAfter" :playerIndex="item.index" :key="item.player.name" />
      <PlayOrderItem v-for="item in playersBefore" :playerIndex="item.index" :key="item.player.name" />
    </ion-list>
  </div>
</template>

<style scoped>
ion-title {
  text-align: center;
}

.next-up {
  text-align: center;
}

.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
