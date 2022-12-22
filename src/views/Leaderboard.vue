<script setup lang="ts">
import { IonContent, IonItem, IonPage, IonTitle } from "@ionic/vue";
import { computed } from "vue";

import { store, scores } from "../store";

import LeaderboardPlayerRowHead from "../components/Leaderboard/LeaderboardPlayerRowHead.vue";
import LeaderboardPlayerRowBody from "../components/Leaderboard/LeaderboardPlayerRowBody.vue";
import LeaderboardPlayerRowFoot from "../components/Leaderboard/LeaderboardPlayerRowFoot.vue";

const notOut = computed(() => scores.value.filter((s) => !store.players[s.playerIndex]?.out));
const out = computed(() => scores.value.filter((s) => store.players[s.playerIndex]?.out));
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-title class="ion-text-center">Leaderboard</ion-title>
      <div class="container">
        <ion-item lines="none">
          <table>
            <thead>
              <tr>
                <th scope="row">Name</th>
                <th scope="row">Score</th>
              </tr>
            </thead>
            <tbody>
              <LeaderboardPlayerRowHead v-for="score in notOut" :player-score="score" :out="false" key="score.name" />
              <LeaderboardPlayerRowHead v-for="score in out" :player-score="score" :out="true" key="score.name" />
            </tbody>
          </table>
          <div class="overflow">
            <table>
              <thead>
                <tr>
                  <th scope="col" colspan="2">Throws</th>
                </tr>
              </thead>
              <tbody>
                <LeaderboardPlayerRowBody v-for="score in notOut" :player-score="score" :out="false" key="score.name" />
                <LeaderboardPlayerRowBody v-for="score in out" :player-score="score" :out="true" key="score.name" />
              </tbody>
            </table>
          </div>
          <table>
            <thead>
              <tr>
                <th class="foot">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <LeaderboardPlayerRowFoot v-for="score in notOut" :player-score="score" :out="false" key="score.name" />
              <LeaderboardPlayerRowFoot v-for="score in out" :player-score="score" :out="true" key="score.name" />
            </tbody>
          </table>
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-item::part(native) {
  align-items: flex-start;
}

ion-item {
  --padding-bottom: 1rem;
  --padding-top: 1rem;
}

ion-title {
  padding-top: 1rem;
  font-size: 1.5rem;
}

.overflow {
  overflow-x: auto;
}

table {
  border-collapse: separate;
  border-spacing: 0 0.25rem;
}

th {
  color: var(--ion-color-medium-shade);
}

th[scope="col"]:first-of-type {
  position: sticky;
  left: 0;
}

:deep(td),
:deep(th) {
  padding: 0.5rem 0.5rem;
  font-size: 1.2rem;
}

:deep(th[scope="row"]:first-of-type) {
  border-radius: 10px 0 0 10px;
}

:deep(.foot) {
  padding-left: 0;
  padding-right: 5px;
  border-radius: 0 10px 10px 0;
}

:deep(.emphasis) {
  font-weight: 550;
}

:deep(.number) {
  text-align: right;
}

:deep(.not-out) {
  background-color: var(--ion-color-secondary);
  color: var(--ion-color-secondary-contrast);
}

:deep(.out) {
  background-color: var(--ion-color-light-tint);
  color: var(--ion-color-light-contrast);
}
</style>
