<script setup lang="ts"></script>

<template>
  <div class="product">
    <h2 class="product-header">ВИП-1.5</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, vel
      repellendus atque aliquam magnam voluptatibus at cumque qui voluptates
      dignissimos architecto molestiae, ullam sunt aperiam doloremque? Ut
      excepturi labore iusto?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, vel
      repellendus atque aliquam magnam voluptatibus at cumque qui voluptates
      dignissimos architecto molestiae, ullam sunt aperiam doloremque? Ut
      excepturi labore iusto?
    </p>
    <ul>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quo
        nesciunt, velit nemo laudantium labore.
      </li>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quo
        nesciunt, velit nemo laudantium labore.
      </li>
    </ul>
    <div class="product-image">
      <img src="/images/vip.jpg" alt="" />
    </div>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
      consequuntur, laborum at obcaecati ex debitis sapiente! Placeat suscipit
      sint odio sit error perspiciatis nam obcaecati voluptatibus distinctio
      delectus consectetur esse quae dolor ab provident maxime ullam ipsum ipsam
      laborum adipisci, quo alias? Veniam a magnam assumenda nisi asperiores
      animi temporibus.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.product {
  justify-content: center;
  max-width: 1200px;
  width: 95%;
  margin: 0px auto;
  flex-grow: 1;

  &-header {
    text-align: center;
  }

  &-image {
    text-align: center;
    img {
      max-width: 90%;
      margin: 0px auto;
    }
  }
}
</style>
