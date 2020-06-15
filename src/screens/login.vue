<template>
  <div>
    <h2>This is login page</h2>
    <form v-on:submit.prevent="handleSubmit">
      <input type="text" placeholder="username" v-model="username" />
      <br />
      <input type="password" placeholder="password" v-model="password" />
      <br />
      <button>{{ loading ? 'Logging in...' : 'Log in' }}</button>
    </form>
    <div v-if="error">{{ error.message }}</div>
  </div>
</template>

<script>
import axios from 'axios';
import { logIn } from '@/api';
import router from '@/router';

export default {
  name: 'login',
  data() {
    return {
      loading: false,
      error: null,
      username: '',
      password: '',
    };
  },
  methods: {
    async logIn() {
      this.loading = true;
      this.error = null;
      try {
        const { user, accessToken } = await logIn(this.username, this.password);
        this.$store.commit('authenticate', user);
        window.localStorage.setItem('accessToken', accessToken);
        axios.defaults.headers.authorization = `Bearer ${accessToken}`;
        // https://router.vuejs.org/ru/guide/essentials/navigation.html
        router.push('/'); // или this.$router.push('/');
      } catch (e) {
        this.error = e;
      } finally {
        this.loading = false;
      }
    },
    handleSubmit() {
      this.logIn();
    },
  },
  beforeMount() {
    const { $store, $router } = this;

    if ($store.state.authorizedUserId) {
      $router.push('/');
    }
  },
};
</script>

<style scoped></style>
