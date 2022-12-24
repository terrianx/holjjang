<script lang="ts">
import GameStart from './GameStart.vue';
import PlayerSelect from './PlayerSelect.vue';
import ComputerGuess from './ComputerGuess.vue';
import ComputerSelect from './ComputerSelect.vue';
import PlayerGuess from './PlayerGuess.vue';

enum Turn {
  NotStarted,
  PlayerSelecting,
  ComputerGuessing,
  ComputerSelecting,
  PlayerGuessing
}

  export default {
    components: {
      GameStart,
      PlayerSelect,
      ComputerGuess,
      ComputerSelect,
      PlayerGuess
    },
    data() {
      return {
        gameState: Turn.NotStarted,
        playerMarbles: 10,
        computerMarbles: 10,
        playerSelected: 1,
      }
    },
    methods: {
      startGame(isPlayerStart: boolean) {
        if (isPlayerStart) {
          this.gameState = Turn.PlayerSelecting;
        } else {
          this.gameState = Turn.ComputerSelecting;
        }
      },
      startComputerGuess(marblesSelected: number) {
        this.playerSelected = marblesSelected;
        this.gameState = Turn.ComputerGuessing;
      }
    },
    computed: {
      isGameNotStarted() {
        return this.gameState == Turn.NotStarted;
      },
      isPlayerSelectTurn() {
        return this.gameState == Turn.PlayerSelecting;
      },
      isComputerGuessTurn() {
        return this.gameState == Turn.ComputerGuessing;
      },
      isComputerSelectTurn() {
        return this.gameState == Turn.ComputerSelecting;
      },
      isPlayerGuessTurn() {
        return this.gameState == Turn.PlayerGuessing;
      }
    }
  }
</script>

<template>
  <div class="game-field">
    <GameStart
      @start="startGame" 
      v-if="isGameNotStarted" />

    <PlayerSelect
      @on-player-select="startComputerGuess" 
      :marbles="playerMarbles" 
      v-if="isPlayerSelectTurn" />

    <ComputerGuess
      :marbles="computerMarbles" 
      :playerSelected="playerSelected" 
      v-else-if="isComputerGuessTurn" />

    <ComputerSelect
      v-else-if="isComputerSelectTurn"/>

    <PlayerGuess
      v-else-if="isPlayerGuessTurn"/>
  </div>
</template>

<style lang="scss" scoped>
  .game-field {
    display: grid;
    height: 80vh;
    align-items: center;
    justify-content: center;
  }
</style>
