const { gql } = require('apollo-server');

const typeDefs = gql`
    type Tile {
        id: String!
        name: String
        url: String
        tileImage: String
        online: Boolean
        instore: Boolean
    }

    type Query {
        getTiles: [Tile]
        getTile(id: ID!): Tile
    }
`;

module.exports = typeDefs;

