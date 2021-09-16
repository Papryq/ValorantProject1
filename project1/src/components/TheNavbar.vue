<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <router-link class="navbar-brand px-3" to="/">
            <i class="bi bi-github">Valorant Project</i>
        </router-link>
        <NavbarCollapse />
        <NavbarList />
    </nav>

</template>

<script>
import NavbarList from '@/components/NavbarList.vue'
import NavbarCollapse from '@/components/NavbarCollapse.vue'


export default {
    name: 'TheNavbar',
    components: {
        NavbarList,
        NavbarCollapse,
    }
}
</script>



<style scoped>
    .navbar
    {
        border-bottom:solid 1px #212529;
        z-index: 100;
        position: sticky;
    }

</style>