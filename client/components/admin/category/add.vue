<script setup lang="ts">
import { object, string, type InferType } from "yup"
import type { FormSubmitEvent } from "#ui/types"

const state = reactive({
  title: "",
})

const schema = object().shape({
  title: string()
    .required("Название категории - обязательное поле")
    .min(4, "Минимальное количество символов для названия 4"),
})

type Schema = InferType<typeof schema>

const categoryStore = useCategoryStore()

function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
  categoryStore.add(event.data)
  state.title = ""
}
</script>

<template>
  <h1 v-if="categoryStore.isLoading">is loading...</h1>
  <p v-if="categoryStore.error" class="text-red-600">
    {{ categoryStore.error }}
  </p>

  <div class="">
    <div class="">
      <h3>Добавление категории</h3>
      <UForm :schema="schema" :state="state" @submit="onSubmit">
        <UFormGroup label="Введите название категории" name="title">
          <UInput v-model="state.title" placeholder="Название категории" />
        </UFormGroup>
        <UButton type="submit"> Добавить </UButton>
      </UForm>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
