<template>

    <div class="minimap-wrapper p-0 m-0 col-lg-10 d-flex justify-content-center text-center">
        <!-- Minimap -->
        <img :src="require(`@/assets/${minimapPath}`)" class="img-fluid minimap">
        <!-- Points on minimap -->
        <MapPoint @activeLineupWrapper="$emit('activeLineupWrapper')" :key="point.id" v-for="point in points" :point="point" />
    </div>
</template>

<script>
import MapPoint from './MapPoint.vue'

export default {
    name: 'MinimapWrapper',
    props: {
        minimapPath: String,
        points: Array
    },

    components: {
        MapPoint,
    }
}
</script>

<style scoped>
    .minimap-wrapper {
        border-left: solid 3px #212529;
        border-right: solid 3px #212529;
        position: relative;
    }
</style>