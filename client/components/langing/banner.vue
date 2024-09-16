<script setup lang="ts"></script>

<template>
  <div class="banner">
    <img
      src="/images/technology-PCB-electronics-circuit-boards-screenshot-gadget-personal-computer-hardware-electronic-device-microcontroller-motherboard-electronic-engineering-169764.jpg"
      alt="Баннер"
    />
    <div class="banner-info">
      <span>Наши возможности:</span>
      <ul>
        <li>Поставка электронных компонентов</li>
        <li>Разработка уникального программно-аппаратного комплекса</li>
        <li>Внедрение компллекса на предприятие</li>
        <li>Разработка программ и приложений</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  width: 100vw;
  max-width: 100vw;
  height: 400px;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  &-info {
    background-color: rgba(230, 230, 230, 0.839);
    color: black;
    padding: 30px;
    position: relative;
    top: -300px;
    left: 20px;
    width: 450px;
    font-size: 20px;
    text-align: center;

    span {
      text-transform: uppercase;
    }

    ul {
      text-align: left;
      list-style-type: "✔ ";
    }
  }
}

@media only screen and (max-width: 720px) {
  .banner {
    width: 100vw;
    max-width: 100%;
    height: 250px;

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }

    &-info {
      top: -240px;
      left: 0px;
      width: 95%;
    }
  }
}

@media only screen and (max-width: 450px) {
  .banner {
    width: 100vw;
    max-width: 100%;
    height: 450px;

    img {
      width: 100%;
      height: 450px;
      object-fit: cover;
    }

    &-info {
      top: -440px;
      left: 0px;
      width: 95%;
    }
  }
}

@media only screen and (max-width: 300px) {
  .banner {
    width: 100vw;
    max-width: 100%;
    height: 450px;

    img {
      width: 100%;
      height: 600px;
      object-fit: cover;
    }

    &-info {
      top: -590px;
      left: 0px;
      width: 95%;
    }
  }
}
</style>
