<script lang="ts">
  export default {
    props: {
      marbles: Number
    },
    emits: ['onPlayerSelect'],
    data() {
      return {
        marblesSelected: 1,
        marblesRemaining: this.marbles
      }
    },
    methods: {
      selectMarbles(e: Event) {
        let eventTarget = e.target as HTMLInputElement;
        this.marblesSelected = parseInt(eventTarget.value);
        if (this.marbles) {
          this.marblesRemaining = this.marbles - this.marblesSelected;
        }
      },
      endPlayerSelect() {
        this.$emit('onPlayerSelect', this.marblesSelected);
      }
    }
  }
</script>

<template>
  <div>
    <h2>Select amount of marbles</h2>
    <h3>Marbles remaining: {{ marblesRemaining }}</h3>
    <input 
      type="number"
      min="1"
      :max="marbles"
      :value="marblesSelected"
      @input="selectMarbles"
      placeholder="1" >
    <button @click="endPlayerSelect">Confirm</button>
  </div>
</template>

<style lang="scss" scoped>

</style>
