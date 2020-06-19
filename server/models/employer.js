const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employerSchema = new Schema({
  name: String,
  location: String,
  positionHeld: String,
  workDate: String,
  description: String
});

module.export = mongoose.model('Employer', employerSchema);
