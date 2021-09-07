<template>
    <!--AgentList-->
    <div class="col-lg-9">
        <div class="container-fluid">
            <div class="row">
                <div class="agent-list col-lg-3">
                    <AgentButton :key="agent.id" v-for="agent in agents" :agent="agent" />
                </div>
                <!--MiniMap-->
                <div class="mini-map col-lg-7">
                    <img :src="require(`@/assets/${minimapPath}`)" class="img-fluid">
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
    }
}
</script>

<style scoped>
    .agent-list {
        margin-left: 8rem;
    }

    .mini-map {
        height: 20rem;
        border-left: solid 3px #212529;
        border-right: solid 3px #212529;
    }
</style>