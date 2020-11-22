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
    private coordinate: any = {lng: 116.404, lat: 39.915};
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
