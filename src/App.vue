<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
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
