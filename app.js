const clima = require('./controlador/clima');

const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let ciudad = argv.ciudad;
/*
const temp = clima.getClima(ciudad);
console.log(`El clima de ${ciudad} es: ${temp}`);
*/

clima.getClima(ciudad)
    .then(respuesta => {
        console.log(`El clima de ${ciudad} es: ${respuesta}`);
    })
    .catch(err => {
        console.log(err);
    });