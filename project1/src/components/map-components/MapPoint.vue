<template>
    <button @click="$emit('activeLineupWrapper')" class="map-point" :style="point">
    </button>
</template>

<script>
export default {
    name: 'MapPoint',
    props: {
        point: Object
    },
}
</script>

<style scoped>
    .map-point {
        height: 1rem;
        width: 1rem;
        background-color: #ffff00BB;
        opacity: .8;
        cursor: pointer;
        position: absolute;
        border: 0;
        border-radius: 50%;
    }

    .map-point:hover {
        background-color: yellow;
        box-shadow: 0rem 0rem 1.2rem .3rem yellow;
        transition: all 0.1s ease;
    }

    @media only screen and (max-width: 992px)  {
        .map-point {
            height: .7rem;
            width: .7rem;
        }
    }

    @media only screen and (max-width: 576px)  {
        .map-point {
            height: .5rem;
            width: .5rem;
        }
    }

    @media only screen and (max-width: 400px)  {
        .map-point {
            height: .3rem;
            width: .3rem;
        }
    }
</style>