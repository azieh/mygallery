<template>
  <v-app>
    <v-content>
        <Instagram></Instagram>
    </v-content>

    <v-footer class="justify-center" color="#292929" height="100">
      <div
        class="title font-weight-light grey--text text--lighten-1 text-center"
      >&copy; {{ (new Date()).getFullYear() }} — Wasyl Destroyer</div>
    </v-footer>
  </v-app>
</template>

<script>
import Instagram from './components/Instagram'
export default {
  name: "App",

  components: {
    Instagram
  }
};
</script>
