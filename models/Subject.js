const mongoose = require('mongoose');

// Define the schema for the Subject model
const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // ensures that 'name' field is required
  }
});

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;
