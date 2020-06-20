const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employerSchema = new Schema({
  name: String,
  location: String,
  positionHeld: String,
  workDate: String,
  description: String,
  description2: String,
  description3: String
});

module.exports = mongoose.model('Employer', employerSchema);
