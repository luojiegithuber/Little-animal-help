<template>
  <div class="tabbar">
    <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" @click="$router.push('/stray')">流浪帮</van-tabbar-item>
    <van-tabbar-item icon="search">宠物帮</van-tabbar-item>
    <van-tabbar-item icon="friends-o">交流帮</van-tabbar-item>
    <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { Tabbar, TabbarItem } from 'vant';

@Component({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
})
export default class MyTabbar extends Vue {
  private active: string = '';
}
</script>
<style scoped>

</style>

