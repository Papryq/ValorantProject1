<template>
    <!--AgentList-->
    <div class="col-xl-9">
        <div class="container-fluid">
            <div class="row d-flex justify-content-xl-center justify-content-between">
                <div class="agent-list col-lg-2 me-5-xl py-4">
                    <AgentButton :key="agent.id" v-for="agent in agents" :agent="agent" @selectAgent="changeSelectedAgentId" :agentButtonClass="getAgentButtonClass(agent.id)"  />
                </div>
                <MinimapWrapper :minimapPath="minimapPath" :points="points" />
            </div>
        </div>
    </div>
</template>

<script>
import AgentButton from './AgentButton'
import MinimapWrapper from './MinimapWrapper.vue'

export default {
    name: 'AgentList',
    props: {
        agents: Array,
        minimapPath: String,
        points: Array
    },


    components: {
        AgentButton,
        MinimapWrapper,
    },

    methods: {
        changeSelectedAgentId(agentId) {
            this.selectedAgentId=agentId
        },

        getAgentButtonClass(agentId) {
            const agentButtonClass = (this.selectedAgentId===agentId ? "dropdown-item selected": "dropdown-item text-light")
            return agentButtonClass
        }
    },

    data() {
        return {
            selectedAgentId: '0',
        }
    },
}
</script>

<style scoped>

    .minimap-wrapper {
        border-left: solid 3px #212529;
        border-right: solid 3px #212529;
    }

    .minimap {
        height: 100%;
    }

    .map-point {
        height: 1rem;
        width: 1rem;
        background-color: #ffff00BB;
        opacity: .8;
        cursor: pointer;
        position: absolute;
        border: 0;
        border-radius: 50%;
        box-shadow: 0rem 0rem 1.5rem .7rem yellow;
    }
    .map-point:nth-child(2) {
        left: 1090px;
        top: 410px;
    }

    .map-point:nth-child(3) {
        left: 1080px;
        top: 662px;
    }

    .map-point:nth-child(4) {
        left: 56.5%;
        top: 82.5%;
    }
</style>