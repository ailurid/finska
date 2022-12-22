<script setup lang="ts">
import { computed } from "vue";

import { store } from "../store";
import { playerCurrentTurn } from "../utils";

interface CurrentScoreProps {
  playerIndex: number;
  size?: "small" | "medium";
}

const props = defineProps<CurrentScoreProps>();

const currentScore = computed(() => playerCurrentTurn(props.playerIndex, store).score ?? 0);
const className = computed(() => `circle ${props.size == undefined ? "small" : props.size}`);
</script>

<template>
  <div :class="className">
    {{ currentScore }}
  </div>
</template>

<style scoped>
.circle {
  --size-small: 3rem;
  --size-medium: 4rem;
  background-color: var(--ion-color-secondary);
  color: var(--ion-color-secondary-contrast);
  border-radius: 50%;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.small {
  height: var(--size-small);
  min-height: var(--size-small);
  max-height: var(--size-small);
  width: var(--size-small);
  min-width: var(--size-small);
  max-width: var(--size-small);
}

.medium {
  font-size: 1.5rem;
  height: var(--size-medium);
  min-height: var(--size-medium);
  max-height: var(--size-medium);
  width: var(--size-medium);
  min-width: var(--size-medium);
  max-width: var(--size-medium);
}
</style>
