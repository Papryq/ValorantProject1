<template>
  <div class="map-container">
    <!-- <TheIntro />
    <div class="slider"></div> -->
    <TheNavbar />
    <div class="container-fluid agents-wrapper">
      <div class="row">
        <LeftBox />
        <AgentList :agents="agents" :minimapPath="currentMapImgPath" :points="currentMapPoints"/>
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

  watch: {
    $route(to, from) {
      if(to!==from && to.path !== '/') {
        const name = to.params.name;
        this.setCurrentMapPath(name)
        this.setCurrentMapPoints(name)
      }
    }
  },

  data() {
    return {
      agents: [],
      maps: [],
      currentMapImgPath: '',
      currentMapPoints: []
    }
  },

  created() {
      this.setAgents()
      this.setMaps()
      this.setCurrentMapPath(this.name)
      this.setCurrentMapPoints(this.name)
    },

    methods: {
<<<<<<< HEAD
      executeStartAnimation() {
        gsap.timeline({ defaults: { ease: "power1.out" } }).to(".text", { y: "0%", duration: 1, stagger: 0.25 });
        gsap.timeline({ defaults: { ease: "power1.out" } }).to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
        gsap.timeline({ defaults: { ease: "power1.out" } }).to(".intro", { y: "-100%", duration: 1 }, "-=1");
        gsap.timeline({ defaults: { ease: "power1.out" } }).fromTo(".navbar", { opacity: 0 }, { opacity: 1, duration: 1 });
      },



      setCurrentMapPath() {
        const currentMap = this.maps.find(map => map.urlName == this.name)
=======
      setCurrentMapPath(name) {
        const currentMap = this.maps.find(map => map.urlName == name)
>>>>>>> a263609c2591b67ffa166a4ca2d01fd2546a1bf5
        this.currentMapImgPath = currentMap.path
      },

      setCurrentMapPoints(name) {
        const currentMap = this.maps.find(map => map.urlName == name)
        this.currentMapPoints = currentMap.points
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
            path: 'AscentMap.png',
            points: [
              {
                id: '1',
                left: '66.5%',
                top: '24.5%',
              },
              {
                id: '2',
                left: '58.5%',
                top: '25.5%',
              },
              {
                id: '3',
                left: '57.5%',
                top: '41%',
              },
              {
                id: '4',
                left: '55.5%',
                top: '68%',
              },
              {
                id: '5',
                left: '60%',
                top: '69.5%',
              },
              {
                id: '6',
                left: '75.5%',
                top: '73.5%',
              },
              {
                id: '7',
                left: '60%',
                top: '89%',
              },
            ],
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
            path: 'HavenMap.png',
            points: [
              {
                id: '1',
                left: '56%',
                top: '40.7%',
              },
              {
                id: '2',
                left: '65.4%',
                top: '76%',
              },
              {
                id: '3',
                left: '70.6%',
                top: '74.5%',
              },
              {
                id: '4',
                left: '67%',
                top: '34%',
              },
              {
                id: '5',
                left: '71.5%',
                top: '38.5%',
              },
              {
                id: '6',
                left: '72.5%',
                top: '45%',
              },
            ],
            bestAgents: [],
            worstAgents: [],
          },
          {
            id: '3',
            name: 'Split',
            urlName: 'split',
            path: 'SplitMap.png',
            points: [
              {
                id: '1',
                left: '65.3%',
                top: '13.3%',
              },
              {
                id: '2',
                left: '58%',
                top: '17%',
              },
              {
                id: '3',
                left: '68.8%',
                top: '72.2%',
              },
            ],
            bestAgents: [],
            worstAgents: [],
          },
          {
            id: '4',
            name: 'Bind',
            urlName: 'bind',
            path: 'BindMap1.png',
            points: [
              {
                id: '1',
                left: '57.2%',
                top: '42.5%',
              },
              {
                id: '2',
                left: '56.7%',
                top: '68.5%',
              },
              {
                id: '3',
                left: '56.5%',
                top: '82.5%',
              },
            ],
            bestAgents: [],
            worstAgents: [],
          },
          {
            id: '5',
            name: 'Icebox',
            urlName: 'icebox',
            path: 'IceboxMap.png',
            points: [
              {
                id: '1',
                left: '55%',
                top: '26%',
              },
              {
                id: '2',
                left: '54.5%',
                top: '84.5%',
              },
            ],
            bestAgents: [],
            worstAgents: [],
          },
          {
            id: '6',
            name: 'Breeze',
            urlName: 'breeze',
            path: 'BreezeMap.png',
            points: [
              {
                id: '1',
                left: '52.5%',
                top: '15%',
              },
              {
                id: '2',
                left: '45.5%',
                top: '56.5%',
              },
              {
                id: '3',
                left: '73%',
                top: '46%',
              },
            ],
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