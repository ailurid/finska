<script setup lang="ts">
import { IonApp, IonContent } from '@ionic/vue';

import Header from './components/Header.vue';
import Game from './components/Game.vue';
</script>

<template>
  <ion-app>
    <Header />
    <ion-content :fullscreen="true" class="ion-padding">
      <Game />
    </ion-content>
  </ion-app>
</template>

<style>

</style>
