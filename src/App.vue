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

<style>
.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

*::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

*::-webkit-scrollbar-thumb {
  background: var(--ion-color-light-shade);
  border-radius: 10px;
}

*::-webkit-scrollbar-track {
  background: var(--ion-color-light-tint);
  border-radius: 10px;
}

*::-webkit-scrollbar-corner,
*::-webkit-scrollbar-gutter {
  background: var(--ion-color-danger);
}
</style>
