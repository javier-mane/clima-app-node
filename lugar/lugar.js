const axios = require('axios')

const getLugarLatlng = async (dir) => {
  const encodeUrl = encodeURI(dir)

  // console.log(encodeUrl)

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    timeout: 1000,
    headers: { 'X-RapidAPI-Key': '1bedbaff14mshd2cb74d8db41be0p1ce91cjsn4e9bf97f0e3d' }
  })

  const resp = await instance.get()

  if (resp.data.Results[0] === 0) {
    throw new Error(`No hay resultados para ${dir}`)
  }

  const data = resp.data.Results[0]
  const direccion = data.name
  const lat = data.lat
  const lng = data.lon

  return {
    direccion,
    lat,
    lng
  }
}

module.exports = {
  getLugarLatlng
}
