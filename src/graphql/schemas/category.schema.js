module.exports = `#graphql
type Category {
    id:ID!
    name: String!
    events:[Event]!
}

extend type Query {
    getCategoryById(id:ID!):Category
    getAllCategories: [Category]!
}
extend type Mutation {
    createCategory(name: String!): Category!
    updateCategory(id: ID!, name: String!): Category!
}
`;