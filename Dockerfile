FROM node:14

WORKDIR /usr/src/app

COPY C:\Users\angel\mi-primer-servidor ./


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3050

CMD [ "node", "server.js" ]