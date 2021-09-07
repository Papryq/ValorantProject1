<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand px-3" href="">
            <i class="bi bi-github">Valorant Project</i>
        </a>
        <NavbarCollapse />
        <NavbarList />
    </nav>

</template>

<script>
import NavbarList from '@/home-components/NavbarList.vue'
import NavbarCollapse from '@/home-components/NavbarCollapse.vue'


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
    }

</style>