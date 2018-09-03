import client from './client'

async function download(infoHash) {
  console.log(infoHash)
  const response = await client.post('/add', { params: { infoHash } })
  console.log(response.data)
  return {
    response: response.data
  }

}

async function getList() {
  const response = await client.get('/list')
  console.log(response.data)
  return {
    response: response.data
  }
}


export default download
