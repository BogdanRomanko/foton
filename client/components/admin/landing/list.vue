<script setup lang="ts">
const langingStore = useLangingStore()
</script>

<template>
  <div>
    <AdminLandingItem :data="langingStore.data.header?.title" />
    <AdminLandingItem :data="langingStore.data.header?.advertisement" />
    <AdminLandingItem :data="langingStore.data.header?.info.phone1" />
    <AdminLandingItem :data="langingStore.data.header?.info.phone2" />
    <AdminLandingItem :data="langingStore.data.header?.info.email" />
    <AdminLandingItem :data="langingStore.data.footer?.adress.full" />
    <AdminLandingItem :data="langingStore.data.footer?.adress.min" />
    <AdminLandingItem :data="langingStore.data.footer?.info.inn" />
    <AdminLandingItem :data="langingStore.data.footer?.info.ogrn" />
    <AdminLandingItem :data="langingStore.data.footer?.info.kpp" />
  </div>
</template>

<style lang="scss" scoped></style>
