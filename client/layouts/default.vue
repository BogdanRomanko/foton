<script setup lang="ts">
const langingStore = useLangingStore()

await useAsyncData("langing", () => langingStore.fetch(), {
  server: true,
})
</script>
<template>
  <div>
    <LayoutNavbar />
    <slot />
    <LayoutFooter />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Roboto";
  src: url("") format("truetype");
}

@font-face {
  font-family: "Roboto-Bold";
  src: url("fonts/Roboto-Bold.ttf") format("truetype");
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  overflow-x: hidden;
}
</style>
