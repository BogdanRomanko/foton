FROM node:18-alpine

RUN npm install -g nodemon

# Папка приложения
WORKDIR /server/

# Установка зависимостей
COPY package.json ./ 
RUN npm install
ADD . . /server/

CMD ["npm", "run", "dev"]