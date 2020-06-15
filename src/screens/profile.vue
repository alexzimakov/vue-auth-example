<template>
  <private-route>
    <h2>This is Profile page</h2>
    <pre>{{ JSON.stringify(authorizedUser, null, 2) }}</pre>
  </private-route>
</template>

<script>
import { mapState } from 'vuex';
import PrivateRoute from '@/components/private-route';

export default {
  name: 'profile',
  components: {
    PrivateRoute,
  },
  computed: mapState({
    authorizedUser: (state) => {
      return state.users[state.authorizedUserId];
    },
  }),
};
</script>

<style scoped></style>
