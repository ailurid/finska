<script setup lang="ts">
import { IonApp, IonContent, IonRouterOutlet } from "@ionic/vue";

import Header from "./components/Header.vue";
</script>

<template>
  <ion-app>
    <Header />
    <ion-content>
      <ion-router-outlet />
    </ion-content>
  </ion-app>
</template>

<style></style>
