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

    <p v-if="response">{{response}}</p>

  </div>
</template>

<script>
import download from '../api/torrents'

//magnet:?xt=urn:btih:476fb80ed698a98daef486ce0d949627622c7dce

export default {
  name: 'Home',
  data () {
    return {
      torrent: null,
      response: null
    }
  },
  methods: {
    async DownloadTorrent() {
      var result = await download(this.torrent);

      this.response = result.response
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
