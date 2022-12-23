<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";

import AddPlayer from "../components/Setup/AddPlayer.vue";
import PlayerList from "../components/Setup/PlayerList.vue";
import CodeSandboxWarningCard from "../components/Setup/CodeSandboxWarningCard.vue";
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <AddPlayer />
      <PlayerList />
      <CodeSandboxWarningCard />
    </ion-content>
  </ion-page>
</template>
