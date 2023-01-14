<script lang="ts">
  export default {
    
  }
</script>

<template>
  <img class="curve-main-transition" src="../../assets/images/curve-main-transition.svg" alt="Curve"/>
  <img class="curve-main" src="../../assets/images/curve-main.svg" alt="Curve"/>
  <div class="rules-wrapper">
    <div id="rules" class="rules">
      <h2>Rules</h2>
      <p>
        The objective of the game is to win your opponent's marbles.
        Within each turn you and your opponent bet a number of marbles.
        These are the amount of marbles you are willing to risk and win 
        or lose that turn. The minimum bet between both players is the 
        amount won or lost that turn. The next step is for the guesser to guess 
        whether their opponent bet an even or odd amount of marbles. 
        Players take turns guessing until someone has lost all their marbles.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/Variables.css';

  .curve-main-transition {
    position: relative;
    top: 70%;
    z-index: 4;
  }

  .curve-main {
    z-index: 5;
  }

  .rules-wrapper {
    display: grid;
    justify-content: center;
    width: 100%;
    background-color: var(--med-bg);
  }

  .rules {
    display: grid;
    row-gap: 40px;
    justify-content: center;
    padding-bottom: 160px;
    max-width: var(--max-width);

    h2 {
      text-align: center;
      color: var(--accent);
    }

    p {
      width: 800px;
      color: var(--dark);
      transition: 200ms;
    }
  }

  @media only screen and (max-width: 1000px) {
    .rules p {
      width: 600px;
      transition: 200ms;
    }
  }

  @media only screen and (max-width: 700px) {
    .rules p {
      width: 400px;
      transition: 200ms;
    }
  }

  @media only screen and (max-width: 500px) {
    .rules {
      h2 {
        font-size: 36px;
      }

      p {
        font-size: 20px;
        width: 350px;
        transition: 200ms;
      }
    }
  }
</style>
