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
    <div>
      <h2>Who's first ✋?</h2>
      <p>Pick who starts guessing</p>
    </div>
    <div class="start-buttons">
      <button @click="setPlayerStarting(true)">You</button>
      <button @click="setPlayerStarting(false)">Bot</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/Variables.css';

  .start-buttons {
    display: grid;
    grid: auto / 1fr 1fr;
    justify-items: center;

    button {
      font-size: 30px;
    }
  }

  button:nth-child(2) {
    background-color: var(--dark);
  }

  button:nth-child(2):hover {
    background-color: var(--clear);
    border: 2px solid var(--dark);
    color: var(--dark);
  }
</style>
