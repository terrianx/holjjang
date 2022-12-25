<script lang="ts">
import { printBet, printGains } from './PrintHelper';

  export default {
    props: {
      playerBetAmount: Number,
      computerBetAmount: Number
    },
    emits: ['onPlayerGuess'],
    data() {
      return {
        hasGuessed: false,
        evenGuess: true,
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
      printGuessCorrectness() {
        if (this.computerBetAmount) {
          let evenBet: boolean = this.computerBetAmount % 2 == 0;
          if (this.evenGuess && evenBet) {
            this.isPlayerWin = true;
            return 'You correctly guessed even';
          } else if (this.evenGuess && !evenBet) {
            this.isPlayerWin = false;
            return 'You incorrectly guessed even';
          } else if (!this.evenGuess && evenBet) {
            this.isPlayerWin = false;
            return 'You incorrectly guessed odd';
          } else {
            this.isPlayerWin = true;
            return 'You correctly guessed odd';
          }
        }
      },
      getPrintGains() {
        return printGains(this.isPlayerWin, this.minimumBet);
      }
    },
    mounted() {
      if (this.playerBetAmount && this.computerBetAmount) {
        this.minimumBet = Math.min(this.playerBetAmount, this.computerBetAmount);
      }
    },
    methods: {
      checkGuess(clickedEven: boolean) {
        this.hasGuessed = true;
        this.evenGuess = clickedEven;
      },
      endPlayerGuess() {
        if (this.isPlayerWin) {
          this.$emit('onPlayerGuess', this.minimumBet);
        } else {
          this.$emit('onPlayerGuess', -this.minimumBet);
        }
      }
    }
  }
</script>

<template>
  <div>
    <div>
      <h2>Make a guess about Computer's bet</h2>
      <button @click="checkGuess(true)" :disabled="hasGuessed">Even</button>
      <button @click="checkGuess(false)" :disabled="hasGuessed">Odd</button>
    </div>
    <div v-if="hasGuessed">
      <h3>You bet {{ getPrintBet }} and Computer bet {{ computerBetAmount }}</h3>
      <p>{{ printGuessCorrectness }}</p>
      <p>{{ getPrintGains }}</p>
      <button @click="endPlayerGuess">Next --></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
