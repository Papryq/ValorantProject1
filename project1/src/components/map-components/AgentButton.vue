<template>
    <button class="dropdown-item agentButton text-light" :id="agent.id"><img :src="require(`@/assets/${agent.path}`)">
        {{agent.name}}
    </button>
</template>

<script>
export default {
    name: 'AgentButton',
    props: {
        agent: Object
    }
}
</script>