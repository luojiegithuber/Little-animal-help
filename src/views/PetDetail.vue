<template>
    <div class="result-detail">
        <div class="cover-pic" :style="{backgroundImage:'url('+infoCollapse.coverURL+')'}">
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


  private infoCollapse: any = {}
  private value: string = '';
  created() {
    /*this.getPetInfo('波斯猫'); */
    this.infoCollapse = JSON.parse(this.$route.query.data as string);
    console.log('详情页',this.infoCollapse)
  }

  public async getPetInfo(name: string) {
/*     const res: any = await fetchPetInfo('波斯猫'); */
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
    width: 90vw;
    height: 35vh; 
    /*background-image: url("http://pic4.40017.cn/scenery/comment/2016/09/17/12/dJd7DH.jpg");*/
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
}

.scenic-preview{
    width: 90vw;
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
