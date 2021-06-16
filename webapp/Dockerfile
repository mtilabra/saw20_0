FROM node:12.14.1
COPY . /app
WORKDIR /app
#Install the dependencies
RUN npm install --production
#Create an enviroment variable to set where the api is (check src/api/api.js). 
#When we deploy to heroku this will take a different value. Check .github/workflows/radarin.yml
ARG API_URI="http://localhost:5000/api"
ENV APP_API_URI=$API_URI
CMD [ "node", "server.js" ]