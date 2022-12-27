<script lang="ts">
import NavigationBar from './components/main/NavigationBar.vue'
import GameField from './components/game/GameField.vue'
import AboutInfo from './components/main/AboutInfo.vue'
import FooterInfo from './components/main/FooterInfo.vue'

export default {
  components: {
    NavigationBar,
    GameField,
    AboutInfo,
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
    background-color: hsl(35, 100%, 92%);
  }

  body {
    display: grid;
  }

  #app {
    width: 100%;
    max-width: var(--max-width);
    justify-self: center;
  }

  main {
    width: 100%;
    justify-content: center;
  }

  a {
    text-decoration: none;
    font-weight: bold;
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
    border: none;
    border-radius: 8px;
    padding: 5px 20px;
    width: min-content;
    height: min-content;
  }

</style>
