const { RESTDataSource } = require('apollo-datasource-rest');
const axios = require('axios');

class TilesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://shop-directory-heroku.laybuy.com/api/';
    }
    
    tileReducer(tile) {
        const {
            id,
            attributes: {
                currentTileUrl,
                name,
                url,
                online,
                instore,
            },
        } = tile;

        return {
            id,
            name,
            tileImage: currentTileUrl,
            url,
            online,
            instore,
        }
    }

    async getTiles() {
        const response = await this.get('tiles');

        const jsonResponse = JSON.parse(response);

        return Array.isArray(jsonResponse.data)
            ? jsonResponse.data.map(tile => this.tileReducer(tile))
            : [];
    }
}

module.exports = TilesAPI;

