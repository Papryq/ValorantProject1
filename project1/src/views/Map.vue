<template>
  <div class="map-container">
    <Intro />
    <div class="slider"></div>
    <TheNavbar />
    <LeftBox />

  </div>
</template>

<script>
import TheIntro from '@/home-components/map-components/TheIntro'
import LeftBox from '@/home-components/map-components/LeftBox'

export default {
  name: 'Map',
  components: {
    TheIntro,
    LeftBox
  },

  data() {
    return {
      agents: [],
      maps: []
    }
  },

  created() {
      this.setAgents()
      this.executeStartAnimation()
    },

    methods: {
      executeStartAnimation() {
        const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

        tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
        tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
        tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
        tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
      },

      setAgents() {
        this.agents = [
          {
            id: '1',
            name: 'Brimstone',
            path: '@/assets/Brimstone1.png'
          },
        ]
      },

      setMaps() {
        this.maps = [
          {
            id: '1',
            name: 'Brimstone',
            path: '@/assets/mapAscent3.png',
            bestAgents: [
              {
                id: '1'
              },
              {
                id:'3'
              }
            ],
            worstAgents: [
              {
                id: '2'
              },
              {
                id:'4'
              }
            ]
          },
        ]
      }
    }
}
</script>