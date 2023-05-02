<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg header">
    <div class="container-fluid">
      <img class="navbar-brand logo" src="../../public/jaze.png" />
      <button
        class="navbar-toggler header__collapse-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse header__items"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Menu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.header {
  background-color: black;
  width: 100%;

  &__collapse-button {
    background-color: grey;
    color: palevioletred;
  }

  .logo {
    height: 75px;
    width: 75px;
  }

  &__items {
    justify-content: flex-end;

    .nav-link {
      color: white;
    }
  }
}
</style>
