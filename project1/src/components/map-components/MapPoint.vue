<template>
    <button class="map-point" :style="point">
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
        box-shadow: 0rem 0rem 1.5rem .7rem yellow;
    }
</style>