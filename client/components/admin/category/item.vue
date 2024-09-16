<script setup lang="ts">
import { object, string, type InferType } from "yup"
import type { FormSubmitEvent } from "#ui/types"

const { id, title } = withDefaults(
  defineProps<{
    id: number
    title: string
  }>(),
  {
    id: 0,
    title: "",
  },
)

const state = reactive({
  title,
})

const schema = object().shape({
  title: string()
    .required("Название категории - обязательное поле")
    .min(4, "Минимальное количество символов для названия 4"),
})

type Schema = InferType<typeof schema>

const categoryStore = useCategoryStore()

function onSubmitUpdate(event: FormSubmitEvent<Schema>) {
  categoryStore.update({
    id,
    title: event.data.title,
  })
}

function onDelete() {
  categoryStore.remove(id)
}
</script>

<template>
  <div v-if="title" class="box">
    <UForm :schema="schema" :state="state" @submit="onSubmitUpdate">
      <UFormGroup label="Название категории" name="title" class="indentElement">
        <UInput v-model="state.title" placeholder="Название категории" />
      </UFormGroup>
      <UButton type="submit" class="buttonStyle"> Обновить </UButton>
    </UForm>
    <UButton type="submit" class="buttonStyle" @click="onDelete"> Удалить </UButton>
  </div>
</template>

<style lang="scss" scoped>
.box {
  border: 1px solid black;
}

.buttonStyle{
  margin: 10px;
}
</style>
