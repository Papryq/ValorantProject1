<template>
          <section>
              <div class="row text-center">
                <div class="col-md-3">
                    <video width="200" height="280" loop="" @mouseover="videoControl" @mouseleave="videoControlStop">
                      <source src="@/assets/Video/fela.mp4" type="video/mp4">
                      <source src ="@/assets/Video/fela.mp4" type="video/ogg">
                    </video>              
                </div>
                <div class="col-md-3">
                    <video width="200" height="280" loop="" @mouseover="videoControl" @mouseleave="videoControlStop">
                      <source src="@/assets/Video/fela.mp4" type="video/mp4">
                      <source src ="@/assets/Video/fela.mp4" type="video/ogg">
                    </video>   
                  </div>
                 <div class="col-md-3">
                    <video width="200" height="280" loop="" @mouseover="videoControl" @mouseleave="videoControlStop">
                      <source src="@/assets/Video/fela.mp4" type="video/mp4">
                      <source src ="@/assets/Video/fela.mp4" type="video/ogg">
                    </video>   
                 </div>
                 <div class="col-md-3">
                    <video width="200" height="280" loop="" @mouseover="videoControl" @mouseleave="videoControlStop">
                      <source src="@/assets/Video/fela.mp4" type="video/mp4">
                      <source src ="@/assets/Video/fela.mp4" type="video/ogg">
                    </video>   
                 </div>
              </div>
          </section>
</template>

<script>

export default {
    name: 'TheBoxes',
      methods: {
        videoControl() {
          const videoPlayer = document.querySelector('video');
            if(videoPlayer.paused){
              videoPlayer.play();
            }
            else {
              videoControlStop = videoPlayer.currentTime = 0;
            }
        }
      }

}

</script>

<style scoped>
 .col-md {
   padding: 0 5px 40px 10px;
 }
video {
  cursor: pointer;
}

.col-md-3 {
  border: 1px solid #212529;
  border-radius: 10%;
}


</style>