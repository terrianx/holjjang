<script lang="ts">
  export default {
    
  }
</script>

<template>
  <img class="curve-footer-transition" src="../../assets/images/curve-footer-transition.svg" alt="curve"/>
  <img class="curve-footer" src="../../assets/images/curve-footer.svg" alt="curve"/>
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
        href="#rules">
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
        My Site
      </a>
    </div>
    <p class="copyright">© Terrian Xiao 2023. All rights reserved.</p>
  </footer>
</template>

<style lang="scss" scoped>
@import '../../assets/Variables.css';

  .curve-footer-transition {
    position: relative;
    top: 70%;
    z-index: 4;
  }

  .curve-footer {
    position: relative;
    z-index: 5;
  }

  footer {
    padding: 0 0 40px 0;
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
      justify-self: left;
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
    transition: 200ms;
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

  @media only screen and (max-width: 1000px) {
    .links {
      column-gap: 30px;
      transition: 200ms;
    }
  }

  @media only screen and (max-width: 800px) {
    .links {
      grid: repeat(3, auto) / 1fr 1fr;
      row-gap: 20px;
    }
  }
</style>
