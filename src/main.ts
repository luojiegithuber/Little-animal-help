import Vue from 'vue';
import App from '@/App.vue';
import router from './router.js';
import store from './store';
import 'lib-flexible';

// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant)
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

