<template>
  <el-carousel height="400px">
    <el-carousel-item v-for="(item,index) in imgUrlList" :key="index">
      <h3 class="small">
          <img :src="item.imageUrl" alt="">
      </h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>

export default {
    name: 'slider',
    data() {
        return{
            imgUrlList:[], //轮播图数组
        }
    },
    async created() {
      const res =await this.$axios.get('/banner?t=' + Date.now())
    //   console.log(res);
      this.imgUrlList = res.data.banners
    }
}
</script>

<style>
</style>
