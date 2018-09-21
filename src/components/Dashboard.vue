<template>
  <div class="dashboard">
    <br>
    <div v-if="selectedTorrentInfoHash != null">
      Select the file you wish to stream in <b>{{selectedTorrentName}}</b>:
      <form @submit.prevent>
        <div v-for="file in files" :key="file.index">
          <input type="radio" v-model="selectedFile" :value="file.index"/>{{file.name}}<br>
        </div>
        <input @click="redirect()" type="submit" value="Stream">
      </form>
      <br><br>
    </div>
    <center>
      <div v-if="torrents.length != 0">
        <table style="width:100%">
          <tr>
            <th>Name</th>
            <th>Downloaded</th>
            <th>Time Remaining</th>
            <th>State</th>
          </tr>
          <tr v-for="torrent in torrents" :key="torrent.hash">
            <td @click="selectTorrent(torrent.hash)">{{torrent.name}}</td>
            <td>{{torrent.downloaded}}</td>
            <td>{{torrent.timeRemaining}}</td>
            <td>{{torrent.state}}</td>
          </tr>
        </table>
      </div>
      <div v-else>
        No torrents currently
      </div>
    </center>
  </div>
</template>

<script>
import api from '../api/torrents'

export default {
  name: 'Dashboard',
  props: {
    infoHash: {
      required: false,
      type: String
    }
  },
  data () {
    return {
      torrents: [],
      selectedTorrentInfoHash: String,
      files: [],
      selectedFile: String
    }
  },
  computed: {
    selectedTorrentName() {
      const torrent = this.torrents.filter( (t) => {
        if(t.hash == this.selectedTorrentInfoHash){
          return t
        }
      })
      return torrent[0].name
    }
  },
  methods: {    //fixme - convert time and size to decent formats, delete button
    redirect() {
      //fixme verify if file extension is a movie one
      this.$router.push({   //fixme Podemos pôr isto implicito no botão em vez de numa função ?
        'name': 'Stream',
        params: {
          infoHash: this.selectedTorrentInfoHash,
          fileIndex: this.selectedFile
        }
      })
    },
    async selectTorrent(infoHash) {
      api.getFiles(infoHash).then((files) => {
        this.selectedTorrentInfoHash = infoHash
        this.files = files
      })
    }
  },
  async beforeMount () {
    // Make periodic calls to the api
    setInterval(function () {
      api.getList().then( (response) => {
        this.torrents = response
      } )
    }.bind(this), 1000)
    this.selectedTorrentInfoHash = this.infoHash
  },
}
</script>

<style scoped>
.dashboard {
  text-align: left;
}
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
</style>
