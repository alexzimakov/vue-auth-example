<template>
  <div id="app">
    <div v-if="loading">
      Аутентификация...
    </div>
    <div v-else-if="error">
      {{ error.message }}
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { fetchProfile } from '@/api';

export default {
  name: 'App',
  data() {
    return {
      loading: false,
      error: null,
    };
  },
  components: {},
  beforeMount() {
    const accessToken = window.localStorage.getItem('accessToken');
    if (accessToken) {
      this.authenticate(accessToken);
    }
  },
  methods: {
    async authenticate(accessToken) {
      this.loading = true;
      this.error = null;

      try {
        const authorizedUser = await fetchProfile(accessToken);
        this.$store.commit('authenticate', authorizedUser);
        axios.defaults.headers.authorization = `Bearer ${accessToken}`;
      } catch (e) {
        this.error = e;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
