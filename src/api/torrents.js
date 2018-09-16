import axios from 'axios'
const baseUrl = 'http://localhost:3000'

async function download(infoHash) {
  const response = await axios.post(baseUrl + '/add',  { infoHash } )
  return response.data
}

async function getList() {
  const response = await axios.get(baseUrl + '/list')
  return response.data
}

async function stream() {
  const response = await axios.get(baseUrl + '/stream')
  return response.data
}


export default {
  download,
  getList,
  stream
}
