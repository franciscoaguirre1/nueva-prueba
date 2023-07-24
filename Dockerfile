FROM node:18

WORKDIR /app/back

COPY ./back/package.json .

RUN npm install

COPY ./back/ .

WORKDIR /app/front/dist

COPY ./front/dist .

WORKDIR /app/back

EXPOSE 8090

CMD ["node",  "index.js"]