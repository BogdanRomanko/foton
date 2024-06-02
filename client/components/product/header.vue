<script setup lang="ts">
const userStore = useUserStore()
const productStore = useProductStore()

const productId = inject("productId", "")

function onDeleteProduct() {
  if (!productId) return

  productStore.remove(productId)
}
</script>

<template>
  <NuxtLink :to="`/admin/edit/product/${productId}`">Изменить</NuxtLink>

  <div v-if="userStore.isAdmin">
    <UiModalConfirm
      button-text="Удалить"
      message="Вы действительно хотите удалить данный товар ?"
      @confirm="onDeleteProduct"
    />
  </div>
</template>

<style lang="scss" scoped></style>
