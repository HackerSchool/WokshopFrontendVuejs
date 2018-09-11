<template>

  <div id="player">
    <video id="video" class="video-js vjs-default-skin vjs-big-play-centered" controls preload width="640" height="360"></video>
  </div>
</template>
<script src="http://vjs.zencdn.net/4.5/video.js"></script>
<script>
export default {
  name: 'Stream',
  data() {
      return {

      }
    },
    props: {
      infoHash: {
        required: false,  // selected application
        type: String
      }
    },
    mounted() {
    },
    computed: {

    },
    methods: {

    }
  }
</script>
