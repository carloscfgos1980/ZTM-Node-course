const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://nasa-api:G3cfoPxqorKUve20@nasa.8bgxoyf.mongodb.net/';

// event listeners
mongoose.connection.once('open', ()=>{
    console.log('Mongo Connection ready!');
});
mongoose.connection.on('error', (err)=>{
    console.log(err);
});

async function mongoConnect(){
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect(){
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}