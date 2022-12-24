<script lang="ts">
import GameStart from './GameStart.vue';
import PlayerTurn from './PlayerTurn.vue';
import ComputerTurn from './ComputerTurn.vue';

  export default {
    components: {
      GameStart,
      PlayerTurn,
      ComputerTurn
    },
    data() {
      return {
        isGameStarted: false,
        playerMarbles: 10,
        computerMarbles: 10,
        playerTurn: false
      }
    },
    methods: {
      startGame(isPlayerStart: boolean) {
        this.isGameStarted = true;
        this.playerTurn = isPlayerStart;
      }
    }
  }
</script>

<template>
  <div class="game-field">
    <GameStart @start="startGame" v-if="!isGameStarted" />
    <PlayerTurn :marbles="playerMarbles" v-if="isGameStarted && playerTurn" />
    <ComputerTurn :marbles="computerMarbles" v-else-if="isGameStarted && !playerTurn" />
  </div>
</template>

<style lang="scss" scoped>
  .game-field {
    display: grid;
    height: 80vh;
    align-items: center;
  }
</style>
