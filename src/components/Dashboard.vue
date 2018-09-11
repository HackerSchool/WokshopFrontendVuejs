<template>
  <div class="dashboard">
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
            <td @click="redirect(torrent.hash)">{{torrent.name}}</td>
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
  data () {
    return {
      torrents: []
    }
  },
  methods: {
    //fixme - convert time and size to decent formats
    //fixme - delete button
    redirect(infoHash){
      //fixme
      this.$router.push({
        'name': 'Stream',
        params: {infoHash}
      })
    }
  },
  async mounted () {
    api.getList().then( (response) => {
      this.torrents = response
    } )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.dashboard {
  text-align: left;
}

table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}

</style>
