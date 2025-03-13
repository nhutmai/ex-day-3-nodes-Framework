const {isAuthenticated} = require('../../middleware/auth');
const venueController = require('../../controllers/venue.controller');
const eventController = require('../../services/venue.service');
module.exports = {
    Query: {
        getAllVenues: (_, args, context) => {
            isAuthenticated(context);
            return venueController.getAllVenues();
        },
        getVenueById: (_, args, context) => {
            isAuthenticated(context);
            return venueController.getVenueById(args);
        }
    },
    Mutation: {
        createVenue: (_, args, context) => {
            isAuthenticated(context);
            return eventController.createVenue(args);
        },
        updateVenue: (_, args, context) => {
            isAuthenticated(context);
            return eventController.updateVenue(args);
        }
    },
};