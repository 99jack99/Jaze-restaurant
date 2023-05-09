<script setup></script>

<template>
  <div class="container-fluid home-page">
    <div class="hero-img">
      <h1 class="hero-img__name">Jaze Restaurant</h1>
      <h1 class="hero-img__slogan">"A place, a culture"</h1>
      <button class="hero-img__reserve-btn" v-on:click="hola()">
        Reserve table
      </button>
    </div>
    <div class="places">
      <h1 class="places__title">
        Do you want to visit us at others countries?
      </h1>
      <div class="places__cards container-fluid row gx-0">
        <div class="mx-auto col-sm-8 col-lg-6 col-xxl-4 p-3">
          <div class="place-card madrid">
            <h3 class="place-card__title">Madrid</h3>
            <button class="place-card__more">READ MORE</button>
          </div>
        </div>
        <div class="mx-auto col-sm-8 col-lg-6 col-xxl-4 p-3">
          <div class="place-card paris">
            <h3 class="place-card__title">Paris</h3>
            <button class="place-card__more">READ MORE</button>
          </div>
        </div>
        <div class="mx-auto col-sm-8 col-lg-6 col-xxl-4 p-3">
          <div class="place-card syndey">
            <h3 class="place-card__title">Syndey</h3>
            <button class="place-card__more">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";

.home-page {
  background-color: black;
  padding: 0;

  .hero-img {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/imgs/hero-img.jpg");
    background-position: center;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__name {
      font-family: $normal-title;
      color: $main-red;
      text-shadow: 2px 2px 2px $light-black;
    }

    &__slogan {
      color: $main-red;
      text-shadow: 2px 2px $light-black;
      margin-bottom: 50px;
      font-family: $big-title-font;
      font-size: 100px;
      margin: 20px;
    }

    &__reserve-btn {
      padding: 10px 20px;
      border-radius: 5px;
      border-style: none;
      background-color: $main-red;
      color: $main-black;

      &:hover {
        background-color: $light-black;
        color: $main-red;
      }
    }
  }

  .places {
    /* background-color: lightcoral; */
    padding-bottom: 40px;

    &__title {
      padding: 20px;
      color: #e8edeb;
      margin: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__cards {
      margin: 0;
      .place-card {
        /*  border: 3px solid $main-red; */

        background-color: transparent;

        border-radius: 4px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &__title {
          margin-block: 20px;
          color: $main-red;
          text-shadow: 2px 2px 2px $light-black;
        }

        &__more {
          border-style: none;
          padding: 5px 10px;
          border-radius: 4px;
          margin-block: 20px;

          border: 2px solid $main-red;
          color: $light-black;
          background-color: rgba(255, 255, 255, 0.288);

          &:hover {
            color: white;
            background-color: $main-red;
          }
        }
      }

      .madrid {
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("../assets/imgs/madrid.jpg");
      }

      .paris {
        background-size: 100%;
        background-repeat: no-repeat;
        background-image: url("../assets/imgs/paris.jpg");
      }

      .syndey {
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("../assets/imgs/syndey.jpg");
      }
    }
  }
}
</style>
