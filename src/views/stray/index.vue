<template>
  <div class="stray">
    <van-search
    show-action
    v-model="value"
    background="#4fc08d"
    placeholder="请输入小动物名称（精确）"
    @search="onSearch"
    >
    <template #action>
        <div @click="onSearch" >搜索</div>
    </template>
    <template #left>
        <van-icon name="scan" size="0.8rem"/>&nbsp;&nbsp;
    </template>
    </van-search>

    <info-collapse  :data="infoCollapse"></info-collapse>
    
  </div>
</template>
<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { Search, Icon, Field, Button  } from 'vant';
import { fetchPetInfo } from '@/api/home';
import InfoCollapse from '@/components/InfoCollapse.vue';
@Component({
  components: {
    [Search.name]: Search,
    [Icon.name]: Icon,
    [Button.name]: Button,
    InfoCollapse
  },
})
export default class Stray extends Vue {
  //private activeNames: string = '';
  private infoCollapse: any = {
    "pettype":1,
    "name":"哈士奇",
    "engName":"SiberianHuskiy",
    "characters":"聪明机灵、极度热情、神经质",
    "nation":"俄罗斯",
    "easyOfDisease":"肠胃疾病",
    "life":"9-15年",
    "price":"2000-4000元",
    "desc":"　　西伯利亚",
    "feature":"　　西伯利亚雪橇犬是一种原始的古老犬种，因它的独特嘶哑的叫声被称之为当今的哈士奇。很早前哈士奇是最原始的交通工具专门拉雪橇的，并用这种狗猎取和饲养驯鹿，或者繁殖这种狗，然后带出他们居住的冻土地，换取温饱。典型狼性犬。",
    "characterFeature":"　　哈士奇的外表英俊潇洒，精致的五官和丰富的肢体语言充满了奇特的表现，无需复杂的交谈，就能轻易了解他的喜怒哀乐。哈士奇时常会有点神经质。",
    "careKnowledge":"　　哈士奇虽然看着一副冷漠无情的样子，事实上，哈士奇对人很友好、温柔、热情的。喜欢与人交往是哈士奇的典型性格。通常不表现出护卫犬强烈的领地占有欲，不对陌生人过多的怀疑，也不会攻击其他犬类。因此有很多人喜欢哈士奇。他对主人非常忠诚，一条忠诚的小狗有一个健康的身体是非常重要的。",
    "feedPoints":"　　哈士奇有着敏感的肠胃，因此在饮食上需要主人多加重视，喂食不当很容易",
    "coverURL":"http://img.boqiicdn.com/Data/BK/P/imagick14371435571930.png"
  };
  private value: string = '';
  mounted() {
    this.getPetInfo('波斯猫');
  }

  public async getPetInfo(name: string) {
    const res: any = await fetchPetInfo('波斯猫');
  }

  onSearch(content){
      console.log(content)
  }
}
</script>
<style scoped>

</style>
