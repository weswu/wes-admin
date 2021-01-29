<template>
  <v-app id="blog">
    <Header/>
    <router-view/>
    <Footer/>
    <div :class="'header__overlay' + ($store.state.open ? ' --open' : '')" @click="open"></div>
  </v-app>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'

  export default {
    components: {
      Header, Footer
    },
    methods: {
      open() {
        this.$store.commit('setOpen', false)
      }
    }
  }
</script>

<style>

</style>
