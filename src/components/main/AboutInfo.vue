<script lang="ts">
  export default {
    
  }
</script>

<template>
  <img class="curve-about-transition" src="../../assets/images/curve-about-transition.svg" alt="Curve"/>
  <img class="curve-about" src="../../assets/images/curve-about.svg" alt="Curve"/>
  <div class="about-wrapper">
    <div id="about" class="about">
      <h2>About</h2>
      <p>
        &emsp;&emsp;&emsp; Odds and evens is a simple game of chance and hand game, 
        involving two people simultaneously revealing a number 
        of fingers and winning or losing depending on whether they 
        are odd or even, or alternatively involving one person 
        picking up coins or other small objects and hiding them 
        in their closed hand, while another player guesses whether 
        they have an odd or even number. The game may be used to make 
        a decision or played for fun. The finger game is also known 
        as swords, choosies, pick, odds-on poke, or bucking up.[1] 
        This zero-sum game, a variation of the ancient morra and 
        par-impar,[2] is played in Europe, the US, and in Brazil, 
        especially among children.
      </p>
      <a
        href="https://en.wikipedia.org/wiki/Odds_and_evens_(hand_game)"
        target="_blank">
        <img src="../../assets/images/outlink-accent.svg" alt="Outlink icon"/>
        Source
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/Variables.css';

  .curve-about-transition {
    position: relative;
    top: 70%;
    z-index: 4;
  }

  .curve-about {
    z-index: 5;
  }

  .about-wrapper {
    display: grid;
    justify-content: center;
    width: 100%;
    background-color: var(--med-bg);
  }

  .about {
    display: grid;
    row-gap: 40px;
    justify-content: center;
    padding-bottom: 80px;
    max-width: var(--max-width);

    h2,
    a {
      text-align: center;
      color: var(--accent);
    }

    a {
      display: grid;
      grid: auto / auto auto;
      column-gap: 5px;
      align-items: center;
      width: min-content;
      font-size: 24px;
      justify-self: center;

      img {
        width: 24px;
      }
    }

    p {
      width: 50vw;
      color: var(--dark);
    }
  }
</style>
