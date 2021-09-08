<template>
  <div class="home">

    <TheNavbar />
    <TheShowCase />
    <TheBoxes />
    <TheTestomonial />
    <TheForm />
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import TheForm from '@/components/home-components/TheForm.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheTestomonial from '@/components/home-components/TheTestomonial.vue'
import TheBoxes from '@/components/home-components/TheBoxes.vue'
import TheShowCase from '@/components/home-components/TheShowCase.vue'
import TheNavbar from '@/components/TheNavbar.vue'


export default {
  name: 'Home',
  components: {
    TheForm,
    TheFooter,
    TheTestomonial,
    TheBoxes,
    TheShowCase,
    TheNavbar,
  }
}
</script>

<style>
  .home{
    background: black;
  }

</style>
