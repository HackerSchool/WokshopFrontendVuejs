<template>
  <div class="add">
    <form>
      <p>Insert the infoHash of the torrent you want to download:</p>
      <input type="text" v-model="torrent" name="torrent" placeholder="Insert infoHash">
      <button @click="DownloadTorrent">Submit</button>
    </form>

    <!-- <p v-if="response != null">{{response}}</p> -->

  </div>
</template>

<script>
import api from '../api/torrents'

export default {
  name: 'Home',
  data () {
    return {
      torrent: null,
      response: null
    }
  },
  methods: {
    DownloadTorrent() {
      api.download(this.torrent)
      this.$router.push({
        'name': 'Stream',
        params: {infoHash: this.torrent }
      })
    }
  }
}
</script>
