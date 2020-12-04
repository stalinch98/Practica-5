const axios = require('axios');

const apikey = '041c1e6955ca69f806f12a670547202b';

const getClima = async(ciudad) => {
    try {
        const ciudadURI = encodeURI(ciudad);
        const respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudadURI}&appid=${apikey}`);
        return respuesta.data.main.temp;
    } catch (error) {
        console.log(error.data);
    }
}

module.exports = {
    getClima
}