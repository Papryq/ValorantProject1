<template>
                <div class="col-xl-3">
                    <video width="200" height="280" loop="" @mouseover="videoControl" @mouseleave="videoControlStop">
                      <source :src="(`@/assets/Video/${clip.path}`)" type="video/mp4">
                      <source  :src="(`@/assets/Video/${clip.path}`)" type="video/ogg">
                    </video>   
                  </div>
</template>


<script>

export default {
    name: 'TheBox',
     props: {
        clip: Object,
    },

      methods: {
        videoControl() {
          const videoPlayer = document.querySelector('video');
            if(videoPlayer.paused){
              videoPlayer.playbackRate = 2;
              videoPlayer.play();
            }
            else {
              videoControlStop = videoPlayer.currentTime = 0;
              videoPlayer.pause();
            }
        }
      }

}


</script>
