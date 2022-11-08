<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/vue";

defineProps<{ name: string }>();
</script>

<template>
  <ion-card mode="ios">
    <ion-card-header>
      <ion-card-title>{{ name }} is the winner! 🎉</ion-card-title>
    </ion-card-header>
  </ion-card>
</template>

<style scoped>
ion-card-title {
  text-align: center;
}
</style>
