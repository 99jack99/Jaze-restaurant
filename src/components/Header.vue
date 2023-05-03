<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg header">
    <div class="container-fluid">
      <img class="navbar-brand logo" src="../assets/imgs/icons/jaze-logo.png" />
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
@import "../assets/styles/index.scss";

.header {
  background-color: $main-black;
  width: 100%;

  &__collapse-button {
    background-color: $white;
    border-radius: 10px;
  }

  .logo {
    height: 75px;
    width: 75px;
  }

  .navbar-toggler-icon {
    background-image: url("../assets/imgs/icons/menu-toggler.svg");
    color: red;
  }

  &__items {
    justify-content: flex-end;

    .nav-item {
      margin-inline: 10px;

      .nav-link {
        font-size: 15px;
        font-weight: 500;
        font-family: myFuente;
        color: $white;
        padding: 5px 10px;

        &:hover {
          color: $main-red;
        }
      }
    }

    .nav-item:last-child {
      border: 2px solid $main-red;
      border-radius: 4px;
    }
  }
}

@media (max-width: 992px) {
  .header {
    .navbar-nav {
      .nav-item {
        display: flex;
        align-items: center;
        justify-content: center;
        .nav-link {
          margin-block: 10px;
          border-bottom: 1px solid $white;
        }
      }

      .nav-item:last-child {
        border: none;

        .nav-link {
          border: 2px solid $main-red;
          border-radius: 4px;
          width: fit-content;
          padding: 5px 10px;
        }
      }
    }
  }
}
</style>
