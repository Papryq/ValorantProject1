<template>
  <div class="map-container">
    <!-- <TheIntro />
    <div class="slider"></div> -->
    <TheNavbar />
    <div class="container-fluid agents-wrapper">
      <div class="row">
        <LeftBox />
        <AgentList :agents="agents" :minimapPath="currentMapImgPath"/>
      </div>
    </div>
    <TheFooter />
  </div>

</template>

<script>
import TheIntro from '@/components/map-components/TheIntro'
import LeftBox from '@/components/map-components/LeftBox'
import AgentList from '@/components/map-components/AgentList'

export default {
  name: 'Map',
  components: {
    TheIntro,
    LeftBox,
    AgentList
  },

  props: {
    name: String
  },

  data() {
    return {
      agents: [],
      maps: [],
      currentMapImgPath: '',
    }
  },

  created() {
      this.setAgents()
      this.setMaps()
      this.executeStartAnimation()
      this.setCurrentMapPath()
    },

    methods: {
      executeStartAnimation() {
        gsap.timeline({ defaults: { ease: "power1.out" } }).to(".text", { y: "0%", duration: 1, stagger: 0.25 });
        gsap.timeline({ defaults: { ease: "power1.out" } }).to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
        gsap.timeline({ defaults: { ease: "power1.out" } }).to(".intro", { y: "-100%", duration: 1 }, "-=1");
        gsap.timeline({ defaults: { ease: "power1.out" } }).fromTo(".navbar", { opacity: 0 }, { opacity: 1, duration: 1 });
      },

      setCurrentMapPath() {
        const currentMap = this.maps.find(map => map.urlName == this.name)
        this.currentMapImgPath = currentMap.path
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
            urlName: 'ascent',
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
            urlName: 'haven',
            path: 'mapAscent3.png',
            bestAgents: [],
            worstAgents: [],
          },
          {
            id: '3',
            name: 'Split',
            urlName: 'split',
            path: 'mapAscent3.png',
            bestAgents: [],
            worstAgents: [],
          },
          {
            id: '4',
            name: 'Bind',
            urlName: 'bind',
            path: 'BindMap1.png',
            bestAgents: [],
            worstAgents: [],
          },
          {
            id: '5',
            name: 'Icebox',
            urlName: 'icebox',
            path: 'mapAscent3.png',
            bestAgents: [],
            worstAgents: [],
          },
          {
            id: '6',
            name: 'Breeze',
            urlName: 'breeze',
            path: 'mapAscent3.png',
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

  .agents-wrapper {
    min-height: 50.1rem;
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

  /* Leaving page animation */
  .route-enter-from {
    opacity: 0;
    transform: translateX(100px);
  }
  .route-enter-active {
    transition: all 0.3s ease-out;
  }

  .route-leave-to {
    opacity: 0;
    transform: translateX(100px);
  }

  .route-leave-active {
    transition: all 0.3s ease-in;
  }


</style>