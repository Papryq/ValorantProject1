<template>
    <!--MiniMap-->
    <div class="minimap-wrapper col-lg-10 ms-5-xl d-flex justify-content-center text-center">
        <img :src="require(`@/assets/${minimapPath}`)" class="img-fluid minimap">
        <MapPoint :key="point.id" v-for="point in points" :point="point" />
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
        MapPoint
    }
}
</script>