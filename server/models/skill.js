const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
  title: String,
  description: String
});

module.exports = mongoose.model('Skill', skillSchema);
