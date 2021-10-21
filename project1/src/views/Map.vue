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
      window.addEventListener('resize', this.setCurrentMapPointsAfterResize);
    },

    methods: {
      getCurrentMapPoints(currentMap) {
        if(screen.width>1600)
          return currentMap.points
        if(screen.width>1400)
          return currentMap.pointsXXXL
        if(screen.width>1200)
          return currentMap.pointsXXL
        if(screen.width>992)
          return currentMap.pointsXL
        if(screen.width>768)
          return currentMap.pointsLG
        else return currentMap.pointsMD
      },

      setCurrentMapPath(name) {
        const currentMap = this.maps.find(map => map.urlName == name)
        this.currentMapImgPath = currentMap.path
      },

      setCurrentMapPointsAfterResize() {
        const currentMap = this.maps.find(map => map.urlName == this.name)
        this.currentMapPoints = this.getCurrentMapPoints(currentMap)
      },

      setCurrentMapPoints(name) {
        const currentMap = this.maps.find(map => map.urlName == name)
        this.currentMapPoints = this.getCurrentMapPoints(currentMap)
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
                left: '60.6%',
                top: '20%',
              },
              {
                id: '2',
                left: '47%',
                top: '22.2%',
              },
              {
                id: '3',
                left: '45.2%',
                top: '39.5%',
              },
              {
                id: '4',
                left: '42%',
                top: '70%',
              },
              {
                id: '5',
                left: '49.5%',
                top: '71.5%',
              },
              {
                id: '6',
                left: '75.5%',
                top: '75.5%',
              },
              {
                id: '7',
                left: '49.5%',
                top: '93.5%',
              },
            ],

            pointsXXXL: [
              {
                id: '1',
                left: '62.6%',
                top: '20%',
              },
              {
                id: '2',
                left: '46.4%',
                top: '22.2%',
              },
              {
                id: '3',
                left: '44.2%',
                top: '39.2%',
              },
              {
                id: '4',
                left: '41%',
                top: '70%',
              },
              {
                id: '5',
                left: '49%',
                top: '71%',
              },
              {
                id: '6',
                left: '80.5%',
                top: '75.6%',
              },
              {
                id: '7',
                left: '49.1%',
                top: '93.5%',
              },
            ],
            pointsXXL: [
              {
                id: '1',
                left: '64%',
                top: '20%',
              },
              {
                id: '2',
                left: '46%',
                top: '22%',
              },
              {
                id: '3',
                left: '43.5%',
                top: '39.2%',
              },
              {
                id: '4',
                left: '39%',
                top: '70%',
              },
              {
                id: '5',
                left: '49%',
                top: '71%',
              },
              {
                id: '6',
                left: '83.5%',
                top: '75.6%',
              },
              {
                id: '7',
                left: '49.1%',
                top: '93.5%',
              },
            ],
            pointsXL: [
              {
                id: '1',
                left: '63%',
                top: '20%',
              },
              {
                id: '2',
                left: '46.3%',
                top: '22%',
              },
              {
                id: '3',
                left: '44%',
                top: '39.2%',
              },
              {
                id: '4',
                left: '40%',
                top: '70%',
              },
              {
                id: '5',
                left: '49%',
                top: '71%',
              },
              {
                id: '6',
                left: '80.7%',
                top: '75.6%',
              },
              {
                id: '7',
                left: '49.1%',
                top: '93.5%',
              },
            ],
            pointsLG: [
              {
                id: '1',
                left: '64%',
                top: '20%',
              },
              {
                id: '2',
                left: '46%',
                top: '22%',
              },
              {
                id: '3',
                left: '43.5%',
                top: '39.2%',
              },
              {
                id: '4',
                left: '40%',
                top: '70%',
              },
              {
                id: '5',
                left: '49%',
                top: '71%',
              },
              {
                id: '6',
                left: '84%',
                top: '76%',
              },
              {
                id: '7',
                left: '49.1%',
                top: '94%',
              },
            ],
            pointsMD: [
              {
                id: '1',
                left: '64%',
                top: '20%',
              },
              {
                id: '2',
                left: '46%',
                top: '22%',
              },
              {
                id: '3',
                left: '43.5%',
                top: '39.2%',
              },
              {
                id: '4',
                left: '40%',
                top: '70%',
              },
              {
                id: '5',
                left: '49%',
                top: '71%',
              },
              {
                id: '6',
                left: '84%',
                top: '76%',
              },
              {
                id: '7',
                left: '49.1%',
                top: '94%',
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
                left: '43%',
                top: '39%',
              },
              {
                id: '2',
                left: '58.3%',
                top: '78.5%',
              },
              {
                id: '3',
                left: '67.4%',
                top: '77%',
              },
              {
                id: '4',
                left: '61%',
                top: '31.5%',
              },
              {
                id: '5',
                left: '69%',
                top: '36.5%',
              },
              {
                id: '6',
                left: '70.8%',
                top: '44.2%',
              },
            ],
            pointsXXXL: [
              {
                id: '1',
                left: '41.5%',
                top: '39%',
              },
              {
                id: '2',
                left: '60%',
                top: '78.5%',
              },
              {
                id: '3',
                left: '71%',
                top: '77%',
              },
              {
                id: '4',
                left: '63.5%',
                top: '31.5%',
              },
              {
                id: '5',
                left: '72.6%',
                top: '36.5%',
              },
              {
                id: '6',
                left: '75%',
                top: '44.2%',
              },
            ],
            pointsXXL: [
              {
                id: '1',
                left: '40.3%',
                top: '39%',
              },
              {
                id: '2',
                left: '61%',
                top: '78.5%',
              },
              {
                id: '3',
                left: '73%',
                top: '77%',
              },
              {
                id: '4',
                left: '64.5%',
                top: '31.5%',
              },
              {
                id: '5',
                left: '75%',
                top: '36.5%',
              },
              {
                id: '6',
                left: '77.5%',
                top: '44.2%',
              },
            ],
            pointsXL: [
              {
                id: '1',
                left: '40%',
                top: '38.7%',
              },
              {
                id: '2',
                left: '60.5%',
                top: '78.3%',
              },
              {
                id: '3',
                left: '72.5%',
                top: '77.2%',
              },
              {
                id: '4',
                left: '64.2%',
                top: '31.3%',
              },
              {
                id: '5',
                left: '74.5%',
                top: '36.5%',
              },
              {
                id: '6',
                left: '77%',
                top: '43.5%',
              },
            ],
            pointsLG: [
              {
                id: '1',
                left: '40.8%',
                top: '39.4%',
              },
              {
                id: '2',
                left: '61.2%',
                top: '78.3%',
              },
              {
                id: '3',
                left: '73%',
                top: '77.2%',
              },
              {
                id: '4',
                left: '64.8%',
                top: '31.6%',
              },
              {
                id: '5',
                left: '75.3%',
                top: '36.5%',
              },
              {
                id: '6',
                left: '77.8%',
                top: '44.7%',
              },
            ],
            pointsMD: [
              {
                id: '1',
                left: '39.5%',
                top: '39.4%',
              },
              {
                id: '2',
                left: '59%',
                top: '78.3%',
              },
              {
                id: '3',
                left: '71%',
                top: '77.2%',
              },
              {
                id: '4',
                left: '63%',
                top: '31.6%',
              },
              {
                id: '5',
                left: '73%',
                top: '36.5%',
              },
              {
                id: '6',
                left: '76%',
                top: '44.7%',
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
                left: '58.3%',
                top: '8.4%',
              },
              {
                id: '2',
                left: '46.4%',
                top: '13%',
              },
              {
                id: '3',
                left: '64.3%',
                top: '74.4%',
              },
            ],
            pointsXXXL: [
              {
                id: '1',
                left: '60.2%',
                top: '8.2%',
              },
              {
                id: '2',
                left: '45.6%',
                top: '12.6%',
              },
              {
                id: '3',
                left: '67%',
                top: '74.4%',
              },
            ],
            pointsXXL: [
              {
                id: '1',
                left: '61%',
                top: '8.2%',
              },
              {
                id: '2',
                left: '45.2%',
                top: '12.6%',
              },
              {
                id: '3',
                left: '68.7%',
                top: '74.4%',
              },
            ],
            pointsXL: [
              {
                id: '1',
                left: '61%',
                top: '8.2%',
              },
              {
                id: '2',
                left: '45.2%',
                top: '12.6%',
              },
              {
                id: '3',
                left: '68.7%',
                top: '74.4%',
              },
            ],
            pointsLG: [
              {
                id: '1',
                left: '61.5%',
                top: '8.2%',
              },
              {
                id: '2',
                left: '45.2%',
                top: '12.6%',
              },
              {
                id: '3',
                left: '69%',
                top: '74.4%',
              },
            ],
            pointsMD: [
              {
                id: '1',
                left: '60.3%',
                top: '8.2%',
              },
              {
                id: '2',
                left: '45.2%',
                top: '12.6%',
              },
              {
                id: '3',
                left: '68%',
                top: '74.4%',
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
                left: '45%',
                top: '41.4%',
              },
              {
                id: '2',
                left: '44%',
                top: '70.5%',
              },
              {
                id: '3',
                left: '43.7%',
                top: '86%',
              },
            ],
            pointsXXXL: [
              {
                id: '1',
                left: '44%',
                top: '41.4%',
              },
              {
                id: '2',
                left: '43%',
                top: '70.5%',
              },
              {
                id: '3',
                left: '42.5%',
                top: '86%',
              },
            ],
            pointsXXL: [
              {
                id: '1',
                left: '43.5%',
                top: '41%',
              },
              {
                id: '2',
                left: '42.2%',
                top: '70.2%',
              },
              {
                id: '3',
                left: '41.7%',
                top: '85.8%',
              },
            ],
            pointsXL: [
              {
                id: '1',
                left: '43.5%',
                top: '41%',
              },
              {
                id: '2',
                left: '42.2%',
                top: '70.2%',
              },
              {
                id: '3',
                left: '41.7%',
                top: '85.8%',
              },
            ],
            pointsLG: [
              {
                id: '1',
                left: '43.5%',
                top: '41.5%',
              },
              {
                id: '2',
                left: '42.2%',
                top: '70.7%',
              },
              {
                id: '3',
                left: '41.7%',
                top: '86.1%',
              },
            ],
            pointsLG: [
              {
                id: '1',
                left: '43.5%',
                top: '41.5%',
              },
              {
                id: '2',
                left: '42.2%',
                top: '70.7%',
              },
              {
                id: '3',
                left: '41.7%',
                top: '86.1%',
              },
            ],
            pointsMD: [
              {
                id: '1',
                left: '43.5%',
                top: '41.5%',
              },
              {
                id: '2',
                left: '42.2%',
                top: '70.7%',
              },
              {
                id: '3',
                left: '41.7%',
                top: '86.1%',
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
                left: '41.5%',
                top: '22.5%',
              },
              {
                id: '2',
                left: '40.5%',
                top: '87%',
              },
            ],
            pointsXXXL: [
              {
                id: '1',
                left: '39.9%',
                top: '22.5%',
              },
              {
                id: '2',
                left: '38.5%',
                top: '87.2%',
              },
            ],
            pointsXXL: [
              {
                id: '1',
                left: '38.7%',
                top: '22.5%',
              },
              {
                id: '2',
                left: '37.5%',
                top: '87.2%',
              },
            ],
            pointsXL: [
              {
                id: '1',
                left: '38.7%',
                top: '22.5%',
              },
              {
                id: '2',
                left: '37.5%',
                top: '87.2%',
              },
            ],
            pointsLG: [
              {
                id: '1',
                left: '38.7%',
                top: '23%',
              },
              {
                id: '2',
                left: '37.5%',
                top: '88%',
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
                left: '37%',
                top: '10.5%',
              },
              {
                id: '2',
                left: '25.7%',
                top: '57.3%',
              },
              {
                id: '3',
                left: '71.4%',
                top: '45%',
              },
            ],
            pointsXXXL: [
              {
                id: '1',
                left: '34.5%',
                top: '10.5%',
              },
              {
                id: '2',
                left: '21%',
                top: '57.3%',
              },
              {
                id: '3',
                left: '75.6%',
                top: '45%',
              },
            ],
            pointsXXL: [
              {
                id: '1',
                left: '32.8%',
                top: '10.5%',
              },
              {
                id: '2',
                left: '17.8%',
                top: '57%',
              },
              {
                id: '3',
                left: '78.4%',
                top: '45%',
              },
            ],
            pointsXL: [
              {
                id: '1',
                left: '32.8%',
                top: '10.5%',
              },
              {
                id: '2',
                left: '17.8%',
                top: '57%',
              },
              {
                id: '3',
                left: '78.4%',
                top: '45%',
              },
            ],
            pointsLG: [
              {
                id: '1',
                left: '32.8%',
                top: '10.5%',
              },
              {
                id: '2',
                left: '17.8%',
                top: '57%',
              },
              {
                id: '3',
                left: '78.4%',
                top: '45%',
              },
            ],
            pointsMD: [
              {
                id: '1',
                left: '32.8%',
                top: '10.5%',
              },
              {
                id: '2',
                left: '17.8%',
                top: '57%',
              },
              {
                id: '3',
                left: '78.4%',
                top: '45%',
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