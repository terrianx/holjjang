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
  PlayerBetBeforeGuessing,
  PlayerGuessing
}

enum Winner {
  Player,
  Computer,
  None
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
        winState: Winner.None,
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
      },
      startPlayerBetBeforeGuess(marblesBet: number) {
        this.computerBetAmount = marblesBet;
        this.gameState = Turn.PlayerBetBeforeGuessing;
      },
      playAfterBetTurn(marblesBet: number) {
        if (this.isPlayerBetBeforeGuessTurn) {
          this.startPlayerGuess(marblesBet);
        } else {
          this.startComputerGuess(marblesBet);
        }
      },
      startPlayerGuess(marblesBet: number) {
        this.playerBetAmount = marblesBet;
        this.gameState = Turn.PlayerGuessing;
      }
    },
    computed: {
      isGameNotStarted() {
        return this.gameState == Turn.NotStarted
                && this.winState == Winner.None;
      },
      isPlayerBetTurn() {
        return ((this.gameState == Turn.PlayerBetting)
                || (this.gameState == Turn.PlayerBetBeforeGuessing))
                && this.winState == Winner.None;
      },
      isComputerGuessTurn() {
        return this.gameState == Turn.ComputerGuessing
                && this.winState == Winner.None;
      },
      isComputerBetTurn() {
        return this.gameState == Turn.ComputerBetting
                && this.winState == Winner.None;
      },
      isPlayerBetBeforeGuessTurn() {
        return this.gameState == Turn.PlayerBetBeforeGuessing
                && this.winState == Winner.None;
      },
      isPlayerGuessTurn() {
        return this.gameState == Turn.PlayerGuessing
                && this.winState == Winner.None;
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
      @on-player-bet="playAfterBetTurn" 
      :marbles="playerMarbles"
      :isPlayerGuessingNext="isPlayerBetBeforeGuessTurn"
      v-if="isPlayerBetTurn" />

    <ComputerGuess
      @on-computer-guess="startComputerBet"
      :marbles="computerMarbles" 
      :playerBetAmount="playerBetAmount" 
      v-else-if="isComputerGuessTurn" />

    <ComputerBet
      @on-computer-bet="startPlayerBetBeforeGuess"
      :marbles="computerMarbles"
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
