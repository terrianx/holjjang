<script lang="ts">
  export default {
    props: {
      marbles: Number,
      isPlayerGuessingNext: Boolean
    },
    emits: ['onPlayerBet'],
    data() {
      return {
        marblesBet: 1,
        marblesRemaining: this.marbles
      }
    },
    computed: {
      printNextGuesser() {
        if (this.isPlayerGuessingNext) {
          return 'You are guessing next';
        } else {
          return 'Computer is guessing next';
        }
      }
    },
    methods: {
      selectMarbles(e: Event) {
        let eventTarget = e.target as HTMLInputElement;
        this.marblesBet = parseInt(eventTarget.value);
        if (this.marbles) {
          this.marblesRemaining = this.marbles - this.marblesBet;
        }
      },
      endPlayerSelect() {
        this.$emit('onPlayerBet', this.marblesBet);
      }
    }
  }
</script>

<template>
  <div>
    <h2>{{ printNextGuesser }}, select amount to bet against Computer</h2>
    <h3>Marbles remaining: {{ marblesRemaining }}</h3>
    <input
      type="number"
      min="1"
      :max="marbles"
      :value="marblesBet"
      @input="selectMarbles"
      placeholder="1" >
    <button @click="endPlayerSelect">Bet</button>
  </div>
</template>

<style lang="scss" scoped>

</style>
