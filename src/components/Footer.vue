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
        <h4 class="footer__block__title">Socials</h4>
        <p class="footer__block__item">Instagram</p>
        <p class="footer__block__item">Twitter</p>
        <p class="footer__block__item">Facebook</p>
      </div>
    </div>
    <div class="col-sm-12 col-lg-6 col-xxl-8">HOLA</div>
    <div class="col-12">Created by Jackson Almeida</div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  padding-top: 20px;
  background-color: #222725;

  &__block {
    background-color: lightcyan;

    &__title {
      margin-bottom: 10px;
      color: yellow;
    }

    &__item {
      margin-block: 10px;
      margin-left: 10px;
      background-color: khaki;
    }
  }
}
</style>
