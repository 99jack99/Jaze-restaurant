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
        <div class="col-sm-8 col-lg-4 col-xxl-4 p-1">
          <div class="place-card">
            <div class="place-card__icon">x</div>
            <h3 class="place-card__title">Madrid</h3>
            <div class="place-card__description">hahahahah</div>
            <button>READ MORE</button>
          </div>
        </div>
        <div class="col-sm-8 col-lg-4 col-xxl-4 p-1">
          <div class="place-card">
            <div class="place-card__icon">x</div>
            <h3 class="place-card__title">Madrid</h3>
            <div class="place-card__description">hahahahah</div>
            <button>READ MORE</button>
          </div>
        </div>
        <div class="col-sm-8 col-lg-4 col-xxl-4 p-1">
          <div class="place-card">
            <div class="place-card__icon">x</div>
            <h3 class="place-card__title">Madrid</h3>
            <div class="place-card__description">hahahahah</div>
            <button>READ MORE</button>
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
  height: 1000px;

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
    background-color: lightcoral;

    &__title {
      padding: 20px;
    }

    &__cards {
      margin: 0;
      background-color: red;

      /* display: flex;
      align-items: center;
      justify-content: center; */
      .place-card {
        background-color: lightcyan;
        border-radius: 4px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

/* .loco::-webkit-scrollbar {
  display: none;
} */
</style>
