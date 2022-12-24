<script lang="ts">
import GameStart from './GameStart.vue'
import PlayerTurn from './PlayerTurn.vue'
import ComputerTurn from './ComputerTurn.vue'

  export default {
    components: {
      GameStart,
      PlayerTurn,
      ComputerTurn
    },
    data() {
      return {
        isGameStarted: false,
        playerMarbles: 10,
        computerMarbles: 10,
        playerTurn: false
      }
    }
  }
</script>

<template>
  <div>
    <GameStart v-if="!isGameStarted"/>
  </div>
</template>

<style lang="scss" scoped>

</style>
