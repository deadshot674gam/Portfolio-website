const request = require('request')
const fs = require('fs')
const btoa = require('btoa')

const starmap = ({ latitude, longitude },callback) => {

    const options = {
        method: 'POST',
        url: 'https://astronomy.p.rapidapi.com/api/v2/studio/star-chart',
        headers: {
            'content-type': 'application/json',
            'x-rapidapi-key': '29c29eb991msh39d09d28b69f783p19852djsn48ea3598d5ed',
            'x-rapidapi-host': 'astronomy.p.rapidapi.com',
            useQueryString: true
        },
        body: {
            observer: { date: '2000-05-01', latitude, longitude },
            style: 'default',
            view: { parameters: { constellation: 'ori' }, type: 'constellation' }
        },
        json: true
    };

    request(options, function (error, response, body) {
        if(!error){
            // console.log(body)
            callback(body.data.imageUrl)
        }
    });
}

module.exports = starmap