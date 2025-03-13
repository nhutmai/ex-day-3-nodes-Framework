const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
        title: {type: String, required: true},
        description: {type: String, required: true},
        date: {type: Date, required: true},
        venue: {type: mongoose.Schema.Types.ObjectId, ref: 'Venue', required: true},
        categories: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Category'} ],
        comments: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Comment'} ]
    }, {timestamps: true}
);

module.exports = mongoose.model('Event', eventSchema);
