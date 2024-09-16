<script setup lang="ts">
const langingStore = useLangingStore()
</script>

<template>
  <div class="content-map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d846.3984263348624!2d38.801468678527726!3d48.452860645689235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1712642351371!5m2!1sen!2s"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div class="content-map-info">
      <h3>Как нас найти?</h3>
      <p>
        {{ langingStore.data.footer?.adress.full.content }}
      </p>
      <p>
        Телефон:
        <a href="#">{{ langingStore.data.header?.info.phone1.content }}</a>
      </p>
      <p>
        Почта:
        <a href="#">{{ langingStore.data.header?.info.email.content }}</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .content-map-info{
    h3{
      font-weight: bold;
      font-size: 22px;
    }
  }
</style>
