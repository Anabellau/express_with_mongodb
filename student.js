
const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true, 
    trim: true,   
    lowercase: true, 
  }
});


const Student = mongoose.model('Student', studentSchema);


module.exports = Student;
