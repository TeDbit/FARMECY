const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    subject : String,
    messageBody : String,
    receivers : []
})

module.exports = mongoose.model("Message", messageSchema);