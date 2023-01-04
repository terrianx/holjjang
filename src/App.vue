<script lang="ts">
import NavigationBar from './components/main/NavigationBar.vue';
import GameField from './components/game/GameField.vue';
import AboutInfo from './components/main/AboutInfo.vue';
import BackToTop from './components/main/BackToTop.vue';
import FooterInfo from './components/main/FooterInfo.vue';

export default {
  components: {
    NavigationBar,
    GameField,
    AboutInfo,
    BackToTop,
    FooterInfo
  }
}
</script>

<template>
  <header>
    <NavigationBar />
  </header>
  <main>
    <GameField />
    <AboutInfo />
    <BackToTop />
  </main>
  <FooterInfo />
</template>

<style lang="scss">
@import './assets/Variables.css';

  * {
    box-sizing: border-box;

    padding: 0;
    margin: 0;

    font-family: 'Inter', sans-serif;

    scroll-behavior: smooth;
  }

  html {
    -webkit-text-size-adjust: 100%;
    background-color: var(--bg);
  }

  #app {
    display: grid;
    grid: repeat(3, auto) / auto;
    width: 100%;
    justify-items: center;
  }

  header {
    display: grid;
    justify-items: center;
  }

  main {
    display: grid;
    width: 100%;
    justify-items: center;
  }

  a {
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
    text-decoration-thickness: 3px;
  }

  h2 {
    font-size: 48px;
  }

  h3 {
    font-size: 36px;
  }

  p {
    font-size: 24px;
  }

  button {
    background-color: var(--accent);
    font-weight: bold;
    color: white;
    border: 2px solid var(--clear);
    border-radius: 8px;
    padding: 5px 20px;
    width: min-content;
    height: min-content;
    white-space: nowrap;
    transition: 200ms;
  }

  button:hover {
    cursor: pointer;
    background-color: var(--clear);
    color: var(--accent);
    border: 2px solid var(--accent);
    transition: 200ms;
  }

  button:active {
    filter: brightness(1.5);
    transition: 0;
  }
</style>
