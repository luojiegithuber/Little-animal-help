import { Commit } from 'vuex';
import { apiGetSwiperImgs } from '@/api/home';
const state: any = {
    swiperImgs: [],
};

const getters: any = {
    swiperImgs: () => state.swiperImgs,
};

const mutations: any = {
    saveSwiperImgs(states: any, data: any) {
        states.swiperImgs = data;
      }
};

const actions: any = {
    // 获取本地的数据
    async swiperImgs(context: { commit: Commit }) {
        console.log('通过action获取swiperImgs数据');
        const res: any = {
            Code: 1,
            List: [
                {src: require("../../assets/中国小动物保护协会.jpg"), name: ''},
                {src: require("../../assets/苏州小动物保护协会.jpg"), name: ''},
                {src: require("../../assets/长沙小动物保护协会.jpg"), name: ''} ]
        };
        context.commit('saveSwiperImgs', res.List);
    },

    async fetchPetInfo(context: { commit: Commit }, data: any) {
        
        const res: any = await apiGetSwiperImgs(data, null);
        console.log('通过action获取swiperImgs数据',res);
        context.commit('saveSwiperImgs', res);
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
