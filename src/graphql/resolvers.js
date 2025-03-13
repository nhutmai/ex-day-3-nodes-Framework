const {DateTimeResolver} = require('graphql-scalars');
const userResolvers = require('./resolvers/user.resolver');
const categoryResolvers = require('./resolvers/category.resolver');
const commentResolvers = require('./resolvers/comment.resolver');
const eventResolvers = require('./resolvers/event.resolver');
const venueResolvers = require('./resolvers/venue.resolver');
module.exports = {

    //resolver cho type datetime for event
    DateTime: DateTimeResolver,

    Query: {
        ...userResolvers.Query,
        ...categoryResolvers.Query,
        ...commentResolvers.Query,
        ...eventResolvers.Query,
        ...venueResolvers.Query,
    },

    Mutation: {
        ...userResolvers.Mutation,
        ...categoryResolvers.Mutation,
        ...commentResolvers.Mutation,
        ...eventResolvers.Mutation,
        ...venueResolvers.Mutation,
    },

    // ================THE RELATIONSHIP============
    User: userResolvers.User,
    Category: categoryResolvers.Category,
    Comment: commentResolvers.Comment,
    Event: eventResolvers.Event,
};