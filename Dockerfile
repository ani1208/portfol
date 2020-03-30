#1getting the node of the latest version
FROM node:latest

#set working dir
RUN mkdir -p /usr/rejen
WORKDIR /usr/rejen
#copy all
COPY package.json /usr/src/app

ADD src /usr/rejen/src
ADD public /usr/rejen/public

RUN npm build

CMD [ "npm", "start" ]
