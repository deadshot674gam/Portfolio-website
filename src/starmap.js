const request = require('request')
const fs = require('fs')
const btoa = require('btoa')

const starmap = ({ latitude, longitude }) => {

    const credentials = {
        appId: "0e9147e7-e413-439d-b99a-7ca8395fd1d5",
        appSecret: "8a6933d7248961cb2e7588c250ed670878ac84ab0ffdc9d6afba1247b1a9409221cb299a14adf868a1c227290d158281bd147c37fbc416f4ce1239125c017fc09af0f1909d7e58cfaa85d5d0d29a425af8b62a32a0b5aba5226e57d153ca56858d30add7d053ac258fc90ca34275485a"
    }

    const hash = btoa(`${credentials.appId}:${credentials.appSecret}`);
    const data = {
        Authorisation: hash,
        body: {
            observer: {
                latitude,
                longitude,
                date: "2000-05-01"
            },
            view: {
                type: "constellation",
                parameters: {
                    constellation: "ori"
                }
            }

        }
    }
    request({
        url: 'https://api.astronomyapi.com/api/v2/studio/star-chart',
        json: data
    },
        (error, response) => {
            if (!error) {
                console.log(response)
            }
        }
    )
}

module.exports = starmap