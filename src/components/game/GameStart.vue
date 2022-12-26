<script lang="ts">
  export default {
    emits: ['onStart'],
    methods: {
      setPlayerStarting(isPlayerStart: boolean) {
        this.$emit('onStart', isPlayerStart)
      }
    }
  }
</script>

<template>
  <div>
    <h2>Who's first ✋?</h2>
    <p>Pick who starts guessing</p>
    <button @click="setPlayerStarting(true)">You</button>
    <button @click="setPlayerStarting(false)">Bot</button>
  </div>
</template>

<style lang="scss" scoped>

</style>
