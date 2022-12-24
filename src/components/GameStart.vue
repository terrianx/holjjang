<script lang="ts">
  export default {
    emits: ['start'],
    methods: {
      setPlayerStarting(isPlayerStart: boolean) {
        this.$emit('start', isPlayerStart)
      }
    }
  }
</script>

<template>
  <div>
    <h2>Who's first?</h2>
    <button @click="setPlayerStarting(true)">Player</button>
    <button @click="setPlayerStarting(false)">Computer</button>
  </div>
</template>

<style lang="scss" scoped>

</style>
