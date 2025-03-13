const venueService = require('../services/venue.service');

const getAllVenues = async () => {
    return await venueService.getAllVenues();
};

const getVenueById = async ({venueId}) => {
    return await venueService.getVenueById(venueId);
};

const createVenue = async ({venue}) => {
    return await venueService.createVenue(venue);
};

const updateVenue = async ({venueId, venue}) => {
    return await venueService.updateVenue(venueId, venueId);
};

module.exports = {
    getAllVenues,
    getVenueById,
    createVenue,
    updateVenue,
};