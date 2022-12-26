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
        href=""
        target="_blank">
        Rules
      </a>
      <a
        href="https://github.com/terrianx/holjjang"
        target="_blank">
        Github
      </a>
      <a
        href="https://terrianx.netlify.app/"
        target="_blank">
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
    grid: auto auto / auto;
    row-gap: 80px;
    justify-content: center;
    justify-items: center;

    p {
      color: var(--dark);
      font-size: 16px;
    }

    a {
      color: var(--dark);
      font-size: 24px;
    }
  }

  .links {
    display: grid;
    grid: auto / repeat(6, auto);
    column-gap: 60px;
  }

  .copyright {
    grid-column: span 6;
  }
</style>
