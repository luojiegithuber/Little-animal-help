<template>
  <div class="info-collapse">
    <!-- 通过 v-model 控制展开的面板列表，activeNames 为数组格式。 -->
    <van-collapse v-model="activeNames">
        <van-collapse-item :title="infoCollapseMap[item[0]]" :name="index" :key="index" v-for="(item,index) in infoCollapseData" >{{item[1]}}</van-collapse-item>
    </van-collapse>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { Collapse, CollapseItem  } from 'vant';

@Component({
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem ,
  },
})
export default class InfoCollapse extends Vue {

    private activeNames: Array<string> = [];
    private infoBaseData: any = [];
    private infoCollapseData: any = [];
    private infoBaseMap: any = {
      name: '名称',
      engName: '英文名称',
      characters: '	性格特点',
      nation: '	祖籍',
      easyOfDisease: '	易患病',
      life: '	寿命',
      price: '	价格',
    };
    private infoCollapseMap: any = {
      desc: '描述',
      feature: '体态特征',
      characterFeature: '	特点',
      careKnowledge: '照顾须知',
      feedPoints: '	喂养注意',
    };

    @Prop({
        type: Object, // 父组件传递给子组件的数据类型
        default: ()=>({}), 
    })  data !: any;

    get MyName():string {
        return `My name is ${this.data}`
    }

    mounted(){
        console.log(this.data)
        this.changeJsonToArray(this.data)
    }

    changeJsonToArray(obj){
        const arr: any = [];

        for(let i in obj){
            const item: any = [i,obj[i]]
            if(this.infoCollapseMap[i]){
                this.infoCollapseData.push(item)
            }else{
                this.infoBaseData.push(item)
            }
        }

    }


}
</script>
<style scoped>

</style>

