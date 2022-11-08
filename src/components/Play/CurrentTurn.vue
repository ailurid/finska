<script setup lang="ts">
import { TurnState } from "../../enums";
import { store, allOut } from "../../store";
import Throw from "./Throw.vue";
import Result from "./Result.vue";
</script>

<template>
  <Throw v-if="store.currentTurn.state === TurnState.Throw" />
  <Result v-else-if="store.currentTurn.state === TurnState.Result || allOut" />
</template>

<style scoped>

</style>
