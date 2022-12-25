<script lang="ts">
import GameStart from './GameStart.vue';
import PlayerBet from './PlayerBet.vue';
import ComputerGuess from './ComputerGuess.vue';
import ComputerBet from './ComputerBet.vue';
import PlayerGuess from './PlayerGuess.vue';

enum Turn {
  NotStarted,
  PlayerBetting,
  ComputerGuessing,
  ComputerBetting,
  PlayerGuessing
}

  export default {
    components: {
      GameStart,
      PlayerBet,
      ComputerGuess,
      ComputerBet,
      PlayerGuess
    },
    data() {
      return {
        gameState: Turn.NotStarted,
        playerMarbles: 10,
        computerMarbles: 10,
        playerBetAmount: 1,
        computerBetAmount: 1
      }
    },
    methods: {
      startGame(isPlayerStart: boolean) {
        if (isPlayerStart) {
          this.gameState = Turn.PlayerBetting;
        } else {
          this.gameState = Turn.ComputerBetting;
        }
      },
      startComputerGuess(marblesBet: number) {
        this.playerBetAmount = marblesBet;
        this.gameState = Turn.ComputerGuessing;
      },
      startComputerBet(marblesWon: number) {
        this.playerMarbles += marblesWon;
        this.computerMarbles -= marblesWon;
        this.gameState = Turn.ComputerBetting;
      }
    },
    computed: {
      isGameNotStarted() {
        return this.gameState == Turn.NotStarted;
      },
      isPlayerBetTurn() {
        return this.gameState == Turn.PlayerBetting;
      },
      isComputerGuessTurn() {
        return this.gameState == Turn.ComputerGuessing;
      },
      isComputerBetTurn() {
        return this.gameState == Turn.ComputerBetting;
      },
      isPlayerGuessTurn() {
        return this.gameState == Turn.PlayerGuessing;
      }
    }
  }
</script>

<template>
  <div class="game-field">
    <p>Player marbles: {{ playerMarbles }}</p>
    <GameStart
      @start="startGame" 
      v-if="isGameNotStarted" />

    <PlayerBet
      @on-player-bet="startComputerGuess" 
      :marbles="playerMarbles" 
      v-if="isPlayerBetTurn" />

    <ComputerGuess
      @on-computer-guess="startComputerBet"
      :marbles="computerMarbles" 
      :playerBetAmount="playerBetAmount" 
      v-else-if="isComputerGuessTurn" />

    <ComputerBet
      v-else-if="isComputerBetTurn"/>

    <PlayerGuess
      v-else-if="isPlayerGuessTurn"/>
  </div>
</template>

<style lang="scss" scoped>
  .game-field {
    display: grid;
    grid: min-content 40vh / 1fr;
    height: 80vh;
    align-items: center;
    justify-items: center;
    justify-content: center;
  }
</style>
