FROM node:boron

RUN mkdir -p /home/devuser/server

RUN npm install nodemon -g

WORKDIR /home/devuser/server
ADD package.json package.json
RUN npm install
