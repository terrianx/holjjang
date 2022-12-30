<script lang="ts">
  export default {
    props: {
      playerWon: Boolean
    },
    computed: {
      result() {
        if (this.playerWon) {
          return '<h2>You won 🎉!</h2>'
                  + '<p>Maybe it\'s still too early for bots to take over the world...</p>';
        } else {
          return '<h2>You lost 😔</h2>'
                  + '<p>Sorry for your loss...try again below!</p>';
        }
      }
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
    <div v-html="result" class="end-text"></div>
    <button @click="playAgain">
      Replay
      <span class="material-symbols-outlined">refresh</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
  .end-text {
    display: grid;
    justify-items: center;
  }

  ::v-deep p {
    max-width: 350px;
  }

  button {
    display: grid;
    grid: auto / auto auto;
    column-gap: 10px;
    font-size: 30px;
    justify-self: center;
    align-items: center;

    span {
      font-size: 30px;
    }
  }
</style>
