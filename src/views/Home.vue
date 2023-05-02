<script setup></script>

<template>
  <div class="container-fluid loco">
    <div class="hero-img">
      <h1 class="hero-img__slogan">"A place, a culture"</h1>
      <button class="hero-img__button">Book a table</button>
    </div>
    <div class="places">
      <h1 class="places__title">- Find where we are!</h1>
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
    background-image: url("../../public/heroimg.jpg");
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
          color: red;

          &:hover {
            background-color: red;
            color: white;
          }
        }
      }

      .madrid {
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("../../public/madrid.jpg");
      }

      .paris {
        background-size: 100%;
        background-repeat: no-repeat;
        background-image: url("../../public/paris.jpg");
      }

      .syndey {
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("../../public/syndey.jpg");
      }
    }
  }
}

/* .loco::-webkit-scrollbar {
  display: none;
} */
</style>
