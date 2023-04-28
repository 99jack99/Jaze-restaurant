<script setup></script>

<template>
  <div class="header">
    <div class="header__items">
      <img class="logo" src="../../public/jaze.png" alt="" />
      <span>Jaze</span>
    </div>
    <div class="header__items">
      <routerLink class="header__items__links" to="/">Menu</routerLink>
      <routerLink class="header__items__links" to="/">Contact</routerLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: rgb(0, 0, 0);
  color: white;
  height: 8vh;
  width: 100vw;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &__items {
    margin-inline: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .logo {
      height: 75px;
      width: 75px;
    }

    &__links {
      text-decoration: none;
      color: white;
    }
  }
}
</style>
