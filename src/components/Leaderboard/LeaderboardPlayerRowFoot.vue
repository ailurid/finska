<script setup lang="ts">
import { computed } from "vue";

import { PlayerScore } from "../../interfaces";

const props = defineProps<{ playerScore: PlayerScore; out: boolean }>();
const className = computed(() => (props.out ? "out" : "not-out"));
</script>

<template>
  <tr>
    <td :class="className" class="foot">&nbsp;</td>
  </tr>
</template>

<style scoped></style>
