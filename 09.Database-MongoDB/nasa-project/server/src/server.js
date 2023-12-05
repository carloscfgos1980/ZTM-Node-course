const http = require('http');

const mongoose = require('mongoose');

const app = require('./app')

const {loadPlanetsData} = require('./models/planets.model')

const PORT = process.env.PORT || 8000;

const MONGO_URL = 'mongodb+srv://nasa-api:G3cfoPxqorKUve20@nasa.8bgxoyf.mongodb.net/';

const server = http.createServer(app);

mongoose.connection.once('open', ()=>{
    console.log('Mongo Connection ready!');
});

mongoose.connection.on('error', (err)=>{
    console.log(err);
});

async function startServer(){
    await mongoose.connect(MONGO_URL);
    await loadPlanetsData();

    server.listen(PORT, ()=>{
        console.log(`listenning to port: ${PORT}`)
    });
}

startServer();