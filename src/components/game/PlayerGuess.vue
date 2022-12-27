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
      guessCorrectness() {
        if (this.computerBetAmount) {
          let evenBet: boolean = this.computerBetAmount % 2 == 0;
          if (this.evenGuess && evenBet) {
            this.isPlayerWin = true;
            return 'correctly guessed <span class="accent">even</span>';
          } else if (this.evenGuess && !evenBet) {
            this.isPlayerWin = false;
            return 'incorrectly guessed <span class="accent">even</span>';
          } else if (!this.evenGuess && evenBet) {
            this.isPlayerWin = false;
            return 'incorrectly guessed <span class="accent">odd</span>';
          } else {
            this.isPlayerWin = true;
            return 'correctly guessed <span class="accent">odd</span>';
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
  <div v-if="!hasGuessed">
    <div>
      <h2>Guess Bot's bet 🤖</h2>
      <p>Did Bot bet even or odd?</p>
    </div>
    <div class="parity-buttons">
      <button @click="checkGuess(true)" :disabled="hasGuessed">Even</button>
      <button @click="checkGuess(false)" :disabled="hasGuessed">Odd</button>
    </div>
  </div>
  <div v-if="hasGuessed" class="guess-view">
    <div class="guess-text">
      <h2>{{ getPrintGains }}</h2>
      <p>
        You bet <span class="accent">{{ playerBetAmount }}</span> 
        while Bot bet <span class="accent">{{ computerBetAmount }}</span>
        and <span v-html="guessCorrectness"></span>
      </p>
    </div>
    <button
      @click="endPlayerGuess">
      Next
      <img src="../../assets/images/right-arrow.svg" alt="Right arrow icon"/>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/Variables.css';

  .parity-buttons {
    display: grid;
    grid: auto / 1fr 1fr;
    justify-items: center;

    button {
      font-size: 30px;
    }
  }

  .parity-buttons button:nth-child(2) {
    background-color: var(--dark);
  }

  .guess-text {
    display: grid;
    justify-items: center;
    p {
      max-width: 80%;
      text-align: center;
    }
  }

  ::v-deep .accent {
    color: var(--accent);
    font-weight: bold;
  }

  .guess-view button {
    display: grid;
    grid: auto / auto auto;
    font-size: 30px;
    justify-self: center;

    img {
      width: 36px;
    }
  }
</style>
