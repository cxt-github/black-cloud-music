<template>
  <div id="player">
    <h2 class="title">黑云音乐</h2>
    <div class="search">
      <input type="text" />
      <button>
        <span class="iconfont icon-search"></span>
      </button>
    </div>
    <!-- 对应的内容区域 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
