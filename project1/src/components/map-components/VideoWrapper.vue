<template>
    <div class="col-xxl-2 col-lg-3 col-md-4 mx-2 video-wrapper">
        <div class="row">
            <div class="col-12 content-wrapper">
                <h6 class="m-0"> {{ video.name }}</h6> 
                <p class="m-0">Lorem ipsum dolor</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12 px-0">
                <video muted class="w-100" height="120" loop="" @mouseover="videoControl(true)" @mouseleave="videoControl(false)" :data-video-id="video.id">
                    <source :src="require(`@/assets/video/${video.path}`)" type="video/mp4" >
                    <source  :src="require(`@/assets/video/${video.path}`)" type="video/ogg">
                </video>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoWrapper',
    props: {
        video: Object
    },

    methods: {
        videoControl(isHovering) {
            const videoPlayer = document.querySelector(`[data-video-id='${this.video.id}']`);

            if(isHovering == true) {
              videoPlayer.play();
              video.playbackRate = 1.5;
            }
            
            else if (isHovering == false){
              videoPlayer.pause();
            }
        }
    }

}
</script>

<style scoped>

    .content-wrapper {
        background-color: #ffffffee;
    }
</style>

