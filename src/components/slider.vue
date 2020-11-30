<template>
  <el-carousel height="400px">
    <el-carousel-item v-for="item in imgUrlList" :key="item.encodeId">
      <h3 class="small">
          <img :src="item.imageUrl" alt="">
      </h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import Axios from 'axios'
export default {
    name: 'slider',
    data() {
        return{
            imgUrlList:[], //轮播图数组
        }
    },
    async created() {
      const res =await Axios.get('https://autumnfish.cn/banner')
    //   console.log(res);
      this.imgUrlList = res.data.banners
    }
}
</script>

<style>
</style>
