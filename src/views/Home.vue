<script setup></script>

<template>
  <div class="container-fluid loco">
    <div class="hero-img">
      <h1 class="hero-img__slogan">"A place, a culture"</h1>
      <button class="hero-img__button">Book a table</button>
    </div>
    <div class="places">
      <h1 class="places__title">
        Do you want to visit us at others countries?
      </h1>
      <div class="places__cards container-fluid row gx-0">
        <div class="mx-auto col-sm-8 col-lg-6 col-xxl-4 p-3">
          <div class="place-card madrid">
            <h3 class="place-card__title">Madrid</h3>
            <div class="place-card__description">hahahahah</div>
            <button class="place-card__more">READ MORE</button>
          </div>
        </div>
        <div class="mx-auto col-sm-8 col-lg-6 col-xxl-4 p-3">
          <div class="place-card paris">
            <h3 class="place-card__title">Paris</h3>
            <div class="place-card__description">hahahahah</div>
            <button class="place-card__more">READ MORE</button>
          </div>
        </div>
        <div class="mx-auto col-sm-8 col-lg-6 col-xxl-4 p-3">
          <div class="place-card syndey">
            <h3 class="place-card__title">Syndey</h3>
            <div class="place-card__description">hahahahah</div>
            <button class="place-card__more">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loco {
  background-color: black;
  padding: 0;

  .hero-img {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/imgs/hero-img.jpg");
    height: 700px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__slogan {
      color: white;
      text-shadow: 1px 1px red;
      margin-bottom: 50px;
    }

    &__button {
      padding: 10px 20px;
      border-radius: 5px;
      border-style: none;

      &:hover {
        background-color: red;
      }
    }
  }

  .places {
    /* background-color: lightcoral; */

    &__title {
      padding: 20px;
      color: #e8edeb;
    }

    &__cards {
      margin: 0;

      /* display: flex;
      align-items: center;
      justify-content: center; */
      .place-card {
        border: 2px solid red;

        background-color: transparent;
        color: red;

        border-radius: 4px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &__title {
          margin-block: 20px;
        }

        &__more {
          border-style: none;
          padding: 5px 10px;
          border-radius: 4px;
          margin-block: 20px;

          background-color: transparent;
          border: 2px solid red;
          color: #f8dee0;

          &:hover {
            background-color: #320b0e;
            color: white;
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
