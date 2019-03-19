const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Direccion de la ciudad para obtener el clima',
    demand: true
  }
}).argv

// lugar.getLugarLatlng(argv.direccion)
//   .then(console.log)

// clima.getClima(40.419998, -3.700000)
//   .then(console.log)
//   .catch(console.log)

const getInfo = async (direccion) => {
  try {
    const coords = await lugar.getLugarLatlng(direccion)
    const temp = await clima.getClima(coords.lat, coords.lng)
    return `El Clima de ${coords.direccion} es de ${temp}.`
  } catch (e) {
    return `No se pudo determinar el clima de ${direccion}`
  }
}

getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log)
