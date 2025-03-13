const {ApolloServer} = require('@apollo/server');
const {startStandaloneServer} = require('@apollo/server/standalone');
const typeDefs = require('./src/graphql/typedefs');
const resolvers = require('./src/graphql/resolvers');
require('dotenv').config();
const connectDB = require('./src/configs/mongo.db');
const {decodeToken} = require('./src/ults/token.utl');

const {PORT} = process.env;

connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

startStandaloneServer(server, {
    listen: {
        port: PORT || 8000,
    },
    context: async ({req}) => {
        const authHeader = req.headers.authorization;
        const user = authHeader ? decodeToken(authHeader.split(' ')[1]) : null;
        return {user};
    }
})
    .then(() => console.log('Server started'))
    .catch((err) => console.log(err));