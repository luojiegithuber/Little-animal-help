import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Another from "@/views/another/Another.vue";
import Stray from "@/views/stray/index.vue";
import PetDetail from "@/views/PetDetail.vue";
import RecommendResult from "@/views/RecommendResult.vue";

import Main from "@/views/Main.vue";
Vue.use(Router);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default new Router({
  routes: [
    {
      path: "/another",
      name: "another",
      component: Another,
      meta: {
        title: "vuex测试页面",
      },
    },
    {
      path: "/stray",
      name: "stray",
      component: Stray,
      meta: {
        title: "帮·流浪动物",
      },
    },
    {
      path: "/petdetail",
      name: "petdetail",
      component: PetDetail,
      meta: {
        title: "详情页",
      },
    },
    {
      path: "/resultlist",
      name: "resultlist",
      component: RecommendResult,
      meta: {
        title: "搜索结果",
      },
    },
    {
      path: "/",
      name: "Main",
      component: Main,
      meta: {
        title: "主页",
      },
    },
  ],
});
