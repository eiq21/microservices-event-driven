const dbConfig = require("../config/db");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.User = require("./user")(mongoose);
module.exports = db;
