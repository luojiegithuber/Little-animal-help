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
            imgUrl:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1604700588&di=4d8fe15b1e343e267be7e553f87497d2&src=http://b-ssl.duitang.com/uploads/item/201207/05/20120705160258_SiA4w.thumb.700_0.jpeg',
            title:'优美的狮子林'
        })
        this.imglist.push({
            imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604710996164&di=d820f2ca698204b364a0d50a8f3e1b5d&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181211%2F9570f1f19c7a4c888e01983806d642d7.jpeg',
            title:'好看的拙政园'
        })
        this.imglist.push({
            imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604711063796&di=7884ca9501c33dc7fb406c5a58151291&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180918%2F09ac5c9a04c448c5a2642ab07ec976a3.jpeg',
            title:'壮观的金鸡湖景区'
        })
        this.imglist.push({
            imgUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=972057105,1227146932&fm=26&gp=0.jpg',
            title:'典雅的乌镇'
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
