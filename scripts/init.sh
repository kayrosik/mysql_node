#!/bin/bash
cd /
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
npm start