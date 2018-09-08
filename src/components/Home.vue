<template>
  <div class="add">
    <h1>Welcome to your Torrents Hacking System</h1>

    <form>
      <p>Insert the infoHash of the torrent you want to download:</p>
      <input type="text" v-model="torrent" name="torrent" placeholder="Insert infoHash">
      <button @click="DownloadTorrent">Submit</button>
    </form>

    <!-- To showcase the v-ifs -->
    <!-- <p v-if="torrent">By clicking submit you are...... doing nothing wrong!</p> -->

    <p v-if="response != null">{{response}}</p>
    <button @click="redirect">Torrents</button>


  </div>
</template>

<script>
import api from '../api/torrents'
// import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      torrent: null,
      response: null
    }
  },
  methods: {
    // exp: magnet:?xt=urn:btih:476fb80ed698a98daef486ce0d949627622c7dce
    async DownloadTorrent() {
      api.download(this.torrent).then( (response) => {
        this.response = JSON.stringify(response)
      })

      /* const result = axios.post('http://localhost:3000/add', {infoHash: this.torrent})
        .then((response) => {
          this.response = JSON.stringify(response.data)
        }).catch( (err) => {
      }) */
    },
    redirect() {
      this.$router.push("torrents")
    }
  },
  mounted() {
    if(this.$route.query.torrent) {
      this.torrent = this.$route.query.torrent
      this.DownloadTorrent()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
