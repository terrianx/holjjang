<script lang="ts">
  export default {
    props: {
      marbles: Number,
      isPlayerGuessingNext: Boolean
    },
    emits: ['onPlayerBet'],
    data() {
      return {
        marblesBet: 1
      }
    },
    computed: {
      printNextGuesser() {
        if (this.isPlayerGuessingNext) {
          return '<span>You</span> are the next guesser';
        } else {
          return '<span>Bot</span> is the next guesser';
        }
      }
    },
    methods: {
      highlightField() {
        (this.$refs.inputField as HTMLInputElement).select();
      },
      setBet(bet: number) {
        if (!bet || bet <= 0) {
          this.marblesBet = 1;
        } else if (this.marbles && bet > this.marbles) {
          this.marblesBet = this.marbles;
        } else {
          this.marblesBet = bet;
        }
      },
      decrementBet() {
        this.setBet(this.marblesBet - 1);
      },
      incrementBet() {
        this.setBet(this.marblesBet + 1);
      },
      selectMarbles(e: Event) {
        let eventElement = e.target as HTMLInputElement;
        let bet = parseInt(eventElement.value);
        this.setBet(bet);
      },
      endPlayerSelect() {
        this.$emit('onPlayerBet', this.marblesBet);
      }
    }
  }
</script>

<template>
  <div>
    <div>
      <h2>Make your bet 🤫</h2>
      <p>Marbles on the line: <span>{{ marblesBet }}</span></p>
    </div>
    <div class="bet-actions">
      <div class="bet-input">
        <button @click="decrementBet">
          <span class="material-symbols-outlined">remove</span>
        </button>
        <input
          type="number"
          min="1"
          :max="marbles"
          :value="marblesBet"
          ref="inputField"
          @click="highlightField"
          @keyup="highlightField"
          @input="selectMarbles"
          placeholder="1" >
          <button @click="incrementBet">
            <span class="material-symbols-outlined">add</span>
          </button>
      </div>
      <button
        @click="endPlayerSelect"
        class="bet-button">
        Bet
      </button>
      <p class="next-guesser" v-html="printNextGuesser"></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/Variables.css';

  .bet-actions {
    display: grid;
    grid: auto auto / auto auto;
    row-gap: 40px;
    column-gap: 60px;
    justify-content: center;
  }

  .bet-input {
    display: grid;
    grid: auto / repeat(3, auto);

    button {
      display: grid;
      // button 5px padding plus 36px font size
      width: 46px;
      height: 46px;
      justify-content: center;
      align-content: center;

      span {
        color: white;
      }
    }

    button:hover > span{
      color: var(--accent);
    }
  }

  input[type="number"] {
    background-color: hsla(0, 0, 0, 0);
    border: none;
    font-size: 36px;
    font-weight: bold;
    color: var(--dark);
    text-align: center;
    width: 50px;
  }

  input:focus {
    outline: none;
  }

  .bet-button {
    font-size: 30px;
    background-color: var(--dark);
  }

  .bet-button:hover {
    background-color: var(--clear);
    border: 2px solid var(--dark);
    color: var(--dark);
  }

  .next-guesser {
    grid-column: span 2;
  }

  ::v-deep span {
    font-weight: bold;
    color: var(--accent);
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    display: none;
  }
</style>
