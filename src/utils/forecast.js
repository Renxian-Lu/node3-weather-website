const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=cdab0d41505531c2241d729a8bbee300&query='+longitude+','+latitude

    request({url, json:true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if (body.error){
            callback('Unable to find location', undefined)
        }else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.precip + '% chance of rain. The humidity is ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast