<script setup lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonText } from "@ionic/vue";

import { shouldRedirect, ghPagesUrl } from "../../utils";

const show = shouldRedirect(window.location.href);
</script>

<template v-if="show">
  <a :href="ghPagesUrl">
    <ion-card>
      <ion-card-header>
        <ion-card-title class="ion-text-wrap ion-text-center">
          It looks like you're viewing this app via CodeSandbox!
        </ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-item lines="none">
          <ion-label class="ion-text-wrap ion-text-center">
            You'll <ion-text color="danger">lose your game progress</ion-text> if the sandbox restarts without warning.
          </ion-label>
        </ion-item>
        <ion-item lines="none">
          <ion-label class="ion-text-wrap ion-text-center">
            It's safer to play using the mirror on GitHub Pages instead:
          </ion-label>
        </ion-item>
        <ion-item lines="none">
          <ion-label class="ion-text-wrap ion-text-center">
            {{ ghPagesUrl }}
          </ion-label>
        </ion-item>
        <ion-item lines="none">
          <ion-label class="ion-text-wrap ion-text-center">
            Please click or tap anywhere in this box to go there now! 🙏
          </ion-label>
        </ion-item>
      </ion-card-content>
    </ion-card>
  </a>
</template>

<style scoped>
a {
  text-decoration: unset;
  color: unset;
}

ion-card-content {
  text-align: center;
}

ion-item::part(native) {
  flex-direction: column;
}
</style>
