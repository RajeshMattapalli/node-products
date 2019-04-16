var mongoose = require('mongoose');
var userModel = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    userName: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
});

module.exports = mongoose.model('User', userModel);;