<script setup lang="ts">
import { IonLabel } from "@ionic/vue";
import { computed } from "vue";

import { Player } from "../../interfaces";
import { store, nextPlayer } from "../../store";
import PlayOrderItem from "./PlayOrderItem.vue"

const addIndex = (player: Player, index: number) => ({ index, player });

const players = computed(() => store.players.map(addIndex).filter((p) => !p.player.out));

const playersAfter = computed(() => players.value.filter((p) => p.index >= nextPlayer.value));
const playersBefore = computed(() => players.value.filter((p) => p.index < nextPlayer.value));

</script>

<template>
  <div>
    <ion-label>Next up:</ion-label>
    <PlayOrderItem v-for="(item) in playersAfter" :playerIndex="item.index" :key="item.player.name" />
    <PlayOrderItem v-for="(item) in playersBefore" :playerIndex="item.index" :key="item.player.name" />
  </div>
</template>

<style scoped>
</style>
