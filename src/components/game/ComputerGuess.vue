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
      printGuessCorrectness() {
        if (this.playerBetAmount) {
          let evenBet: boolean = this.playerBetAmount % 2 == 0;
          if (this.evenGuess && evenBet) {
            this.isPlayerWin = false;
            return 'Computer correctly guessed even';
          } else if (this.evenGuess && !evenBet) {
            this.isPlayerWin = true;
            return 'Computer incorrectly guessed even';
          } else if (!this.evenGuess && evenBet) {
            this.isPlayerWin = true;
            return 'Computer incorrectly guessed odd';
          } else {
            this.isPlayerWin = false;
            return 'Computer correctly guessed odd';
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
  <div>
    <h2>You bet {{ getPrintBet }} and {{ printResult }}</h2>
    <h3>{{ printGuessCorrectness }}</h3>
    <p>{{ getPrintGains }}</p>
    <button @click="endComputerGuess">Next --></button>
  </div>
</template>

<style lang="scss" scoped>

</style>
