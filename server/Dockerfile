FROM node:18-alpine

RUN npm install -g nodemon

WORKDIR /server/

COPY package.json ./
RUN npm install
ADD . . /server/

CMD ["npm", "run", "dev"]