<template>
  <div>
    <a href="#">
      <img src="../../assets/images/up-arrow.svg" alt="Up icon" />
      Back to top
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/Variables.css';

  div {
    display: grid;
    width: 100%;
    background-color: var(--med-bg);
    justify-content: center;
    padding-bottom: 200px;
    margin-bottom: -20%;
  }

  a {
    display: grid;
    grid: auto / auto auto;
    width: min-content;
    column-gap: 5px;
    white-space: nowrap;
    align-items: center;
    color: var(--dark);
    font-size: 24px;
    margin: 120px 0;

    img {
      width: 24px;
    }
  }

  @media only screen and (max-width: 500px) {
    a {
      margin: 60px 0;
      font-size: 20px;
    }
  }
</style>
