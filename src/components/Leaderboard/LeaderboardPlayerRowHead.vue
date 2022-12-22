<script setup lang="ts">
import { computed } from "vue";

import { PlayerScore } from "../../interfaces";

const props = defineProps<{ playerScore: PlayerScore; out: boolean }>();
const className = computed(() => (props.out ? "out" : "not-out"));
</script>

<template>
  <tr>
    <th scope="row" :class="className">{{ playerScore.name }}</th>
    <th scope="row" :class="className" class="number">{{ playerScore.score }}</th>
  </tr>
</template>

<style scoped></style>
