<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  async created () {
    this.isBusy = true
    try {
      await this.$store.dispatch('fetchData')
    } catch (ex) {
      this.error = 'Failed to load data'
    } finally {
      this.isBusy = false
    }
  }
}
</script>

<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<style>
@import "./assets/CSS/KzStyle/Style.css";
</style>
