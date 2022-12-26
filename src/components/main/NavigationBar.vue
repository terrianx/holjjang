<script lang="ts">
  export default {
    data() {
      return {
        isRuleShow: false
      }
    },
    methods: {
      showRules() {

      }
    }
  }
</script>

<template>
  <nav>
    <div class="nav-left">
      <img src="../../assets/images/jazz-left.svg" alt="Navigation jazz left element"/>
      <h1>Holjjang</h1>
      <img src="../../assets/images/jazz-right.svg" alt="Navigation jazz right element"/>
    </div>
    <div class="nav-right">
      <a href="#about">About</a>
      <button @click="showRules">Rules</button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '../../assets/Variables.css';

  nav {
    display: grid;
    grid: 80px / 1fr 1fr;
    align-items: center;
    width: 100%;
    padding: 0 40px;

    h1 {
      color: var(--accent);
      font-family: 'Kalam', 'cursive';
      font-size: 36px;
    }

    a {
      color: var(--dark);
      font-size: 24px;
    }

    button {
      font-size: 24px;
    }
  }

  .nav-left {
    display: grid;
    grid: 1fr / repeat(3, min-content);
    column-gap: 5px;
    align-items: center;
    justify-self: left;

    img {
      width: 20px;
    }
  }

  .nav-right {
    display: grid;
    grid: 1fr / 1fr 1fr;
    column-gap: 20px;
    align-items: center;
    justify-items: center;
    justify-self: right;
  }

</style>
