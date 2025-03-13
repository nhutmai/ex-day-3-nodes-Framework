const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    hash: {type: String, default: ''},
    salt: {type: String, default: ''},
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);
