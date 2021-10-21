<template>
                <div class="col-xl-3 clip">
                  <h1> {{ clip.name }}</h1> 
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ut!</p>
                   <router-link :to="{ name: 'HomeClip', params: { id: clip.name } }">
                    <video muted width="300" height="200" loop="" @mouseover="videoControl(true)" @mouseleave="videoControl(false)" :data-clip-id="clip.id">
                      <source :src="require(`@/assets/video/${clip.path}`)" type="video/mp4" >
                      <source  :src="require(`@/assets/video/${clip.path}`)" type="video/ogg">
                    </video>  
                   </router-link>

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
              videoPlayer.play();
              videoPlayer.playbackRate = 1.5;
            }
            else
            {
              videoPlayer.pause();
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
   padding-bottom: 30px;
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

<style scoped>
video {
  cursor: pointer;
}
</style>
