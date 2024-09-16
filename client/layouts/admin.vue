<template>
  <div class="container">
    <div class="navbar">
      <NuxtLink class="navbar__item" to="/admin/add"> Добавить товар </NuxtLink>
      <NuxtLink class="navbar__item" to="/admin/products">
        Список товаров
      </NuxtLink>
      <NuxtLink class="navbar__item" to="/admin/langing">
        Информация о сайте
      </NuxtLink>
      <NuxtLink class="navbar__item" to="/admin/category"> Категории </NuxtLink>
      <NuxtLink class="navbar__item" to="/"> Назад </NuxtLink>
    </div>
    <div class="workspace">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  min-width: 100%;
}

.navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 20%;
  min-height: 100%;
  border-right: 1px solid black;

  &__item {
    width: 100%;
    text-align: center;
    background-color: #e8efcf;
    height: 40px;
    line-height: 40px;
    margin: 5px 0;

    transition: 0.5s ease;

    &:hover {
      background-color: #dba979;
    }
  }
}

.workspace {
  min-width: 80%;
  margin: 10px;
}
</style>
