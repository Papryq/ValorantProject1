<template>
  <div class="map-container">
    <TheIntro />
    <div class="slider"></div>
    <TheNavbar />
    <LeftBox />
    <AgentList :agents="agents" minimapPath="mapAscent3.png"/>
    <TheFooter />
  </div>
</template>

<script>
import TheIntro from '@/home-components/map-components/TheIntro'
import LeftBox from '@/home-components/map-components/LeftBox'
import AgentList from '@/home-components/map-components/AgentList'

export default {
  name: 'Map',
  components: {
    TheIntro,
    LeftBox,
    AgentList
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
            path: 'Brimstone1.png'
          },
          {
            id: '2',
            name: 'Omen',
            path: 'Omen1.png'
          },
          {
            id: '3',
            name: 'Killjoy',
            path: 'Killjoy1.png'
          },
                    {
            id: '4',
            name: 'Cypher',
            path: 'Cypher1.png'
          },
                    {
            id: '5',
            name: 'Sova',
            path: 'Sova1.png'
          },
                    {
            id: '6',
            name: 'Sage',
            path: 'Sage1.png'
          },
                    {
            id: '7',
            name: 'Phoenix',
            path: 'Phoenix1.png'
          },
                    {
            id: '8',
            name: 'Jett',
            path: 'Jett1.png'
          },
                    {
            id: '9',
            name: 'Reyna',
            path: 'Reyna1.png'
          },
                    {
            id: '10',
            name: 'Raze',
            path: 'Raze1.png'
          },
                    {
            id: '11',
            name: 'Breach',
            path: 'Breach1.png'
          },
          {
            id: '12',
            name: 'Skye',
            path: 'Skye1.png'
          },
          {
            id: '13',
            name: 'Yoru',
            path: 'Yoru1.png'
          },
          {
            id: '14',
            name: 'Astra',
            path: 'Astra1.png'
          },
          {
            id: '15',
            name: 'Kayo',
            path: 'Kayo1.png'
          },
        ]
      },

      setMaps() {
        this.maps = [
          {
            id: '1',
            name: 'Ascent',
            path: 'mapAscent3.png',
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
            id: '2',
            name: 'Haven',
            path: '',
            bestAgents: [],
            worstAgents: [],
          },
          {
            id: '3',
            name: 'Split',
            path: '',
            bestAgents: [],
            worstAgents: [],
          },
          {
            id: '4',
            name: 'Bind',
            path: '',
            bestAgents: [],
            worstAgents: [],
          },
          {
            id: '5',
            name: 'Icebox',
            path: '',
            bestAgents: [],
            worstAgents: [],
          },
          {
            id: '6',
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

<style scoped>
  .map-container {
    background-color: black !important;
  }

  .slider {
    background: #212529;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(100%);
  }
</style>