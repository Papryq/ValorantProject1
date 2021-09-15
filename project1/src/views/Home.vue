<template>
  <div class="home">

    <TheNavbar />
    <TheShowCase />
    <TheBoxes  :clips="clips"/>
    <TheTestomonial />
    <TheForm />
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import TheForm from '@/components/home-components/TheForm.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheTestomonial from '@/components/home-components/TheTestomonial.vue'
import TheBoxes from '@/components/home-components/TheBoxes.vue'
import TheShowCase from '@/components/home-components/TheShowCase.vue'
import TheNavbar from '@/components/TheNavbar.vue'


export default {
  name: 'Home',
  components: {
    TheForm,
    TheFooter,
    TheTestomonial,
    TheBoxes,
    TheShowCase,
    TheNavbar,
  },
  data() {
    return {
      clips: [],
    }
  },

  created() {
    this.setLineupClips()
  },

  methods: {

    setLineupClips() {
      this.clips = [
          {
            id: '1',
            name: 'clip1',
            path: '@/assets/Video/video1.mp4'
          },
          {
            id: '2',
            name: 'clip2',
            path: '@/assets/Video/video2.mp4'
          },
                    {
            id: '3',
            name: 'clip3',
            path: '@/assets/Video/video3.mp4'
          },
          {
            id: '4',
            name: 'clip4',
            path: '@/assets/Video/video4.mp4'
          },
      ]
    },

  }
}
</script>

<style>
  .home{
    background: black;
  }

</style>
