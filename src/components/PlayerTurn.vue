<script lang="ts">
  export default {
    props: {
      marbles: Number
    },
    data() {
      return {
        marblesSelected: 0
      }
    },
    methods: {
      selectMarbles(e: Event) {
        let eventTarget = e.target as HTMLInputElement;
        this.marblesSelected = parseInt(eventTarget.value)
      }
    }
  }
</script>

<template>
  <div>
    <h2>Select amount of marbles</h2>
    <input 
      type="number"
      min="1"
      :max="marbles"
      :value="marblesSelected"
      @input="selectMarbles"
      placeholder="0" >
    <h3>Marbles remaining: {{ marbles }}</h3>
  </div>
</template>

<style lang="scss" scoped>

</style>
