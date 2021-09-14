<template>
          <section>
            <div class="container">
              <div class="row text-center py-3">
                <div class="col-md">
                  <div   @mouserover="actionHover()">
                    <video width="320" height="240">
                      <source src="@/assets/Video/fela.mp4" type="video/mp4">
                      <source src ="@/assets/Video/fela.mp4" type="video/ogg">
                    </video>              
                  </div>
                </div>
                <div class="col-md">
                           <div class="player-container">
                            <vue3-video-player @play="your_method" src="./videos/your_video.mp4"></vue3-video-player>
                            </div>       
                  </div>
                </div>
                 <div class="col-md">
                  <div class="card shadow-lg" style="width: 18rem;">
                    <img src="" class="card-img-top" alt="">
                    <div class="card-body">
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                 </div>
                 <div class="col-md">
                  <div class="card shadow-lg" style="width: 18rem;">
                    <img src="" class="card-img-top" alt="">
                    <div class="card-body">
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                 </div>
              </div>
            </div>
          </section>
</template>

<script>

export default {
    name: 'TheBoxes',
}

</script>

<style scoped>
 .col-md {
   padding: 0 10px 40px 10px;
 }



</style>