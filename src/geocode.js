const request = require('request');

const geocode = (city_name, callback) => {

    const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+city_name+'.json?access_token=pk.eyJ1IjoiZGVhZHNob3Q2NzRnYW0iLCJhIjoiY2tsNWNrZGJ6MjVzYjJwcW95MGxsbmJ6byJ9.m_MX8LD5ZNBXCY0XQy49Vg&limit=1'

    request({
        url: geoCodeUrl,
        json: true        
    },(error,response)=>{
        if(error){
            return console.log('Something unexpected happened. Please try again later.')
        }
        const coordinates = {
            latitude: response.body.features[0].center[0],
            longitude: response.body.features[0].center[0]
        }
        callback(coordinates)
    })

}

module.exports = geocode