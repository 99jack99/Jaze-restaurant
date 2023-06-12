<script setup></script>

<template>
  <div class="container-fluid contact-page">
    <h1 class="contact-title">Want to contact us?</h1>
    <h2 class="contact-title-secondary">Write us down!</h2>

    <div class="contact-page__form">
      <div class="input-group contact-page__form__box">
        <span class="input-group-text" id="basic-addon1">Name</span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div class="input-group contact-page__form__box">
        <input
          type="text"
          class="form-control"
          placeholder="useremail"
          aria-label="Username"
        />
        <span class="input-group-text">@</span>
        <input
          type="text"
          class="form-control"
          placeholder="gmail.com"
          aria-label="Server"
        />
      </div>

      <div class="input-group contact-page__form__box">
        <span class="input-group-text">Asunto</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
      <button>SEND</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";

.contact-page {
  padding: 10%;
  background-color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .contact-title {
    font-family: $normal-title;
    color: $main-red;
    text-shadow: 2px 2px 2px $light-black;
  }

  .contact-title-secondary {
    font-family: $normal-title;
    color: $white;
    text-shadow: 2px 2px 2px $light-black;
  }

  &__form {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__box {
      margin: 10px;
    }
  }
}
</style>
