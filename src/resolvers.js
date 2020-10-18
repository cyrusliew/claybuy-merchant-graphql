module.exports = {
    Query: {
        getTiles: (_, __, { dataSources }) => dataSources.tilesAPI.getTiles(),
    }
};