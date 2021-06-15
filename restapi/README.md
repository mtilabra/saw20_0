## The rest api
The objective for this part is to make a rest API using Express and Node.js.
We will implement only two functions, one push petition, for registering a new user and a get petition, to list all the users in the system.
The webservice will be deployed using docker.

 
### Testing the rest api
In this part we will use an in-memory mongodb database, very suitable for testing. Also we need something for making the api requests, in this case we are using [Supertest](https://www.npmjs.com/package/supertest).

```
npm install supertest --save-dev
```

<mark>Note: These dependencies are save only for dev mode, we do not need them for production.</mark>
The idea is to use Jest (as in the webapp) as the main testing framework. We are going to use it to launch our in-memory database and run the tests against the api. For making the get or post petitions we are going to use supertest. The [server-for-tests.js](restapi/tests/server-for-tests.js) has the in-memory mongo db server launch and shutdown commands. The [api.test.js](restapi/tests/api.test.js), has the implementation of the tests.

After configuring the tests in the `package.json` we can run them using `npm run test`

### Docker image for the rest api
In this case the web service depends on the mongo database. What we are going to do is create a Dockerfile that will be responsible for loading the ws and then, a general docker-compose that will load everything in order (database, webservice, webapp, and also the monitoring software).

Check the `docker-compose.yaml` to understand how each service is created and loaded.

<mark>With the current configuration is not possible to run each container alone (it also does not make sense, as all the parts are dependent). When we execute everything with docker-compose, a network between containers is created and we can access one from another using the container name. This is how the restapi connects with the mongo server for instance.</mark>