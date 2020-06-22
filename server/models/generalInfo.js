const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const generalInfoSchema = new Schema({
  title: String,
  description: String
});

module.exports = mongoose.model('GeneralInfo', generalInfoSchema);
