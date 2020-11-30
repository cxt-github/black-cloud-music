<template>
  <div id="player">
    <h2 class="title">黑云音乐</h2>
    <div class="search">
      <input type="text" v-model="keywords" @keyup.enter="searchMusic" />
      <button @click="searchMusic">
        <span class="iconfont icon-search"></span>
      </button>
    </div>
    <!-- 对应的内容区域 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'index',
  data() {
    return {
      keywords:'周杰伦' //搜索关键字
    }
  },
  methods:{
    //点击搜索事件
    searchMusic(){
      // console.log(11111);
      //去空格
      this.keywords = this.keywords.trim()
      //this.$router这个是路由实例
      this.$router.push(`/results/${this.keywords}`)
    }
  }
};
</script>

<style></style>
