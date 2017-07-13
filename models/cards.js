const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bodyParser = require("body-parser");

const cardSchema = new Schema({
  cardName: String,
  question: String,
  answer: String,
});

module.exports = mongoose.model('cards', cardSchema);
