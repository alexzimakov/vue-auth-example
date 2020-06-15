import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '@/screens/login';
import profile from '@/screens/profile';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: profile },
    { path: '/login', component: login },
  ],
  mode: 'history',
});

export default router;
