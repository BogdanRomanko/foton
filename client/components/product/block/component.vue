<script setup lang="ts">
import type { VueComponent } from "@/types"

const { component } = defineProps<{
  component: VueComponent
  dataId: number
}>()
</script>

<template>
  <component :is="component" />
</template>

<style lang="scss" scoped></style>
