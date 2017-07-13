const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bodyParser = require("body-parser");

const deckSchema = new Schema({
  deckName: String
});

module.exports = mongoose.model('decks', deckSchema);
