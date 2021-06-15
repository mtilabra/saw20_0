FROM node:12.14.1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

#In this case, the mongodb in memory dependency is quite heavy so we avoid it for the docker image
RUN npm install --production

# Bundle app source
COPY server.js api.js ./

CMD [ "node", "server.js" ]