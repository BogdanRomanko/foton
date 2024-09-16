<script setup>
import { onMounted } from 'vue'; 

onMounted(() => {
  
})

const langingStore = useLangingStore()
const userStore = useUserStore()

  function hamburgerClickEvent() {
    const hamburgerButton = document.getElementById("header-nav-hamburger-icon")
    if (hamburgerButton.classList.contains("fa-bars")) {
      //activation
      hamburgerButton.classList.remove("fa-bars");
      hamburgerButton.classList.add("fa-times");

      document
        .getElementsByClassName("header-nav")[0]
        .classList.add("header-nav-activation");
    } else {
      //deactivation
      hamburgerButton.classList.add("fa-bars");
      hamburgerButton.classList.remove("fa-times");

      document
        .getElementsByClassName("header-nav")[0]
        .classList.remove("header-nav-activation");
    }
  }

</script>

<template>
  <link rel="stylesheet" 
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <header class="header">
    <div class="header-top">
      <div class="header-logo">
        <img src="/s_5a5c800b0f01.jpeg" alt="Фотон" class="header-logo" />
        <span>{{ langingStore.data.header?.title.content }}</span>
      </div>

      <div class="header-advertisement">
        <span>{{ langingStore.data.header?.advertisement.content }}</span>
      </div>

      <div class="header-contacs-info">
        <a href="#">{{ langingStore.data.header?.info.phone1.content }}</a>
        <a href="#">{{ langingStore.data.header?.info.phone2.content }}</a>
        <a href="#">{{ langingStore.data.header?.info.email.content }}</a>
      </div>
    </div>
    <div class="header-nav">
      <span class="header-nav-hamburger" @click="hamburgerClickEvent">
        <i
          id="header-nav-hamburger-icon"
          ref="hamburgerButton"
          class="fa fa-bars"
          aria-hidden="true"
        ></i>
      </span>
      <ul>
        <li><NuxtLink to="/">Главная</NuxtLink></li>
        <li><NuxtLink to="/products">Продукция</NuxtLink></li>
        <li><NuxtLink to="/documents">Документы</NuxtLink></li>
        <li><NuxtLink to="/about">О нас</NuxtLink></li>
        <li v-if="userStore.isAdmin">
          <NuxtLink to="/admin">Панель администратора</NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;

  &-top {
    width: 95vw;
    max-width: 1200px;
    height: 100px;
    margin: 5px auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    overflow: hidden;
  }

  &-logo {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: auto;

    img {
      height: 100%;
      width: auto;
    }

    span {
      line-clamp: 2;
      text-wrap: wrap;
      justify-content: center;
      margin: auto 10px;

      font-size: 20px;
    }
  }

  &-advertisement {
    line-clamp: 2;
    text-wrap: wrap;
    width: 300px;
    justify-content: center;
    margin: auto 10px;
    text-align: center;
    font-size: 20px;
  }

  &-contacs-info {
    display: flex;
    flex-direction: column;
    margin: auto 0px;
    gap: 5px;

    a,
    a:link,
    a:visited {
      text-decoration: none;
      font-size: 16px;
      color: black;
    }

    a:hover {
      color: rgb(0, 21, 138);
      font-size: 20px;
    }
  }

  &-nav {
    width: 100vw;
    height: 50px;
    background-color: rgb(231, 231, 231);

    &-hamburger {
      display: none;
    }

    ul {
      height: 50px;
      vertical-align: middle;
      list-style-type: none;
      margin: auto 0px;
      padding: 0px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      text-align: center;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      gap: 20px;

      li {
        a,
        a:link,
        a:visited {
          text-decoration: none;
          font-size: 18px;
          color: rgb(0, 0, 0);
        }
        a:hover {
          color: rgb(0, 21, 138);
          font-size: 22px;
        }
      }
    }
  }
}

@media only screen and (max-width: 720px) {
  .header {
    display: flex;
    flex-direction: column;

    &-top {
      display: grid;
      grid-template-columns: 50px 1fr;
      width: 95vw;
      height: 160px;
      margin: 5px auto;

      overflow: hidden;
    }

    &-logo {
      display: flex;
      flex-direction: row;
      height: 100%;
      width: auto;

      grid-column-start: 1;
      grid-column-end: 2;

      grid-row-start: 1;
      grid-row-end: 1;

      img {
        height: 50px;
        max-width: 50px;
      }

      span {
        display: none;
      }
    }

    &-advertisement {
      line-clamp: 2;
      text-wrap: wrap;
      width: 95%;
      justify-content: center;
      margin: auto 10px;
      text-align: center;
      font-size: 20px;

      grid-column-start: 1;
      grid-column-end: 3;

      grid-row-start: 2;
      grid-row-end: 2;
    }

    &-contacs-info {
      grid-row-start: 1;
      grid-row-end: 1;

      grid-column-start: 2;
      grid-column-end: 3;

      display: flex;
      flex-direction: column;
      margin: auto 0px;
      gap: 5px;

      text-align: right;
    }

    &-nav {
      width: 100vw;
      height: 50px;
      background-color: rgb(231, 231, 231);

      &-hamburger {
        display: block;
        text-align: right;
        margin: 5px 20px;
        font-size: 30px;
      }

      ul {
        display: none;
      }

      &-activation {
        ul {
          display: flex;
          flex-direction: column;
          height: auto;
        }
        height: auto;
        padding-bottom: 10px;
      }
    }
  }
}

@media only screen and (max-width: 450px) {
  .header {
    display: flex;
    flex-direction: column;

    &-top {
      display: grid;
      grid-template-columns: 50px 1fr;
      width: 95vw;
      height: 175px;
      margin: 5px auto;

      overflow: hidden;
    }
  }
}
</style>