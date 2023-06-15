FROM node:14

WORKDIR /C/Users/angel/mi-primer-servidor

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3050

CMD [ "node", "/C/Users/angel/mi-primer-servidor/servidor-asincrono.js" ]