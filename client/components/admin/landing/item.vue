<script setup lang="ts">
import { object, string, type InferType } from "yup"
import type { FormSubmitEvent } from "#ui/types"

const { data } = defineProps<{
  data?: IStaticData
}>()

const langingStore = useLangingStore()

const state = reactive({
  content: data?.content,
})

const schema = object().shape({
  content: string().required("Поле не должно быть пустым"),
})

type Schema = InferType<typeof schema>

function onSubmit(event: FormSubmitEvent<Schema>) {
  if (!data || !data.id || !data.title) return

  langingStore.edit({
    ...event.data,
    id: data?.id,
    title: data?.title,
  })
}
</script>

<template>
  <!-- <h1 v-if="categoryStore.isLoading">is loading...</h1>
  <p v-if="categoryStore.error" class="text-red-600">
    {{ categoryStore.error }}
  </p> -->

  <div class="">
    <div v-if="data" class="static-form">
      <UForm :schema="schema" :state="state" @submit="onSubmit">
        <UFormGroup :label="`Введите ${data.title}`" name="content">
          <UInput v-model="state.content" :placeholder="data.title" />
        </UFormGroup>
        <UButton type="submit"> Измените </UButton>
      </UForm>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.static-form {
  border: 1px solid black;
  padding: 15px;
}
</style>
