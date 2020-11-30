<template>
    <div class="result-detail">
        <div class="cover-pic" :style="{backgroundImage:'url(http://img.boqiicdn.com/Data/BK/P/imagick14371435571930.png)'}">
            <div class="scenic-preview">
                <div class="scenic-title">{{infoCollapse.name}}</div>
            </div>
        </div>
        
        <div class="info-collapse-container">
            <info-collapse  :data="infoCollapse"></info-collapse>
        </div>
        
    </div>
</template>
<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { Image as VanImage, Cell,Collapse,CollapseItem,Icon,Col, Row,  } from 'vant';
import { Search, Field, Button  } from 'vant';
import { fetchPetInfo } from '@/api/home';
import InfoCollapse from '@/components/InfoCollapse.vue';
@Component({
  components: {
    [VanImage.name]: VanImage,
    [Cell.name]: Cell,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Icon.name]: Icon,
    [Col.name]: Col,
    [Row.name]: Row,
    [Search.name]: Search,
    [Icon.name]: Icon,
    [Button.name]: Button,
    InfoCollapse
  },
})


export default class DeTail extends Vue {
    private activeNames: Array<string> = ['景区简介',"周边酒店"];
    private infoBaseData: any = [];
    private detailDate: any = [];
    private hotelList: Array<any> = [
        {
            imgUrl:'https://img.yzcdn.cn/vant/cat.jpeg',
            title:'拙政园太好玩啦！'
        },
    ];
    //private card: any = null;
    private hotelListModel: Array<Array<any>> = [];

    get address():string {
        return `${this.detailDate.countryname}-${this.detailDate.provincename}-${this.detailDate.cityname}-${this.detailDate.countyname}`
    }


  private infoCollapse: any = {
  "trust": 91,
  "pettype": 1,
  "name": "威尔士柯基犬",
  "engName": "Welsh Corgi",
  "characters": "充满活力、友好、勇敢大胆",
  "nation": "英国",
  "easyOfDisease": "肥胖症、渐进性视网膜萎缩、癫痫、椎间盘疾病",
  "life": "12-15年",
  "price": "",
  "desc": "威尔士柯基全又称之为威尔士短腿狗，是时下很受欢迎的一个犬种，由于身长腿短长相很萌尤其受到了女生们的喜爱。威尔士柯基至少公元920年彭布罗克威尔士柯基犬已存在于英国了。",
  "feature": "威尔士柯基犬又分为两种，卡迪根威尔士柯基犬和彭布罗克威尔士柯基犬，而且这两个种类还是有一定",
  "characterFeature": "柯基的身材虽然矮小，但是它的力气很大而且很有活力，让人觉得很结实，性格温和，很",
  "careKnowledge": "威尔士柯基的养护是相对比较容易的，被毛不需要特别的保养，也不用特别的美容，只需将它的“围脖”修饰好即可，对于人或者",
  "feedPoints": "虽然说威尔士柯基是比较好养，但平时在饮食方面还是有很多需要注意的。牛奶，除较大的猪骨以外的骨头都不要给它吃，可以适当的给它吃一些",
  "url": "http://www.boqii.com/entry/detail/449.html",
  "coverURL": "http://img.boqiicdn.com/Data/BK/P/img421406278489.jpg"
}
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
<style>
.result-detail{
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: calc(100vh - 50px - 40px);
    padding-bottom: 50px;
    background-color: rgb(145, 208, 224);
}

.cover-pic {
    width: 100vw;
    height: 35vh; 
    /*background-image: url("http://pic4.40017.cn/scenery/comment/2016/09/17/12/dJd7DH.jpg");*/
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
}

.scenic-preview{
    width: 100vw;
    height: 20vw;
    background-color: rgba(0, 0, 0, 0.5);

    position:absolute;
    bottom: 0;

}

.scenic-title{
    color:rgb(255, 255, 255);
    font-size: 2em;
}

.summary{
    font-size: 1.2em;
    color:rgb(255, 166, 0)
}

.img-title{
    font-size: 1.2em;
}

.info-collapse-container{
    width: 96vw;
    padding: 2vw;
}

.info-collapse-container  .van-collapse-item {
    overflow: hidden;
    margin: 3vw 0;
    box-shadow: 0 0 5px 1px rgba(212, 212, 212, 0.5);
    border-radius: 10px;

}




</style>
