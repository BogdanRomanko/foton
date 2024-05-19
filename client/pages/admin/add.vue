<script setup lang="ts">
import { object, string, type InferType, mixed, number } from "yup"
import type { FormSubmitEvent } from "#ui/types"

definePageMeta({
  layout: "admin",
  middleware: "protect-by-auth",
})

const productStore = useProductStore()
const categoryStore = useCategoryStore()

const fileRef = ref()

useAsyncData(() => categoryStore.fetch())

const state = reactive({
  title: null,
  description: null,
  image: null,
  categoryId: null,
})

const schema = object().shape({
  title: string().required("Required"),
  description: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
  image: mixed()
    .required("required")
    .test("fileFormat", "Only support files are allowed", (value: any) => {
      const supportedFormats = ["jpeg", "jpg", "png", "gif", "svg"]
      const e = value.split(".")

      if (!e) return false

      return supportedFormats.includes(e.at(-1))
    }),
  categoryId: number().required().min(1, "select category"),
})

type Schema = InferType<typeof schema>

function onSubmit(event: FormSubmitEvent<Schema>) {
  productStore.add({
    ...event.data,
    image: fileRef.value.input.files[0],
  })
}
</script>

<template>
  <div class="w-4/5 mx-auto">
    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4 form p-7"
      @submit="onSubmit"
    >
      <UFormGroup label="Заголовок" name="title">
        <UInput v-model="state.title" color="white" />
      </UFormGroup>

      <UFormGroup label="Описание" name="description">
        <UTextarea v-model="state.description" />
      </UFormGroup>

      <UFormGroup label="Лого" name="image">
        <UInput
          ref="fileRef"
          v-model="state.image"
          type="file"
          color="white"
          accept=".jpeg, .jpg, .png, .gif, .svg"
        />
      </UFormGroup>

      <UFormGroup label="Category" name="categoryId">
        <USelectMenu
          v-model="state.categoryId"
          :options="categoryStore.data"
          placeholder="Select categories"
          value-attribute="id"
          option-attribute="title"
        />
      </UFormGroup>
      <UButton type="submit"> Submit </UButton>
    </UForm>
  </div>
</template>

<style scoped lang="scss"></style>
