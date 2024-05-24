<script setup lang="ts">
const userStore = useUserStore()

const productId = inject("productId")
</script>

<template>
  <NuxtLink :to="`/admin/edit/product/${productId}`">Изменить</NuxtLink>

  <div v-if="userStore.isAdmin">
    <UiModalConfirm
      button-text="Удалить"
      message="Вы действительно хотите удалить данный товар ?"
    />
  </div>
</template>

<style lang="scss" scoped></style>
