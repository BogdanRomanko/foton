<script setup lang="ts">
import { object, string, type InferType } from "yup"
import type { FormSubmitEvent } from "#ui/types"

const state = reactive({
  login: "",
  password: "",
})

const schema = object().shape({
  login: string().required("Имя пользователя - обязательное поле"),
  password: string()
    .min(8, "Пароль должен быть минимум 8 символов")
    .required("Пароль - обязательное поле"),
})

type Schema = InferType<typeof schema>

const authStore = useAuthStore()

function onSubmit(event: FormSubmitEvent<Schema>) {
  // authStore.login(event.data)
  console.log(event.data)
}
</script>
<template>
  <h1 v-if="authStore.isLoading">is loading...</h1>
  <p v-if="authStore.error" class="text-red-600">{{ authStore.error }}</p>

  <div class="login">
    <div class="login-content">
      <h3>Авторизация</h3>
      <UForm :schema="schema" :state="state" @submit="onSubmit">
        <UFormGroup label="Введите имя пользователя" name="login">
          <UInput v-model="state.login" placeholder="Имя пользователя" />
        </UFormGroup>
        <UFormGroup label="Введите пароль" name="password">
          <UInput
            v-model="state.password"
            type="password"
            placeholder="Пароль от аккаунта"
          />
        </UFormGroup>
        <UButton type="submit"> Вход </UButton>
      </UForm>
    </div>
  </div>
</template>

<style lang="scss">
.login {
  flex-grow: 1;

  &-content {
    width: 40%;
    margin: 10px auto;

    h3 {
      text-align: center;
    }

    form {
      display: flex;
      flex-direction: column;

      input {
        border-color: red;
      }

      input[type="text"],
      input[type="password"] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
      }

      button {
        background-color: #0420aa;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
        display: flex;
        justify-content: center;
      }

      button:hover {
        opacity: 0.8;
      }
    }
  }

  @media only screen and (max-width: 720px) {
    &-content {
      width: 80%;
    }
  }
}
</style>
