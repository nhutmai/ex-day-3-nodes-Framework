const Event = require('../models/event.model');

const getEventById = async () => {
    try {
        return await Event.findById(id);
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllEvents = async () => {
    try {
        return await Event.find({});
    } catch (error) {
        throw new Error(error.message);
    }
};

const createEvent = async (event) => {
    try {
        return await Event.create(event);
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateEvent = async (id, event) => {
    try {
        await Event.findByIdAndUpdate(id, event);
        return await Event.findById(id);
    } catch (error) {
        throw new Error(error.message);
    }
};

const findEventsByCategoryId = async (categoryId) => {
    try {
        return await Event.find({categories: {$in: [ categoryId ]}});
    } catch (error) {
        throw new Error(error.message);
    }
};

const findEventByCommentId = async (commentId) => {
    try {
        return Event.findOne({comments: {$in: [ commentId ]}});
    } catch (error) {
        throw new Error(error.message);
    }

};

module.exports = {
    getEventById,
    getAllEvents,
    createEvent,
    updateEvent,
    findEventsByCategoryId,
    findEventByCommentId
};