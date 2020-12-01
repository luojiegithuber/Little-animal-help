<template>
  <div class="card" @click="jumpToDetail(data)">

      <van-image width="30vw" height="30vw" :src="data.coverURL" />

      <div class="card-info">
          <div class="card-title">{{data.name}}</div>
          <div class="address">英文名：{{data.engName}}</div>
          <div class="opendatecontent">性格：{{data.characters}}</div>
          <div class="tags"><van-tag plain type="success" size="large" ><van-icon name="checked" />&nbsp;{{data.trust}}%</van-tag></div>
      </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { Image as VanImage, Tag, Icon,Divider  } from 'vant';

@Component({
  components: {
    [VanImage.name]: VanImage,
    [Tag.name]: Tag,
    [Icon.name]: Icon,
    [Divider.name]: Divider,
  },
})
export default class MyTabbar extends Vue {
  private active: string = '';

    @Prop({
        type: Object, // 父组件传递给子组件的数据类型
        default: ()=>({}), 
    })  data !: any;

  created(){
    console.log('卡片收到的数据',this.data)
  }

  jumpToDetail(data){
    this.$router.push({path:'/petdetail',query: {data:JSON.stringify(data)}})
  }

}
</script>
<style scoped>
.card{
    margin: 10% 0;
    width: 90vw;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.card-info{
    flex-grow: 1;
    margin: 0 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.card-title{
    width: 100%;
    text-align: center;
    font-size: 1.3em;
}

.tags{
    display: flex;
    flex-direction: row-reverse;
}
</style>