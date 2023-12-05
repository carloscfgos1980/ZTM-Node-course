## Databases

# Introduction to databases

https://academy.zerotomastery.io/courses/1206554/lectures/31996325

# Lesson 2. Comparing SQL vs NoSQL

https://academy.zerotomastery.io/courses/1206554/lectures/31996326

# Lesson 3. Database shemas & Schemaless databases

https://academy.zerotomastery.io/courses/1206554/lectures/31997261

# Lesson 4. Choosing a database for our NASA project

https://academy.zerotomastery.io/courses/1206554/lectures/31997265

# Lesson 5. SQL vs MongoDB. Trends and Object-Relational Impedance Mismatch

https://academy.zerotomastery.io/courses/1206554/lectures/31998748

N: MongoDB is more modern than SQL and used by large databases like Google. It stores the data in collection in json format instead of tables (SQL).

# Lesson 6. SQL vs MongoDB. Schemas, references and ACID transitions

https://academy.zerotomastery.io/courses/1206554/lectures/31998859

# Setting Up MongoDb

https://academy.zerotomastery.io/courses/1206554/lectures/31999254

N: This lesson is very important to set the database. It took me some time to figure it out. The explanation is not quite the same coz the updates

# Lesson 8. Connecting MongoDB

https://academy.zerotomastery.io/courses/1206554/lectures/32012424

- To connect the MongoDB it is recommended to use a npm package named <mongoose>

I was setting my MongoDB and I ran into two problems:

1. MongoParseError: options usefindandmodify, usecreateindex, useunifyTopology were undefined
2. ::: 8000 already on use.

First problem I solved after google and realized that this optios are decapricated fromt he new version on mongoose so is solved by delete them

Second problem I solved by changing the number of the port, by I wonder why the port (8000) is still on use and how I can rever this.
Thanks in advance for the help

Apprarently I didn;t kill the server properly, that is why I had that problem with the PORT. I restart the computer and the problem was solved!

coding:
const mongoose = require('mongoose');
const MONGO_URL = 'mongodb+srv://nasa-api:G3cfoPxqorKUve20@nasa.8bgxoyf.mongodb.net/';

async function startServer(){
await mongoose.connect(MONGO_URL);

# Lesson 9. Mongoose

https://academy.zerotomastery.io/courses/1206554/lectures/32012428

# Lesson 10. Create Mongoose Schema for launches

https://academy.zerotomastery.io/courses/1206554/lectures/32012432

# Lesson 11. Creating Mongoose schema for plantes

https://academy.zerotomastery.io/courses/1206554/lectures/32012435

N: There are some adjustments to do in the frontend:
https://academy.zerotomastery.io/courses/1206554/lectures/43123629

# Lesson 12. Creating models for schemas

https://academy.zerotomastery.io/courses/1206554/lectures/32012440

# Lesson 13. Mongoose models vs MVC Models

https://academy.zerotomastery.io/courses/1206554/lectures/32012444

MVC Models stands for Models View Controllers, for example plantes.model.js

# Lesson 14. Inserting and updating documents

https://academy.zerotomastery.io/courses/1206554/lectures/32013328

N: Populating MongoDB, we need to to upsert so it will not duplicate the insertion of docutments due loadPlanetsData function which is a Promise... I hope this will make sense in the future
