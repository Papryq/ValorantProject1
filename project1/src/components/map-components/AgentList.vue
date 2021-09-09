<template>
    <!--AgentList-->
    <div class="col-xl-9">
        <div class="container-fluid">
            <div class="row d-flex justify-content-xl-center justify-content-between">
                <div class="agent-list col-lg-2 me-5-xl py-4">
                    <AgentButton :key="agent.id" v-for="agent in agents" :agent="agent" @selectAgent="changeSelectedAgentId" :agentButtonClass="getAgentButtonClass(agent.id)"  />
                </div>
                <!--MiniMap-->
                <div class="minimap-wrapper col-lg-10 ms-5-xl d-flex justify-content-center text-center">
                    <img :src="require(`@/assets/${minimapPath}`)" class="img-fluid minimap">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AgentButton from './AgentButton'

export default {
    name: 'AgentList',
    props: {
        agents: Array,
        minimapPath: String
    },


    components: {
        AgentButton
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
</style>