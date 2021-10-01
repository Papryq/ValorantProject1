<template>
    <div class="map-lineups-video-wrapper px-5 py-3" :class="{active: isActive, hidden: !isActive}">
        <div class="row">
            <div class="col-12 justify-content-end d-flex">
                <button @click="$emit('closeLineupVideosWrapper')" class="d-flex justify-content-center align-items-center btn btn-outline-dark">
                    <i class="fas fa-times fs-2"></i>
                </button>
            </div>
        </div>

        <div class="row justify-content-xl-start justify-content-center">
            <VideoWrapper :key="video.id" v-for="video in videos" :video="video" />
        </div>
    </div>
</template>

<script>
import VideoWrapper from './VideoWrapper.vue'

export default {
    name: 'MapLineupsVideoWrapper',
    props: {
        isActive: Boolean
    },

    components: {
        VideoWrapper
    },

    data() {
        return {
            videos: []
        }
    },

    created() {
        this.videos = [
        {
            id: '1',
            name: 'clip1',
            path: '1.mp4'
        },

        {
            id: '2',
            name: 'clip2',
            path: '2.mp4'
        },

        {
            id: '3',
            name: 'clip3',
            path: '3.mp4'
        },

        {
            id: '4',
            name: 'clip4',
            path: '4.mp4'
        },
      ]
    },
}
</script>

<style scoped>
    .map-lineups-video-wrapper {
        background-color: #ffffffee;
        position: absolute;
        height: 100%;
        opacity: 0;
        transform: translateY(-100%);
        transition: all .5s;
    }

    .active {
        opacity: 1;
        transform: translateY(0);
        z-index: 90;
    }

    button {
        background-color: white;
        border-radius: 50%;
        border: 0;
        width: 2.8rem;
        height: 2.8rem;
    }

    .video-wrapper {
        opacity: 0;
    }

    .active .video-wrapper {
        opacity: 1;
        transition-delay: 2s;
        transition: ease-in 1s;
    }
    
</style>