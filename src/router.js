import Vue from 'vue';
import Router from 'vue-router';
import App from './App';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
    },
    {
      path: '/posts',
      component: () => import('./components/PostsList.vue'),
    },
    {
      path: '/user',
      component: () => import('./components/User.vue'),
    },
    {
      path:'/posts/post/:id',
      component: () => import('./components/PostItem.vue'), 
    },
    {
      path: '/user/:id',
      component: () => import('./components/User.vue'),
    },
  ],
});
