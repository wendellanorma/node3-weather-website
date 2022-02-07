const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoid2VuZGVsbGFub3JtYSIsImEiOiJja3lvY3hnbnQyeTI0MnVwbHYxbWc2Z3NvIn0.jsbg0Dx32n2nespiyBYi2g&limit=1'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        }else if (body.features.length === 0) {
            callback('Unable to find the location', undefined)
        }else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode