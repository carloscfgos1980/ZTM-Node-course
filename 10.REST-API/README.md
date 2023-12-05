## Working with REST APIs - SpaceX project

# Lesson 1. Working with REST APIs - SpaceX project. Introduction

https://academy.zerotomastery.io/courses/1206554/lectures/32067384

# Lesson 2. The Space X API

https://academy.zerotomastery.io/courses/1206554/lectures/32081395

# Lesson 3. Versioning Node APIs

https://academy.zerotomastery.io/courses/1206554/lectures/32081411
https://academy.zerotomastery.io/courses/1206554/lectures/32081413

1. Create a file (api) inside routes folder
2. Move the logig of routes in app to this file:
   const express = require('express');

   const planetRouter = require('./planets/planets.router')
   const launchesRouter = require('./launches/launches.router')

   const api = express();

   api.use('/planets', planetsRouter);
   api.use('/launches', launchesRouter);

   module.exports = api;

- We need to update the path when requiring planetsRouter and launchesRouter

3. Set the verion in the URL path. src/app.js
   app.use('/v1', api);

- Now the URL will be like this:
  localhost:8000/v1/planets

* the "v1" will be place before the endpoints

4. Update the client (frontend) witht he new URL

5. Update launches.test.js with the new endpoint (placing the /v1/)
