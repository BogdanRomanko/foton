<script setup lang="ts"></script>

<template>
  <div class="content">
    <LangingContentDirection />
    <LangingContentAbout />
    <LangingContentMap />
  </div>
</template>

<style lang="scss">
.content {
  width: 90vw;
  max-width: 1200px;
  margin: 0px auto;
  flex-grow: 1;
  overflow: hidden;

  &-since-directions {
    text-align: center;

    &-cards {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      text-align: center;
      justify-content: center;

      &-element {
        width: 150px;
        height: auto;
        padding: 10px;
        text-align: center;
        border-radius: 10px;
        margin: 10px;

        img {
          width: 90%;
        }
      }
    }
  }

  &-about {
    background-color: #7f88ff1f;
    padding: 20px 40px;
    border-radius: 20px;

    h3 {
      text-align: center;
    }

    &-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;

      &-text {
      }

      &-achieve {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        text-align: center;
        justify-content: center;

        &-element {
          height: 70px;
          width: 250px;
          display: flex;
          flex-direction: row;
          gap: 10px;
          vertical-align: middle;

          img {
            height: 50px;
            width: 50px;
            object-fit: cover;
          }
          span {
            text-wrap: wrap;
            font-size: 16px;
            width: 100%;
          }
        }
      }
    }
  }

  &-map {
    margin: 20px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    iframe {
      width: 100%;
      height: 450px;
      border: 0;
      border-radius: 20px;
    }

    &-info {
      h3 {
        text-align: center;
      }

      a,
      a:link,
      a:visited {
        text-decoration: none;
        color: black;
      }

      a:hover {
        color: rgb(0, 21, 138);
        font-size: 20px;
      }
    }
  }

  @media only screen and (max-width: 720px) {
    &-about {
      &-info {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
      }
    }

    &-map {
      margin: 20px 0px;
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }
  }
}
</style>
