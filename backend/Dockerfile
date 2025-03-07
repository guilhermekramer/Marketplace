FROM node:18.0.0-alpine3.15

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

CMD ["node", "app.js"]

EXPOSE 3000

