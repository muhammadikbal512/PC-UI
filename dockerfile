FROM node:16-alpine

WORKDIR /app

copy package* .
RUN npm i

COPY . .
CMD ["npm", "run", "dev"]

