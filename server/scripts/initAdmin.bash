#!/bin/bash

# URL для POST-запроса
URL="http://localhost:8080/user/registration"

# Данные для регистрации
USER_DATA=$(cat <<EOF
{
  "name": "admin",
  "password": "adminroot",
  "role": "ADMIN"
}
EOF
)

# Отправка POST-запроса с помощью curl
response=$(curl -s -X POST "$URL" \
  -H "Content-Type: application/json" \
  -d "$USER_DATA")

# Вывод ответа от сервера
echo "Response from server: $response"
