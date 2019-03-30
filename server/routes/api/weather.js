const fetch = require('node-fetch');

module.exports = (app) => {

app.get('/weather', (req, res) => {

    apiKey = '&appid=40040fdd5fe5996636f11ad9fbfd4e44';
    baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
    query = 'q=Stockholm,se';
    metric = '&units=metric';
    //For testing purposes full url
    fullUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Stockholm,se&appid=40040fdd5fe5996636f11ad9fbfd4e44&units=metric';

    fetch(baseUrl + query + apiKey + metric)
        .then(res => res.json())
        .then(data => {
          res.send({ data });
        })
        .catch(err => {
          res.redirect('/error');
        });
    })
}