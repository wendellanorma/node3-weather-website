const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f90c42af300e6a5894daf5a8a7accd00&query=' + latitude + ',' + longitude 

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect with Weather Service!', undefined)
        }else if (body.error) {
            callback('Unable to find the location', undefined)
        }else {
            callback(undefined, body.current.weather_descriptions[0] + '. it is currently ' + body.current.temperature + ' but it feels like ' + body.current.feelslike)
        }
    })
}

module.exports = forecast