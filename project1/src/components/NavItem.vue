<template>
    <router-link  class="text-capitalize dropdown-item" :to="`/maps/${map.name}`">
        {{map.name}}
    </router-link>
</template>

<script>
export default {
    name: 'NavItem',

    props: {
        map: Object
    }
}
</script>
