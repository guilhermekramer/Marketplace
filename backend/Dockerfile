FROM node:18.18.0


WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install


COPY . .

CMD ["node", "./app.js"]

EXPOSE 8080

