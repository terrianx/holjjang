<script lang="ts">
import { printBet, printGains } from './PrintHelper';
import { smartBet } from './CreateBet';

  export default {
    props: {
      marbles: Number,
      playerBetAmount: Number,
      default: Number
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
      if (this.default && this.marbles == (this.default * 2) - 1) {
        this.evenGuess = false;
      } else {
        this.evenGuess = Math.random() >= 0.5;
      }
      if (this.marbles && this.default) {
        this.computerBetAmount = smartBet(this.default, this.marbles);
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
      @click="endComputerGuess"
      class="next">
      Next
      <span class="material-symbols-outlined">arrow_forward</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/GuessStyle.css';
</style>
