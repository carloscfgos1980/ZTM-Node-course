## Testing APIs

- All the codes comes from NASA project

# Lesson 1. Testing in Node

https://academy.zerotomastery.io/courses/1206554/lectures/31987559

# Lesson 2. Testing APIs with Jest

https://academy.zerotomastery.io/courses/1206554/lectures/31987560

- Test runner
- Test fixtures
- Assertions
- Mocking

* Install Jest npm package for testing. It is a development dependency coz we use the test during development, we dont need to test out test during production
  cd server
  npm install jest --save-dev

  "scripts": {
  "watch": "nodemon src/server.js",
  "test": "jest",
  "start": "node src/server.js"
  },
