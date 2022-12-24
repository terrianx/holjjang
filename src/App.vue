<script lang="ts">
import NavigationBar from './components/NavigationBar.vue'
import GameField from './components/GameField.vue'
import AboutInfo from './components/AboutInfo.vue'
import FooterInfo from './components/FooterInfo.vue'

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
  $accent: hsl(0, 100%, 68%);

  main {
    display: grid;
    justify-content: center;
    row-gap: 50px;
  }

  a,
  a:visited {
    color: $accent;
  }
</style>
