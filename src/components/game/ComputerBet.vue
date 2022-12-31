<script lang="ts">
import { smartBet } from './CreateBet';

  export default {
    props: {
      marbles: Number,
      default: Number
    },
    emits: ['onComputerBet'],
    mounted() {
      if (this.marbles && this.default) {
        let computerBetAmount = smartBet(this.default, this.marbles);
        this.$emit('onComputerBet', computerBetAmount);
      }
    }
  }
</script>
