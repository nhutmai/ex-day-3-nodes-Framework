const Event = require('../../models/event.model');

const seedEvents = async (venues, categories, comments) => {
    await Event.deleteMany({});
    const events = [
        {
            title: 'Rock Concert',
            description: 'Live rock music concert',
            date: new Date(),
            venue: venues[0]._id,
            categories: [ categories[0]._id ],
        },
        {
            title: 'Tech Conference',
            description: 'Annual technology conference',
            date: new Date(),
            venue: venues[1]._id,
            categories: [ categories[2]._id ],
        }
    ];
    return await Event.insertMany(events);
};

module.exports = seedEvents;
