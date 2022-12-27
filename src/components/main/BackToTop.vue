<template>
  <a href="#">
    <img src="../../assets/images/up-arrow.svg" alt="Up icon" />
    Back to top
  </a>
</template>

<style lang="scss" scoped>
@import '../../assets/Variables.css';

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
</style>
