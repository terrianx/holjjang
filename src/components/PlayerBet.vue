<script lang="ts">
  export default {
    props: {
      marbles: Number
    },
    emits: ['onPlayerBet'],
    data() {
      return {
        marblesBet: 1,
        marblesRemaining: this.marbles
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
    <h2>Select amount of marbles to bet</h2>
    <h3>Marbles remaining: {{ marblesRemaining }}</h3>
    <input 
      type="number"
      min="1"
      :max="marbles"
      :value="marblesBet"
      @input="selectMarbles"
      placeholder="1" >
    <button @click="endPlayerSelect">Confirm</button>
  </div>
</template>

<style lang="scss" scoped>

</style>
