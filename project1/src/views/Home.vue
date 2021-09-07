<template>
  <div class="home">

    <TheNavbar />
    <TheShowChase />
    <TheBoxes />
    <TheTestomonial />
    <TheForm />
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import TheForm from '@/home-components/TheForm.vue'
import TheFooter from '@/home-components/TheFooter.vue'
import TheTestomonial from '@/home-components/TheTestomonial.vue'
import TheBoxes from '@/home-components/TheBoxes.vue'
import TheShowCase from '@/home-components/TheShowCase.vue'
import TheNavbar from '@/home-components/TheNavbar.vue'


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
