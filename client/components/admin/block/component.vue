<script setup lang="ts">
import type { IBlockInitValue } from "../constructor/index.vue"
import type { VueComponent } from "@/types"

const { component, dataId, initContent } = defineProps<{
  component: VueComponent
  dataId: string
  initContent?: IBlockInitValue
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
      :init-data="initContent"
    />
    <button class="block-btn" @click="() => emit('removeBlock', dataId)">
      X
    </button>
  </div>
</template>

<style lang="scss">
.block-container {
  position: relative;
  margin: 20px 0;

  a {
    color: blue;
    cursor: pointer;
  }
}

.block-btn {
  position: absolute;
  top: 0;
  left: -30px;
  font-size: 20px;
}
</style>
