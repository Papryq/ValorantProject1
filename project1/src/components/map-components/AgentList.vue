<template>
    <!--AgentList-->
    <div class="col-xl-9">
        <div class="container-fluid">
            <div class="row d-flex justify-content-xl-center justify-content-between position-relative">
                <div class="agent-list col-lg-2 me-5-xl py-4">
                    <AgentButton :key="agent.id" v-for="agent in agents" :agent="agent" @selectAgent="changeSelectedAgentId" :agentButtonClass="getAgentButtonClass(agent.id)"  />
                </div>
                <!-- LineupVideos -->
                <MapLineupsVideoWrapper @closeLineupVideosWrapper="closeLineupVideosWrapper" :isActive="isLineupWrapperActive" />
                <MinimapWrapper @activeLineupWrapper="activeLineupWrapper" :minimapPath="minimapPath" :points="points" />
            </div>
        </div>
    </div>
</template>

<script>
import AgentButton from './AgentButton'
import MinimapWrapper from './MinimapWrapper.vue'
import MapLineupsVideoWrapper from './MapLineupsVideoWrapper.vue'

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
        MapLineupsVideoWrapper
    },

    methods: {
        activeLineupWrapper() {
            this.isLineupWrapperActive = true
        },

        closeLineupVideosWrapper() {
            this.isLineupWrapperActive = false
        },

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
            isLineupWrapperActive: false
        }
    },
}
</script>
