const {isAuthenticated} = require('../../middleware/auth');
const eventController = require('../../controllers/event.controller');
module.exports = {
    Query: {
        getEventById(_, args, context) {
            isAuthenticated(context);
            return eventController.getEventById(args);
        },
        getAllEvents(_, args, context) {
            isAuthenticated(context);
            return eventController.getAllEvents(args);
        },
    },

    Mutation: {
        createEvent(_, args, context) {
            isAuthenticated(context);
            return eventController.createEvent(args);
        },
        updateEvent(_, args, context) {
            isAuthenticated(context);
            return eventController.updateEvent(args.event);
        }
    },

    Event: {
        categories(parent) {
            return eventController.getCategoriesByIds(parent.categories);
        },
        comments(parent) {
            return eventController.getCommentsByEventId(parent.id);
        },
        venue(parent) {
            return eventController.getVenueById(parent.venue);
        }
    },


};