<script lang="ts">
  export default {
    
  }
</script>

<template>
  <footer>
    <div class="links">
      <a
        href="#">
        Holjjang
      </a>
      <a
        href="#">
        Play
      </a>
      <a
        href="#about">
        About
      </a>
      <a
        href="#">
        Rules
      </a>
      <a
        href="https://github.com/terrianx/holjjang"
        target="_blank"
        class="icon-link">
        <img src="../../assets/images/outlink-dark.svg" alt="Outlink icon"/>
        Github
      </a>
      <a
        href="https://terrianx.netlify.app/"
        target="_blank"
        class="icon-link">
        <img src="../../assets/images/outlink-dark.svg" alt="Outlink icon"/>
        Terrian Xiao
      </a>
    </div>
    <p class="copyright">© Terrian Xiao 2023. All rights reserved.</p>
  </footer>
</template>

<style lang="scss" scoped>
@import '../../assets/Variables.css';

  footer {
    padding: 80px 0 40px 0;
    display: grid;
    grid: auto auto / 1fr;
    row-gap: 80px;
    justify-items: center;
    justify-self: center;
    background-color: var(--sat-bg);
    width: 100%;

    p {
      color: var(--dark);
      font-size: 16px;
    }

    a {
      color: var(--dark);
      font-size: 24px;
    }

    img {
      width: 24px;
    }
  }

  .links {
    display: grid;
    grid: auto / repeat(6, auto);
    column-gap: 60px;
    max-width: var(--max-width);
  }

  .icon-link {
    display: grid;
    grid: auto / auto auto;
    column-gap: 5px;
    align-items: center;
  }

  .copyright {
    grid-column: span 6;
  }
</style>
