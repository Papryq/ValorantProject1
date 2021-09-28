<template>
                <div class="col-xl-3">
                    <video muted width="300" height="480" loop="" :id="clip.id" @mouseover="videoControl(true, clip.id)" @mouseleave="videoControl(false, clip.id)">
                      <source :src="require(`@/assets/video/${clip.path}`)" type="video/mp4" >
                      <source  :src="require(`@/assets/video/${clip.path}`)" type="video/ogg">
                    </video>  

                    <h1> {{ clip.name }}</h1> 
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
          const videoPlayer = document.querySelector('video');
            if(isHovering == true)
            {
              console.log('Play')
              videoPlayer.play();
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
