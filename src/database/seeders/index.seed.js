const seedCategories = require('./category.seed');
const seedVenues = require('./venue.seed');
const seedUsers = require('./user.seed');
const seedEvents = require('./event.seed');
const seedComments = require('./comment.seed');
const connectDB = require('../../configs/mongo.db');
const mongoose = require('mongoose');

const seedDatabase = async () => {
    await connectDB();

    const categories = await seedCategories();
    console.log('Categories Seeded');

    const venues = await seedVenues();
    console.log('Venues Seeded');

    const users = await seedUsers();
    console.log('Users Seeded');

    const events = await seedEvents(venues, categories);
    console.log('Events Seeded');

    await seedComments(events, users);
    console.log('Comments Seeded');

    mongoose.connection.close();
    console.log('Database Seed Completed!');
};

seedDatabase().catch(err => console.log(err.message));
