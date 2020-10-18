const { ApolloServer } = require('apollo-server');
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

server.listen().then(({ url }) => {
    console.log(`Server is up at ${url}`);
})