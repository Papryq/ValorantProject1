<template>
                <div class="col-xl-3 clip">
                  <h1> {{ clip.name }}</h1> 
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ut!</p>
                    <video muted controls width="300" height="200" loop="" @mouseover="videoControl(true)" @mouseleave="videoControl(false)" :data-clip-id="clip.id">
                      <source :src="require(`@/assets/video/${clip.path}`)" type="video/mp4" >
                      <source  :src="require(`@/assets/video/${clip.path}`)" type="video/ogg">
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
        videoControl(isHovering) {
          const videoPlayer = document.querySelector(`[data-clip-id='${this.clip.id}']`);
            if(isHovering == true)
            {
              console.log('Play')
              videoPlayer.play();
              video.playbackRate = 1.5;
            }
            else if (isHovering == false)
            {
              videoPlayer.pause();
              console.log('Stop')
            }
            }


    }

}


</script>

<style scoped>
 .clip {
   border-right: 1px solid white;
   padding-right: 0px;
   padding-left: 0px;
   margin-top: 3rem;
 }

 h1 {
   color: white;
   font-family:monospace;
   font-size: 1.5rem;
 }
 p {
   text-align: center;
   margin-bottom: 0px;
   font-size: 1rem;
 }



</style>
