const express = require('express')

const app = express()

const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('Hellooooooo')
});

app.get('/messages', (req, res)=>{
    res.send('<ul><li>Hello to myself motherfucker</li></ul>')
});

app.post('/messages', (req, res)=>{
    console.log('updating messages...')
})

app.listen(PORT, ()=>{
    console.log(`The port is listenning in port ${PORT}...`)
});

