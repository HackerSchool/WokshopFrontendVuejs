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

async function getFiles(infoHash) {
  console.log(infoHash)
  const response = await axios.get(baseUrl + '/stream/list/' + infoHash)
  return response.data
}

async function remove(infoHash) {
  const response = await axios.get(baseUrl + '/delete', {infoHash})
  return response.data
}

export default {
  download,
  getList,
  getFiles,
  remove
}
