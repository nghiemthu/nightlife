var mongoose = require("mongoose");

var eventSchema = new mongoose.Schema({
    name: String,
    members: { type: Array(), default: []}
});

module.exports = mongoose.model("event", eventSchema);