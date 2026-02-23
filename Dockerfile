FROM node:18-alpine

WORKDIR /

COPY package*.json ./

RUN npm i -y

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]
