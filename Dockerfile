FROM node:18.17.0

WORKDIR /app

COPY package.json ./

RUN npm

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]
