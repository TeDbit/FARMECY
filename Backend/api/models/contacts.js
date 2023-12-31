const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  number: String,
});

module.exports = mongoose.model("Contact", contactSchema);
