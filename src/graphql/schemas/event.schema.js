const {DateTimeTypeDefinition} = require('graphql-scalars');
module.exports = `#graphql
${DateTimeTypeDefinition}
type Event {
    id:ID!,
    title: String!,
    description:String!,
    date: DateTime!,
    venue: Venue,
    categories: [Category]!,
    comments: [Comment]!
}

extend type Query {
    getEventById(id: ID!): Event!
    getAllEvents: [Event]!
}

extend type Mutation {
    createEvent(event:EventInput!): Event!
    updateEvent(event:EventInput!): Event!
}

input EventInput{
    description: String!
    date: DateTime!
    venue: ID!,
    categories: [ID!]!
    title: String!
}
`;