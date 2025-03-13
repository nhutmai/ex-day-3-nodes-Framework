module.exports = `#graphql

type User {
    id:ID!,
    email: String!,
    username: String!,
    comments: [Comment]!,
}

extend type Query {
    getAllUsers: [User]!
    getUserById(id:ID!): User
}
extend type Mutation {
    createUser(user:userInput!): User!
    updateUser(user:userInput!): User!
    login(user:LoginUserInput!): LoginUser!
    register(user:userInput!): User!
}

type LoginUser {
    message:String!,
    token:String!,
    user:User!,
}

input LoginUserInput {
    username: String!,
    password: String!,
}

input userInput{
    username: String!,
    email: String!,
    password: String!,
}
`;