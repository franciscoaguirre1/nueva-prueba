FROM node:18

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV DB_HOST 'host.docker.internal'
ENV DB_USER 'root'
ENV DB_PASSWORD 'PerritoMalvado'
ENV DB_NAME '10milviviendas'

EXPOSE 8090

CMD ["npm", "run", "dev"]