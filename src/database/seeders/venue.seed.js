const Venue = require('../../models/venue.model');

const venues = [
    {name: 'Stadium A', address: '123 Main St', city: 'New York'},
    {name: 'Hall B', address: '456 Elm St', city: 'Los Angeles'},
];

const seedVenues = async () => {
    await Venue.deleteMany({});
    return await Venue.insertMany(venues);
};

module.exports = seedVenues;
