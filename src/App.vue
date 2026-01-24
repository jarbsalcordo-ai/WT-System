<template>
  <div id="app" class="bg-[#1F1F1F] min-h-screen text-white font-montserrat selection:bg-yellow-500 selection:text-black">
    <NavBar v-if="!['login', 'dashboard', 'hr-dashboard', 'hr-account', 'hr-payslips', 'om-dashboard', 'dept-head-dashboard'].includes($route.name)" />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
/* Global Styles */
body {
  margin: 0;
  background-color: #1F1F1F; /* Match the app background */
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
