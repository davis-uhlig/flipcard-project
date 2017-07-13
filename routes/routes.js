const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const config = require("../config")[process.env.NODE_ENV || 'test']
const nodeEnv = process.env.NODE_ENV || "development";
const app = require('../app');
const items = require('../models/cards.js');
const purchases = require('../models/decks.js');
const bodyParser = require("body-parser");


mongoose.Promise = require('bluebird');

if (require.main === 'module'){
  mongoose.connect(config.mongoURL);
}

module.exports = router;
