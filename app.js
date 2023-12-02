const express = require('express');
const mongoose = require('mongoose');
const Student = require('./student');
const dotenv = require('dotenv');

dotenv.config(); 


const app = express();
const port = 3000;

const mongoUrl = process.env.mongo_Url;

mongoose.connect(mongoUrl)
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connected to MongoDB Atlas')
})


app.get('/', (req, res) => {
  res.send('Hello, Express with MongoDB!');
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });


app.listen((port), ()=>{
    console.log(`Listening on port https://localhost${port}`)
})