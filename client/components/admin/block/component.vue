<script setup lang="ts">
import type { VueComponent } from "@/types"

const { component, dataId, initContent } = defineProps<{
  component: VueComponent
  dataId: string
  initContent: any
}>()

const emit = defineEmits<{
  setBlockRef: [el: any, dataId: string]
  removeBlock: [dataId: string]
}>()
</script>

<template>
  <div class="block-container">
    <component
      :is="component"
      :ref="(el) => emit('setBlockRef', el, dataId)"
      is-edit
      :content="initContent"
    />
    <button class="block-btn" @click="() => emit('removeBlock', dataId)">
      X
    </button>
  </div>
</template>

<style lang="scss" scoped>
.block-container {
  position: relative;
  margin: 20px 0;
}

.block-btn {
  position: absolute;
  top: 0;
  left: -30px;
  font-size: 20px;
}
</style>
