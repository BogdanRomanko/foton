<script setup lang="ts">
const langingStore = useLangingStore()
</script>

<template>
  <footer class="footer">
    <div class="footer-title">
      <p>Контактная информация</p>
    </div>
    <div class="footer-info">
      <div class="footer-info-column">
        <div class="footer-info-column__item">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <span>{{ langingStore.data.header?.info.phone1.content }}</span>
        </div>
        <div class="footer-info-column__item">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <span>{{ langingStore.data.header?.info.email.content }}</span>
        </div>
        <div class="footer-info-column__item">
          <i class="fa fa-map" aria-hidden="true"></i>
          <span>{{ langingStore.data.footer?.adress.min.content }}</span>
        </div>
      </div>
      <div class="footer-info-column">
        <div class="footer-info-column__item">
          <p>ИНН {{ langingStore.data.footer?.info.inn.content }}</p>
        </div>
        <div class="footer-info-column__item">
          <p>ОГРН {{ langingStore.data.footer?.info.ogrn.content }}</p>
        </div>
        <div class="footer-info-column__item">
          <p>КПП {{ langingStore.data.footer?.info.kpp.content }}</p>
        </div>
      </div>
    </div>
    <div class="footer-license">
      <p>Все права защищены © 2024 ООО НПП "Фотон".</p>
      UIcons by <a href="https://www.flaticon.com/uicons">Flaticon</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: rgb(194, 194, 194);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: #000000;
  text-align: center;

  p {
    margin: 10px;
    padding: 0;
  }

  &-title {
  }

  &-info {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;

    &-column {
      margin: 10px;
      &__item {
        text-align: left;

        p {
          margin: 0;
          padding: 0;
        }
      }
    }
  }

  &-license {
  }
}
</style>
