module.exports = `#graphql

type Venue {
    id:ID!,
    address: String!,
    city: String!,
}

extend type Query {
    getVenueById(id: ID!): Venue!
    getAllVenues:[Venue]!
}

extend type Mutation {
    createVenue(venue:VenueInput!): Venue!
    updateVenue(id:ID!,venue:VenueInput!): Venue!
}

input VenueInput {
    name: String!
    address: String!
    city: String!
}
`;