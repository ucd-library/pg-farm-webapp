FROM node:12

RUN mkdir /app
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install --production

COPY controllers controllers
COPY lib lib
COPY server.js .

COPY client client

CMD [ "node", "server.js" ]