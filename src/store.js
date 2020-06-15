import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    authorizedUserId: null,
    users: {},
  },
  mutations: {
    authenticate(state, authorizedUser) {
      state.authorizedUserId = authorizedUser.id;
      state.users[authorizedUser.id] = authorizedUser;
    },
  },
  actions: {},
  modules: {},
});

export default store;
