<template>
  <div class="home">
    <div class="header">
      <swiper :imgs="swiperImgsData"></swiper>
      <div class="identify-button">
        <van-uploader :after-read="afterRead">
            <van-button icon="scan" type="info" size="large" round style="width:50vw;box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);font-size:1.6em">智能识别</van-button>
        </van-uploader>
      </div>
    </div>

    <div class="center-title">
        <van-divider
        :style="{ color: 'black', borderColor: 'black', padding: '0 16px'}"
        >
            <span >探索更多热门</span>
        </van-divider>
        <ImgShowList></ImgShowList>
    </div>
  </div>
</template>
<script lang='ts'>
import axios from 'axios';
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Action, Mutation, State, Getter } from "vuex-class";
import {
    Button,
    Uploader,
    Divider, 
} from "vant";
import ImgShowList from "@/components/ImgShowList.vue";
import Swiper from "@/components/Swiper.vue";
import { SwiperType } from "@/interface";
@Component({
  components: {
    [Button.name]: Button,
    [Uploader.name]: Uploader,
    [Divider.name]: Divider,
    ImgShowList,
    Swiper
  }
})
export default class extends Vue {
    private skeletonShow: boolean = true;
    private swiperImgsData = null;

    private longitude: any = 120.76692200000001;
    private latitude: any = 31.25;



  @Action("swiperImgs") private actionSwiperImgs;
  @Getter("swiperImgs") private getterSwiperImgs;
  private async getSwiperImgs() {
    if (this.getterSwiperImgs.length === 0) {
      try {
        await this.actionSwiperImgs({ type: 2 } as SwiperType); // 传参时进行类型检查
        this.swiperImgsData = this.getterSwiperImgs;
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("store中已储存swiperImgs数据");
      this.swiperImgsData = this.getterSwiperImgs;
    }
  }

  //
  private async skeletonNotShow() {
    this.skeletonShow = false;
  }
  private async created() {
    this.getSwiperImgs();
    setTimeout(this.skeletonNotShow, 1000); // api获取首页数据

  }


  async afterRead(file){
      let param = new FormData() // 创建form对象
      param.append('file', file.file, file.file.name) // 通过append向form对象添加数据
      console.log(param.get('file'))
      console.log('经纬度',this.longitude,this.latitude)
      const res: any = await this.postImg(param,this.latitude,this.longitude);
      
  }

postImg = (formData, lat1, log1) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    axios.post(`/tongcheng/witrecommend/scenery/upload?lat1=${lat1}&log1=${log1}`, formData, config).then(res => {
        // console.log(res)
        this.$router.push({path:'/recommendresult',query: {detailData:JSON.stringify(res.data)}})
    })
};


  mounted() {
    var _this = Vue.prototype;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            //locationSuccess 获取成功的话
            position => {
                _this.getLongitude = position.coords.longitude; 
                _this.getLatitude = position.coords.latitude;    
                this.longitude = _this.getLongitude　　　　　 //弹出经度测试
                this.latitude = _this.getLatitude
            },
            //locationError  获取失败的话
            error => {
                var errorType = ['您拒绝共享位置信息', '获取不到位置信息', '获取位置信息超时'];
                alert(errorType[error.code - 1]);
            }
        );
    }
  }

  public async getPetInfo() {
    
  }
}
</script>
<style>
.header{
    text-align: center;
}


.identify-button{
    position: relative;
    top:-40px;
}

.center-title{
    position: relative;
    top:-30px;
}
</style>