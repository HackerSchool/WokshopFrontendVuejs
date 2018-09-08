<template>
  <div class="dashboard">
    <h1>Your torrents' state:</h1>
    <div v-if="torrents.length != 0">
      <table style="width:100%">
        <tr>
          <th>Name</th>
          <th>Downloaded</th>
          <th>Time Remaining</th>
          <th>State</th>
        </tr>
        <tr v-for="torrent in torrents" :key="torrent.hash">
          <td>{{torrent.name}}</td>
          <td>{{torrent.downloaded}}</td>
          <td>{{torrent.timeRemaining}}</td>
          <td>{{torrent.state}}</td>
        </tr>
      </table>
    </div>
    <div v-else>
      No torrents currently
    </div>
    <button @click="redirect">Home</button>
  </div>
</template>

<script>
import api from '../api/torrents'

export default {
  name: 'Home',
  data () {
    return {
      torrents: [
        {
          name: "Avengers Infinity Wars XXX",
          hash: "abc123",
          downloaded: "4GB",
          timeRemaining: "1h33m",
          state: "Downloading"
        },
        {
          name: "Avengers The Revenge of the Cucks XXX",
          hash: "abc1234",
          downloaded: "2GB",
          timeRemaining: "3h33m",
          state: "Downloading"
        }
      ]
    }
  },
  methods: {
    redirect() {
      this.$router.push("/")
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
