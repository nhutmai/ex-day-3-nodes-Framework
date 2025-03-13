const eventService = require('../services/event.service');
const categoryService = require('../services/category.service');
const commentService = require('../services/comment.service');
const venueService = require('../services/venue.service');

const getAllEvents = async () => {
    return await eventService.getAllEvents();
};
const getEventById = async ({id}) => {
    return await eventService.getEventById(id);
};
const createEvent = async ({event}) => {
    return await eventService.createEvent(event);
};
const updateEvent = async ({id, event}) => {
    return await eventService.updateEvent(id, event);
};
const getCategoriesByIds = async (categoryIds) => {
    return await categoryService.getCategoriesByIds(categoryIds);
};

const getCommentsByEventId = async (eventId) => {
    return await commentService.findCommentsByEventId(eventId);
};
const getVenueById = async (venueId) => {
    return await venueService.getVenueById(venueId);
};

module.exports = {
    getAllEvents,
    getEventById,
    createEvent,
    updateEvent,
    getCategoriesByIds,
    getCommentsByEventId,
    getVenueById,
};