<template>
    <div class="recommend-result">
      <div class="result">
        <!-- <br/> -->

        <br/>
        <br/>
        <div class="cover-pic" :style="{backgroundImage:'url('+recommendObj.coverURL +')'}" @click="jumpDetail(recommendObj)">
          <div class="result-maybe" >
              <div style="color:white;font-size: 2em;">{{recommendObj.name}}</div>
              <div >匹配度：{{recommendObj.trust }} %</div>
          </div>
        </div>
        <!-- <br/>
        <br/>
        <br/> -->
        <div :class="isOut?'result-text-show':'result-text-hide'">
          <div class="in-go" v-if="isOut" ><van-icon name="arrow-up" color="white"/><br/><br/></div>
            {{isOut?text:null}}<br v-if="isOut"/><br v-if="isOut"/>
          <div class="icons">
            <div v-if="isOut" class="icon-do" @click="showShare = true"><van-icon name="share" style="text-shadow: 0 0 0.8em rgb(135, 197, 255);" color="white"/></div>
            <div v-if="isOut" class="icon-do" v-clipboard:copy="text" v-clipboard:success="onCopy"><a-icon type="copy" theme="filled"/></div>
            <div v-if="isOut" class="icon-do" @click="refresh"><van-icon name="replay" style="text-shadow: 0 0 0.8em rgb(135, 197, 255);" color="white"/></div>
            <div v-if="!isOut" style="text-align:center;width:100%"><van-icon name="arrow-down" /></div>
          </div>
        </div>

        <br/>
        <!-- <br/>
        <br/> -->


        
        <van-divider
        :style="{ color: 'white', borderColor: 'white', padding: '0 16px'}"
        >
            <span style="font-size:1.2em">————其他推荐结果————</span>
        </van-divider>
        <div class="other-list">
          <Card v-for="(card,index) in resultList" :key="index" :data="card"/>
        </div>
      </div>

      <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
      />

    </div>
</template>
<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { CellGroup, Cell, List, Tag, Image as VanImage, Divider,Button,Icon,Toast,ShareSheet  } from 'vant';
import Card from "@/components/Card.vue";
import {  } from '@/api/home';
@Component({
  components: {
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [List.name]: List,
    [Tag.name]: Tag,
    [VanImage.name]: VanImage,
    [Divider.name]: Divider,
    [Button.name]: Button,
    [Icon.name]: Icon,

    [ShareSheet.name]: ShareSheet,
    Card
  },
})
export default class RecommendResult extends Vue {
  private text: string = '希望所有的烦恼,都离屏幕前的这个小笨蛋远一点,这是什么奇奇怪怪的文案啊？。。。';
  private list: any = [1,2,3,4,5,6,7,8,9,10];
  private isOut: boolean = false;
  private recommendObj: any = null;
  private showShare: any = false;
  private options: any = [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ];

  
  resultList:any = [];
  
  created(){
    this.resultList = JSON.parse(this.$route.query.resultList as string);
    console.log('收到结果',this.resultList)
    this.recommendObj = this.resultList.shift();
    console.log(this.recommendObj)
  }

  onSelect(option){
    Toast(option.name);
    this.showShare = false;
  }

  jumpDetail(data:any){
    this.$router.push({path:'/petdetail',query: {data:JSON.stringify(data)}})
  }

/*   refresh(){
    this.getComment()
  }
  copy(){
    this.getComment()
  }
  share(){
    this.getComment()
  } */
  changeSide(){
    this.isOut = !this.isOut
  }

  onCopy(){
    Toast.success('复制成功');
  }

  
}
</script>
<style scoped>
.cover-pic {
    width: 90vw;
    height: 60vw; 
    background-image: url("http://pic4.40017.cn/scenery/comment/2016/09/17/12/dJd7DH.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;

    border-radius: 5px;
}


.result-maybe{

    height: 15vw;
    color:white;
    border-radius: 5px;
    padding: 0 5%;

    background-color: rgba(0, 0, 0, 0.5);
}

.scenic-title{
    color:rgb(235, 235, 235);
    font-size: 1em;
}

.result{
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(to bottom right, rgb(79, 90, 184) , rgb(37, 39, 138));
}

.result-text-show{
  text-shadow: 0 0 0.8em rgb(135, 197, 255);
  color: white;
  font-size: 1.2em;
  width: 80vw;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1% 5% 0;
  border-radius: 5px;
  overflow: hidden;
  transition: height 2s;

}

.result-text-hide{
  text-shadow: 0 0 0.8em rgb(135, 197, 255);
  color: white;
  font-size: 1.2em;
  width: 80vw;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1% 5% 0;
  border-radius: 5px;
  overflow: hidden;
  height: 3vh;
  transition: height 2s;
  
}

.icon-do{

  height: 2em;

  /* border: 1px solid white; */
  border-radius: 5px;
  padding: 5px 10px;
  
	/* box-shadow:0 0 3px #DDD inset;
  box-shadow:0 0 3px #DDD; */
  text-shadow: 0 0 0.8em rgb(135, 197, 255);

  margin: 0 2%;

  opacity:0.8;
}

.icons{
  width: 100%;
  display: flex;
  flex-direction: row-reverse;

}

.in-go{
  width: 100%;
  text-align: center;

}

</style>
