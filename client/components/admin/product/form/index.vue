<script setup lang="ts">
import { object, string, type InferType, mixed, number } from "yup"
import type { FormSubmitEvent } from "#ui/types"
import type { IProduct } from "../../../../pages/product/[id].vue"

const productStore = useProductStore()
const categoryStore = useCategoryStore()

const files = reactive([])
provide("files", files)

const blockConstructor = ref()

const { productData, type } = withDefaults(
  defineProps<{
    productData?: IProduct | null
    type?: "Создать" | "Изменить"
  }>(),
  {
    type: "Создать",
    productData: null,
  },
)

useAsyncData(() => categoryStore.fetch())

const state = reactive({
  title: productData?.title ?? "",
  description: productData?.description ?? "",
  image: files,
  categoryId: productData?.categoryId ?? "",
})

function imageFilter() {
  let filter: any = mixed()
    .test(
      "notMultiply",
      "Для лого товара необходима только 1 фотограция",
      (value: any) => {
        if (value.length > 1) return false

        return true
      },
    )
    .test("fileFormat", "Недопустимый тип файла для лого", (value: any) => {
      if (value.length === 0) return true

      return (
        value && value[0] && ["image/jpeg", "image/png"].includes(value[0].type)
      )
    })
    .test(
      "fileSize",
      "Размер файла для лого превышает допустимый",
      (value: any) => {
        if (value.length === 0) return true
        return value && value[0] && value[0].size <= 5242880
      },
    )
  if (type === "Изменить") {
    filter = filter.notRequired()
  } else if (type === "Создать") {
    filter = filter.required("required")
  }

  return filter
}

const schema = object().shape({
  title: string().required("Required"),
  description: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
  image: imageFilter(),
  categoryId: number().required().min(1, "select category"),
})

type Schema = InferType<typeof schema>
export type productFormData = Schema & { id?: number; blocks: any }

function onSubmit(event: FormSubmitEvent<Schema>) {
  if (type === "Создать") onSubmitCreate(event)
  else if (type === "Изменить") onSubmitEdit(event)
  else console.error("unknown product type form")
}

function onSubmitCreate(event: FormSubmitEvent<Schema>) {
  productStore.add({
    ...event.data,
    blocks: blockConstructor.value.getBlocksContent(),
    ...(event.data.image.length === 1 && { image: event.data.image[0] }),
  })
}
function onSubmitEdit(event: FormSubmitEvent<Schema>) {
  const { image, ...data } = event.data

  productStore.edit({
    id: productData?.id,
    ...data,
    ...(image.length === 1 && { image: image[0] }),
    blocks: blockConstructor.value.getBlocksContent(),
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
        <AdminProductFormImage :image="productData?.image" />
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
      <ClientOnly>
        <AdminConstructor
          ref="blockConstructor"
          :init-blocks="productData?.blocks"
        />
      </ClientOnly>
      <UButton type="submit"> {{ type }} </UButton>
    </UForm>
  </div>
</template>

<style scoped lang="scss"></style>
