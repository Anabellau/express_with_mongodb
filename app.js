const express = require('express');
const mongoose = require('mongoose');
const Student = require('./student');
const dotenv = require('dotenv');

dotenv.config(); 



const app = express();
app.use(express.json())
const port = 3000;

const mongoUrl = process.env.mongo_Url;

mongoose.connect(mongoUrl)
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connected to MongoDB Atlas')
})


app.post('./students',(req,res)=>{
  const newStudent = new Student({
    name: 'John',
    first_name: 'Doe',
    email: 'john@doe.com'
  });
  newStudent.save()
    .then(savedStudent => {
       res.status(201).json(savedStudent);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
})


app.listen((port), ()=>{
    console.log(`Listening on port https://localhost${port}`)
})