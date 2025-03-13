module.exports = `#graphql
type Comment {
    id:ID!,
    content: String!
    event:Event!,
    user:User!,
}

extend type Query {
    getAllComments: [Comment]
    getCommentById(id:ID!): Event!
}

extend type Mutation {
    createComment(comment:CommentInput!): Comment!
    updateComment(comment:CommentInput!): Comment!
}

input CommentInput{
    content: String!,
    event:ID!,
    user:ID!,
}
`;