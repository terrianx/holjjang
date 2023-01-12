<script lang="ts">
  export default {
    
  }
</script>

<template>
  <div class="about-wrapper">
    <div id="about" class="about">
      <h2>About</h2>
      <p>
        Holjjang is a two player marble game and a part of Guseulchigi,
        a marble game played in Korea. Two players compete to obtain all of 
        their opponents' marbles playing various games. Games vary by region,
        and some popular ones are Bomdeulgi (throwing marbles into holes), 
        Alkkagi (throwing marbles to hit other marbles), Byeokchigi (using a
        wall to play), and Holjjang (odds and evens).
        <br>
        <br>
        To play Guseulchigi, children would make marbles using clay, or
        play with small objects such as acorns, pebbles, etc. The game began
        to be played nationwide after ceramic and glass leftovers from manufacturers
        were used for marbles. Glass production increased especially during
        the Japanese Occupation.
      </p>
      <a
        href="https://folkency.nfm.go.kr/en/topic/detail/1475"
        target="_blank">
        <img src="../../assets/images/outlink-accent.svg" alt="Outlink icon"/>
        Source
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/Variables.css';

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
