<script lang="ts">
  export default {
    props: {
      marbles: Number
    },
    emits: ['onComputerBet'],
    mounted() {
      if (this.marbles) {
        let computerBetAmount = Math.ceil(Math.random() * this.marbles);
        this.$emit('onComputerBet', computerBetAmount);
      }
    }
  }
</script>
