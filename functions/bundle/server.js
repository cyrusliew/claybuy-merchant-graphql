const ApolloServer = require('apollo-server').ApolloServer;
const ApolloServerLambda = require('apollo-server-lambda').ApolloServer;
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const TilesAPI = require('./datasource');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        tilesAPI: new TilesAPI()
    })
});

function createLambdaServer() {
    return new ApolloServerLambda({
        typeDefs,
        resolvers,
        dataSources: () => ({
            tilesAPI: new TilesAPI()
        })
    });
}

function createLocalServer() {
    return new ApolloServer({
        typeDefs,
        resolvers,
        dataSources: () => ({
            tilesAPI: new TilesAPI()
        })
    });
}

module.exports = { createLambdaServer, createLocalServer };
