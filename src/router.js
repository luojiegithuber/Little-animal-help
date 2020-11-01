import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Another from '@/views/another/Another.vue';
import Stray from '@/views/stray/index.vue';

Vue.use(Router);

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页',
      },
    },
    {
      path: '/another',
      name: 'another',
      component: Another,
      meta: {
        title: 'vuex测试页面',
      },
    },
    {
      path: '/stray',
      name: 'stray',
      component: Stray,
      meta: {
        title: '帮·流浪动物',
      },
    },
  ],
});

