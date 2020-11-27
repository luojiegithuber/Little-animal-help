<template>
  <div class="imgshowlist">
    <!-- 每个图片的两侧间隔相等 -->
    <van-row type="flex" justify="space-around" v-for="(arr,index) in imglistModel" :key="index" style="margin:15px 0">
        <van-col span="11">
            <van-image  width="45vw" height="32vw" :src="arr[0].imgUrl" fit="fill"/>
            <div class="img-title">{{arr[0].title}}</div>
        </van-col>
        <van-col span="11">
            <van-image width="45vw" height="32vw" :src="arr[1].imgUrl" fit="fill"/>
            <div class="img-title">{{arr[1].title}}</div  >
        </van-col >
    </van-row>

  </div>
</template>
<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { Col, Row, Image as VanImage } from 'vant';

@Component({
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [VanImage.name]: VanImage,
  },
})
export default class ImgShowList extends Vue {
  private imglist: Array<any> = [
      {
          imgUrl:'https://img.yzcdn.cn/vant/cat.jpeg',
          title:'拙政园太好玩啦！'
      },
  ];
  private imglistModel: Array<Array<any>> = [];

  created(){
        this.imglist = [];

        this.imglist.push({
            imgUrl:'https://s3.ax1x.com/2020/11/27/DrOu5V.jpg',
            title:'加菲猫'
        })
        this.imglist.push({
            imgUrl:'https://s3.ax1x.com/2020/11/27/DrOmEq.jpg',
            title:'哈士奇'
        })
        this.imglist.push({
            imgUrl:'https://s3.ax1x.com/2020/11/27/DrOZbn.jpg',
            title:'柯基'
        })
        this.imglist.push({
            imgUrl:'https://s3.ax1x.com/2020/11/27/DrOnU0.jpg',
            title:'布偶猫'
        })


      for(let i=0;i<this.imglist.length;i=i+2){
          this.imglistModel.push([
              this.imglist[i],
              this.imglist[i+1]
          ])
      }
  }
}
</script>
<style scoped>
.img-title{
    font-size: 1.2em;
}
</style>
