<template>
    <button @click="$emit('activeLineupWrapper')" class="map-point" :style="point">
    </button>
</template>

<script>
export default {
    name: 'MapPoint',
    props: {
        point: Object
    }
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
</style>