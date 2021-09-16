<template>
    <div class="map-lineups-video-wrapper px-5 py-3" :class="{active: isActive, hidden: !isActive}">
        <div class="row">
            <div class="col-12 justify-content-end d-flex">
                <button @click="$emit('closeLineupVideosWrapper')" class="d-flex justify-content-center align-items-center btn btn-outline-dark">
                    <i class="fas fa-times fs-2"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MapLineupsVideoWrapper',
    props: {
        isActive: Boolean
    }
}
</script>

<style scoped>
    .map-lineups-video-wrapper {
        background-color: #ffffffd1;
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

    @keyframes slideFromTop {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        }

        100% {
            opacity: 1;
            transform: translateY(0%);
        }
    }

    button {
        background-color: white;
        border-radius: 50%;
        border: 0;
        width: 2.8rem;
        height: 2.8rem;
    }
    
</style>