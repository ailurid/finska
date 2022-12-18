<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { trophy, pencil } from 'ionicons/icons';
</script>

<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet />
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="score" href="/game/score">
          <ion-icon :icon="pencil" />
          <ion-label>Score</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="leaderboard" href="/game/leaderboard">
          <ion-icon :icon="trophy" />
          <ion-label>Leaderboard</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
