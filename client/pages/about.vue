<script setup lang="ts"></script>

<template>
  <div class="about">
    <div class="about-content">
      <h3>О нас</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
        perspiciatis voluptate amet provident, suscipit enim? Itaque totam
        dolore vero officiis, nulla corrupti amet voluptas eius rerum eum omnis,
        libero voluptates.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
        perspiciatis voluptate amet provident, suscipit enim? Itaque totam
        dolore vero officiis, nulla corrupti amet voluptas eius rerum eum omnis,
        libero voluptates.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
        perspiciatis voluptate amet provident, suscipit enim? Itaque totam
        dolore vero officiis, nulla corrupti amet voluptas eius rerum eum omnis,
        libero voluptates.
      </p>
      <div class="about-content-image">
        <img src="/images/rsa.png" alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
        perspiciatis voluptate amet provident, suscipit enim? Itaque totam
        dolore vero officiis, nulla corrupti amet voluptas eius rerum eum omnis,
        libero voluptates.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
        perspiciatis voluptate amet provident, suscipit enim? Itaque totam
        dolore vero officiis, nulla corrupti amet voluptas eius rerum eum omnis,
        libero voluptates.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  flex-grow: 1;

  &-content {
    max-width: 1200px;
    width: 100vw;
    margin: 0px auto;
    h3 {
      text-align: center;
      font-weight: bold;
      font-size: 20px;
    }

    &-image {
      display: flex;
      justify-content: center;
      margin: 10px 0px;
      img {
        max-width: 100%;
        object-fit: contain;
      }
    }
  }

  @media screen and (max-width: 750px) {
    &-content {
      width: 90%;
      margin: 0px auto;
    }
  }
}
</style>
