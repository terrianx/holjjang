<script lang="ts">
import GameStart from './GameStart.vue';
import PlayerBet from './PlayerBet.vue';
import ComputerGuess from './ComputerGuess.vue';
import ComputerBet from './ComputerBet.vue';
import PlayerGuess from './PlayerGuess.vue';
import GameEnd from './GameEnd.vue';

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

const defaultMarbles = 10;
const defaultBet = 1;

  export default {
    components: {
      GameStart,
      PlayerBet,
      ComputerGuess,
      ComputerBet,
      PlayerGuess,
      GameEnd
    },
    data() {
      return {
        gameState: Turn.NotStarted,
        winState: Winner.None,
        playerMarbles: defaultMarbles,
        computerMarbles: defaultMarbles,
        playerBetAmount: defaultBet,
        computerBetAmount: defaultBet
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
      },
      isGameEnd() {
        return this.winState != Winner.None;
      },
      getWinner() {
        if (this.winState == Winner.Player) {
          return 'Player';
        } else {
          return 'Computer';
        }
      }
    },
    methods: {
      startGame(isPlayerStart: boolean) {
        if (isPlayerStart) {
          this.gameState = Turn.ComputerBetting;
        } else {
          this.gameState = Turn.PlayerBetting;
        }
      },
      playPlayerBet(marblesWon: number) {
        this.playerMarbles += marblesWon;
        this.computerMarbles -= marblesWon;
        this.checkEndGame();
        this.gameState = Turn.PlayerBetting;
      },
      playComputerGuess(marblesBet: number) {
        this.playerBetAmount = marblesBet;
        this.gameState = Turn.ComputerGuessing;
      },
      playComputerBet(marblesWon: number) {
        this.playerMarbles += marblesWon;
        this.computerMarbles -= marblesWon;
        this.checkEndGame();
        this.gameState = Turn.ComputerBetting;
      },
      playPlayerBetBeforeGuess(marblesBet: number) {
        this.computerBetAmount = marblesBet;
        this.gameState = Turn.PlayerBetBeforeGuessing;
      },
      playAfterBetTurn(marblesBet: number) {
        if (this.isPlayerBetBeforeGuessTurn) {
          this.playPlayerGuess(marblesBet);
        } else {
          this.playComputerGuess(marblesBet);
        }
      },
      playPlayerGuess(marblesBet: number) {
        this.playerBetAmount = marblesBet;
        this.gameState = Turn.PlayerGuessing;
      },
      checkEndGame() {
        let maxMarbles = defaultMarbles * 2;
        if (this.playerMarbles == maxMarbles) {
          this.winState = Winner.Player;
        } else if (this.computerMarbles == maxMarbles) {
          this.winState = Winner.Computer;
        }
      },
      resetGame() {
        this.gameState = Turn.NotStarted;
        this.winState = Winner.None;
        this.playerMarbles = defaultMarbles,
        this.computerMarbles = defaultMarbles,
        this.playerBetAmount = defaultBet,
        this.computerBetAmount = defaultBet
      }
    }
  }
</script>

<template>
  <div class="game-field">
    <GameStart
      @on-start="startGame" 
      v-if="isGameNotStarted" />

    <PlayerBet
      @on-player-bet="playAfterBetTurn" 
      :marbles="playerMarbles"
      :isPlayerGuessingNext="isPlayerBetBeforeGuessTurn"
      v-if="isPlayerBetTurn" />

    <ComputerGuess
      @on-computer-guess="playComputerBet"
      :marbles="computerMarbles" 
      :playerBetAmount="playerBetAmount"
      v-else-if="isComputerGuessTurn" />

    <ComputerBet
      @on-computer-bet="playPlayerBetBeforeGuess"
      :marbles="computerMarbles"
      v-else-if="isComputerBetTurn"/>

    <PlayerGuess
      @on-player-guess="playPlayerBet"
      :playerBetAmount="playerBetAmount"
      :computerBetAmount="computerBetAmount"
      v-else-if="isPlayerGuessTurn"/>
    
    <GameEnd
      @on-reset="resetGame"
      :winner="getWinner"
      v-if="isGameEnd"/>
  </div>
</template>

<style lang="scss" scoped>
  .game-field {
    display: grid;
    grid: 1fr / 1fr;
    height: 100vh;
    align-items: center;
    justify-items: center;
    justify-content: center;
  }
</style>
