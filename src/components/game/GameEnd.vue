<script lang="ts">
  export default {
    props: {
      winner: String
    },
    emits: ['on-reset'],
    methods: {
      playAgain() {
        this.$emit('on-reset')
      }
    }
  }
</script>

<template>
  <div>
    <h2>{{ winner }} wins! 🎉</h2>
    <button @click="playAgain">Play again</button>
  </div>
</template>

<style lang="scss" scoped>

</style>
