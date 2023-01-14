<script lang="ts">
  export default {
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
      <a href="#rules"><button>Rules</button></a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '../../assets/Variables.css';

  nav {
    position: absolute;
    display: grid;
    grid: 80px / 1fr 1fr;
    align-items: center;
    width: 100%;
    max-width: var(--max-width);
    padding: 0 40px;

    h1 {
      color: var(--accent);
      font-family: 'Kalam', 'cursive';
      font-size: 48px;
      transition: 200ms;
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

  @media only screen and (max-width: 600px) {
    nav h1 {
      font-size: 40px;
      transition: 200ms;
    }
  }

  @media only screen and (max-width: 500px) {
    nav {
      padding: 0 10px;

      h1 {
        font-size: 36px;
      }
    }

    .nav-left {
      column-gap: 2px;

      img {
        width: 16px;
      }
    }

    .nav-right {
      column-gap: 10px;

      a,
      button {
        font-size: 20px;
      }
    }
  }

</style>
