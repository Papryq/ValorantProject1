<template>
    <!--AgentList-->
    <div class="d-flex px-4">
        <div class="agent-list">
            <AgentButton :key="agent.id" v-for="agent in agents" :agent="agent" />

            <!--MiniMap-->
            <div class="mini-map">
                <img :src="require(`@/assets/${minimapPath}`)" class="img-fluid">
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
    }
}
</script>

<style scoped>
    .agent-list {
        margin-left: 8rem;
    }

    .mini-map {
        margin-left: 2rem;
        padding-bottom: 3rem;
        border-left: solid 3px #212529;
        border-right: solid 3px #212529;
    }
</style>