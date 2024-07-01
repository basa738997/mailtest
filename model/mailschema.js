const mongoose = require('mongoose');

const mailschema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }
})

const mail = mongoose.model("mail", mailschema);
module.exports = mail;
