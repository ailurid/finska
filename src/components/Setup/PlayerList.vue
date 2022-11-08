<script setup lang="ts">
import { IonChip, IonIcon, IonItem, IonLabel } from "@ionic/vue";
import { close } from "ionicons/icons";

import { store } from "../../store";

const removePlayer = (index: number) => {
  store.players.splice(index, 1);
};

const removeAllPlayers = () => {
  store.players = [];
};
</script>

<template>
  <ion-item lines="none">
    <ion-label text-wrap>
      <ion-chip v-for="(player, index) in store.players" :key="player.name">
        <ion-label>{{ player.name }}</ion-label>
        <ion-icon :icon="close" @click="removePlayer(index)"></ion-icon>
      </ion-chip>
      <ion-chip @click="removeAllPlayers" v-if="store.players.length > 0" color="danger">
        <ion-label>Clear</ion-label>
      </ion-chip>
    </ion-label>
  </ion-item>
</template>

<style scoped>

</style>
