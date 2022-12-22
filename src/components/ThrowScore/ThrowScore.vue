<script setup lang="ts">
import { IonItem, IonLabel } from "@ionic/vue";

import ThrowScoreButton from "./ThrowScoreButton.vue";

const validThrowScores = [...Array(13).keys()];
</script>

<template>
  <ion-item lines="none">
    <ion-label class="ion-text-wrap ion-text-center">
      <ThrowScoreButton v-for="score in validThrowScores" :value="score" :key="score" />
    </ion-label>
  </ion-item>
</template>

<style scoped></style>
