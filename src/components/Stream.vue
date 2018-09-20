<template>
  <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"

                 @play="onPlayerPlay($event)"
                 @pause="onPlayerPause($event)"
                 @statechanged="playerStateChanged($event)"
                 @ready="playerReadied">
  </video-player>
</template>

<script>
  export default {
    name: 'Stream',
    props: {
      infoHash: {
        required: true,
        type: String
      },
      fileIndex: {
        required: true,
        type: Number
      }
    },
    data() {
      return {
        playerOptions: {
          muted: false,
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "http://localhost:3000/stream/video/" + this.infoHash + '/' + this.fileIndex
          }],
          poster: "/static/images/author.jpg",
        }
      }
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },

      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    }
  }
</script>
