<script setup lang="ts">
import { IonButton, IonIcon, IonItem, IonInput, InputCustomEvent } from "@ionic/vue";
import { colorWand } from "ionicons/icons";
import { computed, ref } from "vue";

import { store } from "../../store";

// TODO: get rid of it
const debug = false;

const name = ref<string | undefined>("");

const canAddPlayer = computed(() => store.players.length < 8);

const addPlayer = (nameToAdd: string): boolean => {
  if (!nameToAdd || !canAddPlayer.value) {
    return false;
  }

  const existingName = store.players.find((p) => p.name.toLowerCase() === nameToAdd.toLowerCase());
  if (existingName) {
    return false;
  }

  store.players.push({ name: nameToAdd });
  return true;
};

const fakePlayers = () => {
  // TODO: this list is too long, not that it matters
  const fp = ["Otis", "Lefty", "Charlie", "Lucky", "Spike", "Clayton", "Muddy", "Boo", "Nelson"];
  fp.forEach((player) => {
    addPlayer(player);
  });
};

const onClick = () => {
  const added = addPlayer(name.value ?? "");
  if (added) {
    name.value = "";
  }
};

const onInputChange = (event: InputCustomEvent) => {
  if (event.detail.value === null) return;
  name.value = event.detail.value;
};

const onKeyPress = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    onClick();
  }
};
</script>

<template>
  <ion-item fill="outline">
    <ion-input
      class="name-input"
      placeholder="Enter name"
      :maxlength="20"
      v-model="name"
      @ionChange="onInputChange"
      @keypress="onKeyPress"
    ></ion-input>
    <ion-button :disabled="!canAddPlayer || !name" @click="onClick">add player</ion-button>
    <ion-button v-if="debug" @click="fakePlayers">
      <ion-icon :icon="colorWand"></ion-icon>
    </ion-button>
  </ion-item>
</template>

<style scoped></style>
