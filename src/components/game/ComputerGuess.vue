<script lang="ts">
import { printBet, printGains } from './PrintHelper';

  export default {
    props: {
      marbles: Number,
      playerBetAmount: Number,
    },
    emits: ['onComputerGuess'],
    data() {
      return {
        evenGuess: true,
        computerBetAmount: 1,
        minimumBet: 1,
        isPlayerWin: true
      }
    },
    computed: {
      getPrintBet() {
        if (this.playerBetAmount) {
          return printBet(this.playerBetAmount);
        }
      },
      printResult() {
        return 'Computer bet ' + this.computerBetAmount;
      },
      guessCorrectness() {
        if (this.playerBetAmount) {
          let evenBet: boolean = this.playerBetAmount % 2 == 0;
          if (this.evenGuess && evenBet) {
            this.isPlayerWin = false;
            return 'correctly guessed <span class="accent">even</span>';
          } else if (this.evenGuess && !evenBet) {
            this.isPlayerWin = true;
            return 'incorrectly guessed <span class="accent">even</span>';
          } else if (!this.evenGuess && evenBet) {
            this.isPlayerWin = true;
            return 'incorrectly guessed <span class="accent">odd</span>';
          } else {
            this.isPlayerWin = false;
            return 'correctly guessed <span class="accent">odd</span>';
          }
        }
      },
      getPrintGains() {
        return printGains(this.isPlayerWin, this.minimumBet);
      }
    },
    mounted() {
      this.evenGuess = Math.random() >= 0.5;
      if (this.marbles) {
        this.computerBetAmount = Math.ceil(Math.random() * this.marbles);
      }
      if (this.playerBetAmount) {
        this.minimumBet = Math.min(this.computerBetAmount, this.playerBetAmount);
      }
    },
    methods: {
      endComputerGuess() {
        if (this.isPlayerWin) {
          this.$emit('onComputerGuess', this.minimumBet);
        } else {
          this.$emit('onComputerGuess', -this.minimumBet);
        }
      }
    }
  }
</script>

<template>
  <div class="guess-view">
    <div class="guess-text">
      <h2>{{ getPrintGains }}</h2>
      <p>
        You bet <span class="accent">{{ playerBetAmount }}</span> 
        while Bot bet <span class="accent">{{ computerBetAmount }}</span>
        and Bot <span v-html="guessCorrectness"></span>
      </p>
    </div>
    <button
      @click="endComputerGuess">
      Next
      <img src="../../assets/images/right-arrow.svg" alt="Right arrow icon"/>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/GuessStyle.css';
</style>
