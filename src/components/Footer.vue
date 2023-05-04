<script setup></script>

<template>
  <div class="footer container-fluid row">
    <div class="col-sm-12 col-lg-6 col-xxl-2">
      <div class="footer__block">
        <h4 class="footer__block__title">Information</h4>
        <p class="footer__block__item">Tlf: 666 666 666</p>
        <p class="footer__block__item">C/ Alcala, 69</p>
        <p class="footer__block__item">09:00 - 20:00</p>
      </div>
    </div>
    <div class="col-sm-12 col-lg-6 col-xxl-2">
      <div class="footer__block">
        <h4 class="footer__block__title">Pages</h4>
        <p class="footer__block__item">Menu</p>
        <p class="footer__block__item">Contact</p>
      </div>
    </div>
    <div class="col-sm-12 col-lg-6 col-xxl-2">
      <div class="footer__block">
        <h4 class="footer__block__title">Socials</h4>
        <p class="footer__block__item">Instagram</p>
        <p class="footer__block__item">Twitter</p>
        <p class="footer__block__item">Facebook</p>
      </div>
    </div>
    <div class="col-sm-12 col-lg-6 col-xxl-3 map">
      <div class="footer__block">
        <h4 class="footer__block__title">Find us here</h4>
        <iframe
          class="footer__block__item"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.639506610319!2d-0.353070687614885!3d39.45487921349872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048e9d19b4381%3A0x62eb4407a5ebf894!2sCiudad%20de%20las%20Artes%20y%20las%20Ciencias!5e0!3m2!1ses!2ses!4v1683193411723!5m2!1ses!2ses"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div class="col-12 creator">Created by Jackson Almeida</div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.footer {
  padding-top: 20px;
  background-color: $main-black;

  display: flex;

  justify-content: center;

  &__block {
    margin-bottom: 30px;
    &__title {
      margin-bottom: 10px;
      color: $main-red;
    }

    &__item {
      margin-block: 5px;
      color: $white;
    }
  }

  /* .map {
    display: flex;
    align-items: center;
    justify-content: center;
  } */

  .creator {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-block: 20px;
    color: yellow;
  }
}
</style>
