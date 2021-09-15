<template>
          <section>
              <div class="row text-center">
                <TheBox :key="clip.id" v-for="clip in clips" :clip="clip" />
              </div>
          </section>
</template>

<script>
import TheBox from './TheBox.vue'


export default {
    name: 'TheBoxes',
     props: {
        clips: Array,
    },
    components: {
      TheBox,
    },

}

</script>

<style scoped>


</style>