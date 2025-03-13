const Venue = require('../models/venue.model');

const getAllVenues = async () => {
    try {
        return await Venue.find({});
    } catch (error) {
        throw new Error(error);
    }
};

const getVenueById = async (id) => {
    try {
        return await Venue.findById(id);
    } catch (error) {
        throw new Error(error);
    }
};

const createVenue = async (venue) => {
    try {
        return await Venue.create(venue);
    } catch (error) {
        throw new Error(error);
    }
};

const updateVenue = async (id, venue) => {
    try {
        const updateVenue = await Venue.findByIdAndUpdate(id, venue);
        return await Venue.findById(updateVenue._id);
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    getAllVenues,
    getVenueById,
    createVenue,
    updateVenue,
};