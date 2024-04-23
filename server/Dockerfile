FROM node:20-alpine3.18

RUN npm install -g nodemon

WORKDIR /server/

COPY package.json ./
COPY prisma ./server/prisma
RUN npm install
ADD . . /server/

CMD ["npm", "run", "dev"]