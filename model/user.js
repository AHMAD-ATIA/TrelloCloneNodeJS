const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    vorname: {type: String, default: null},
    nachname: {type: String, default: null},
    email: {type: String},
    password: {type: String}
})

module.exports = mongoose.model("user", userSchema);