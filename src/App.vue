<template>
  <div id="app" class="bg-[#1F1F1F] min-h-screen text-white font-montserrat selection:bg-yellow-500 selection:text-black">
    <NavBar v-if="!['login', 'dashboard', 'hr-dashboard', 'hr-account', 'hr-payslips', 'om-dashboard', 'dept-head-dashboard', 'admin-dashboard'].includes($route.name)" />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      destroySessionTimer: null
    }
  },
  mounted() {
    this.startSessionTracker();
  },
  beforeUnmount() {
    this.stopSessionTracker();
  },
  methods: {
    startSessionTracker() {
      ['click', 'mousemove', 'keydown', 'scroll', 'touchstart'].forEach(event => {
        window.addEventListener(event, this.resetTimer);
      });
      this.resetTimer();
    },
    stopSessionTracker() {
      ['click', 'mousemove', 'keydown', 'scroll', 'touchstart'].forEach(event => {
        window.removeEventListener(event, this.resetTimer);
      });
      if (this.destroySessionTimer) clearTimeout(this.destroySessionTimer);
    },
    resetTimer() {
      if (this.destroySessionTimer) clearTimeout(this.destroySessionTimer);
      
      // Only set timer if user is logged in
      if (localStorage.getItem('token')) {
         // Auto-logout after 15 minutes (900,000ms) of inactivity
         this.destroySessionTimer = setTimeout(this.logoutUser, 900000);
      }
    },
    logoutUser() {
      if (localStorage.getItem('token')) {
         localStorage.removeItem('token');
         localStorage.removeItem('user');
         alert('Session expired due to inactivity.');
         this.$router.push('/login');
      }
    }
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
