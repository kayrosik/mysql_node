FROM node:14
WORKDIR /
COPY package*.json ./
RUN npm install --save
RUN npm install -g sequelize-cli
COPY . .
EXPOSE 3000

## THE LIFE SAVER
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && /scripts/init.sh