const axios = require('axios')

const getClima = async (lat, lng) => {
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=69c489faa74eaf3d5c1cafb863aa2d23&units=metric`)
  return resp.data.main.temp
}

module.exports = {
  getClima
}
