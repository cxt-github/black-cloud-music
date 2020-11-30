<template>
  <div id="player">
    <h2 class="title" @click="blackCloud">黑云音乐</h2>
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
      keywords:'' //搜索关键字
    }
  },
  methods:{
    //点击搜索事件
    searchMusic() {
      //去空格
      this.keywords = this.keywords.trim()
      //this.$router这个是路由实例
      this.$router.push(`/results/${this.keywords}`)
    },

    //点击标题回到首页
    blackCloud() {
       this.$router.push('/')

       this.keywords = ''
    }
  }
};
</script>

<style></style>
