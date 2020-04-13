<template>
  <v-app>
    <TopBar></TopBar>

    <v-content>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Instagram></Instagram>
    </v-content>

    <v-footer class="justify-center" color="#292929" height="100">
      <div
        class="title font-weight-light grey--text text--lighten-1 text-center"
      >&copy; {{ (new Date()).getFullYear() }} — Wasyl Destroyer for SurpriseMe.pl with &hearts;</div>
    </v-footer>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Instagram from './components/Instagram'
export default {
  name: "App",

  components: {
    TopBar,
    Hero,
    AboutMe,
    Instagram
  }
};
</script>
