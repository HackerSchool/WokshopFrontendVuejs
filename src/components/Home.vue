<template>
  <div class="add">
    <form @submit.prevent>
      <p>Insert the infoHash of the torrent you want to download:</p>
      <input type="text" v-model="torrent" name="torrent" placeholder="Insert infoHash">
      <button @click="DownloadTorrent">Submit</button>
    </form>
  </div>
</template>

<script>
import api from '../api/torrents'

export default {
  name: 'Home',
  data () {
    return {
      torrent: null
    }
  },
  methods: {
    async DownloadTorrent() {
      api.download(this.torrent).then((resp) => {   // fixme, avaliar resposta?
        this.$router.push({
          'name': 'Dashboard'
        })
      })
    }
  }
}
</script>
