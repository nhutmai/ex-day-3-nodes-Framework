const mongoose = require('mongoose');
require('dotenv').config();
const {DB_URL} = process.env;
module.exports = () => {
    try {
        mongoose.connect(DB_URL);
        console.log('MongoDB Connected!');
    } catch (e) {
        console.error(e);
    }
};