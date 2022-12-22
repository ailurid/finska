<script setup lang="ts">
import { computed } from "vue";

import { store } from "../store";
import { playerCurrentTurn } from "../utils";

const props = defineProps<{ playerIndex: number }>();

const currentScore = computed(() => playerCurrentTurn(props.playerIndex, store).score ?? 0);

// TODO: larger and smaller variants
</script>

<template>
  <div class="circle">
    <div class="circle-label">{{ currentScore }}</div>
  </div>
</template>

<style scoped>
.circle {
  background-color: var(--ion-color-secondary);
  color: var(--ion-color-secondary-contrast);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  height: 3rem;
  min-height: 3rem;
  max-height: 3rem;
  width: 3rem;
  min-width: 3rem;
  max-width: 3rem;
}

.circle-label {
  font-size: 1rem;
}
</style>
