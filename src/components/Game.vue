<script setup lang="ts">
import { GameState } from "../enums";
import { store } from "../store";
import Setup from './Setup/Setup.vue';
import Play from './Play/Play.vue';
</script>

<template>
  <Setup v-if="store.state === GameState.Setup" />
  <Play v-else-if="store.state === GameState.Active" />
</template>

<style scoped>

</style>
