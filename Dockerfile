FROM node:22-alpine

WORKDIR /src

COPY package.json package-lock.json /src/

RUN npm ci --silent

COPY . .

CMD npm run dev