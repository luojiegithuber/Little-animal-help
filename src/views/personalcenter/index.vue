<template>
    <div class="personal-center">
      <van-cell-group class="top-group">
        <van-cell
          @click="$router.push('/personalcenter')"
          icon="points"
          title-class="title-left"
          title="个人中心"
          is-link
        />
        <van-cell icon="gold-coin-o" title-class="title-left" title="我的钱包" is-link />
        <van-cell icon="gift-o" title-class="title-left" title="活动中心" is-link />
      </van-cell-group>
      <van-cell-group>
        <van-cell icon="records" title-class="title-left" title="问题反馈" is-link />
      </van-cell-group>
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
