const categorySchema = require('./schemas/category.schema');
const commentSchema = require('./schemas/comment.schema');
const venueSchema = require('./schemas/venue.schema');
const eventSchema = require('./schemas/event.schema');
const userSchema = require('./schemas/user.schema');

const baseSchema = `#graphql
type Query
type Mutation
`;

module.exports = [
    baseSchema, categorySchema, commentSchema, venueSchema, eventSchema, userSchema
];