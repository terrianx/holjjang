<script lang="ts">
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
    },
    computed: {
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
      printBet() {
        if (this.playerBetAmount == 1) {
          return '1 marble';
        } else {
          return this.playerBetAmount + ' marbles';
        }
      },
      printResult() {
        return 'Computer bet ' + this.computerBetAmount;
      },
      printGains() {
        if (this.isPlayerWin) {
          if (this.minimumBet == 1) {
            return 'You win 1 marble from Computer';
          }
          return 'You win ' + this.minimumBet + ' marbles from Computer';
        } else {
          if (this.minimumBet == 1) {
            return 'Computer wins 1 marble from you';
          }
          return 'Computer wins ' + this.minimumBet + ' marbles from you';
        }
      }
    }
  }
</script>

<template>
  <div>
    <h2>You bet {{ printBet }} and {{ printResult }}</h2>
    <h3>{{ printGuessCorrectness }}</h3>
    <p>{{ printGains }}</p>
    <button  @click="endComputerGuess">Ok</button>
  </div>
</template>

<style lang="scss" scoped>

</style>
