<template>
    <button :class="agentButtonClass" :id="agent.id" @click="this.$emit('selectAgent', agent.id)">
        <img :src="require(`@/assets/${agent.path}`)">
        {{agent.name}}
    </button>
</template>

<script>
export default {
    name: 'AgentButton',
    props: {
        agent: Object,
        agentButtonClass: String
    },

}
</script>

<style scoped>
    .selected {
        color: green;
    }

    .dropdown-item:hover {
        background-color: #444
    }

    .dropdown-item:focus {
        background-color: black;
    }
</style>