import client from './client'

async function download(infoHash) {
  const response = await client.get('/add', { params: { infoHash } })
  console.log(response.data)
  return {
    response: response.data
  }

}

export default download
