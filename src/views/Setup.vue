<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';

import AddPlayer from '../components/Setup/AddPlayer.vue';
import PlayerList from '../components/Setup/PlayerList.vue';
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <AddPlayer />
      <PlayerList />
  </ion-content>
  </ion-page>
</template>
