const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const educationSchema = new Schema({
  name: String,
  location: String,
  dateAttended: String,
  description: String,
  achievements: String
});

module.exports = mongoose.model('Education', educationSchema);
