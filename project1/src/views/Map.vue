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
          {
            id: '2',
            name: 'Omen',
            path: '@/assets/Omen1.png'
          },
          {
            id: '3',
            name: 'Killjoy',
            path: '@/assets/Killjoy1.png'
          },
                    {
            id: '4',
            name: 'Cypher',
            path: '@/assets/Cypher1.png'
          },
                    {
            id: '5',
            name: 'Sova',
            path: '@/assets/Sova1.png'
          },
                    {
            id: '6',
            name: 'Sage',
            path: '@/assets/Sage1.png'
          },
                    {
            id: '7',
            name: 'Pheoenix',
            path: '@/assets/Pheoenix1.png'
          },
                    {
            id: '8',
            name: 'Jett',
            path: '@/assets/Jett1.png'
          },
                    {
            id: '9',
            name: 'Reyna',
            path: '@/assets/Reyna1.png'
          },
                    {
            id: '10',
            name: 'Raze',
            path: '@/assets/Raze1.png'
          },
                    {
            id: '11',
            name: 'Breach',
            path: '@/assets/Breach1.png'
          },
          {
            id: '12',
            name: 'Skye',
            path: '@/assets/Skye1.png'
          },
          {
            id: '13',
            name: 'Yoru',
            path: '@/assets/Yoru1.png'
          },
          {
            id: '14',
            name: 'Astra',
            path: '@/assets/Astra1.png'
          },
          {
            id: '15',
            name: 'Kayo',
            path: '@/assets/Kayo1.png'
          },
        ]
      },

      setMaps() {
        this.maps = [
          {
            id: 'Ascent',
            name: 'Ascent',
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
          {
            id: 'Haven',
            name: 'Haven',
            path: '',
            bestAgents: [],
            worstAgents: [],
          },
          {
            id: 'Split',
            name: 'Split',
            path: '',
            bestAgents: [],
            worstAgents: [],
          },
          {
            id: 'Bind',
            name: 'Bind',
            path: '',
            bestAgents: [],
            worstAgents: [],
          },
          {
            id: 'Icebox',
            name: 'Icebox',
            path: '',
            bestAgents: [],
            worstAgents: [],
          },
          {
            id: 'Breeze',
            name: 'Breeze',
            path: '',
            bestAgents: [],
            worstAgents: [],
          },
        ]
      }
    }
}
</script>