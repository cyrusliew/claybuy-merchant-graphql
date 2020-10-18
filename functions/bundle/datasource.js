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
            },
        } = tile;

        return {
            id,
            name,
            tileImage: currentTileUrl,
            url,
        }
    }

    async getTiles() {
        console.log('[Calling getTiles()]');
        const response = await this.get('tiles');

        const jsonResponse = JSON.parse(response);

        return Array.isArray(jsonResponse.data)
            ? jsonResponse.data.map(tile => this.tileReducer(tile))
            : [];
    }
}

module.exports = TilesAPI;

