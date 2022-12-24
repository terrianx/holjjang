<script lang="ts">
  export default {
    props: {
      marbles: Number,
      playerSelected: Number,
    },
    data() {
      return {
        evenGuess: true
      }
    },
    methods: {
      
    },
    computed: {
      guess() {
        return Math.floor(Math.random() * 2) == 0;
      },
      getSelected() {
        if (this.playerSelected == 1) {
          return '1 marble';
        } else {
          return this.playerSelected + ' marbles';
        }
      }
    }
  }
</script>

<template>
  <div>
    <h2>Computer guesses {{ guess ? 'even' : 'odd' }}</h2>
    <h3>You selected {{ getSelected }} </h3>
  </div>
</template>

<style lang="scss" scoped>

</style>
