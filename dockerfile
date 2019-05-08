FROM mhart/alpine-node:12

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4000

CMD ["node", "app.js"]