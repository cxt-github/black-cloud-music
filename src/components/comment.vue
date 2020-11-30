<template>
  <div class="comment-wrapper">
    <div class="items">
      <div class="item" v-for="item in hotComments" :key="item.commentId">
        <div class="left">
          <img :src="item.user.avatarUrl" alt="">
        </div>
        <div class="right">
          <div class="top">
            <span class='user'>{{item.user.nickname}}:</span>
            <span class='content'>{{item.content}}</span>
          </div>
          <div class="bottom">
            <div class="time">{{item.time | transformTime}}</div>
            <div class="like-wrapper">
                <span>👍</span>({{item.likedCount}})
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment',
  data() {
    return {
      hotComments: [], //评论数组
    }
  },

  async created(){
    //获取评论
    const res = await this.$axios.get(`/comment/hot?id=${this.$route.params.id}&type=0`)
    this.hotComments = res.data.hotComments
  },

  //过滤器
  filters:{
    transformTime(time){
      //处理数据，时间戳转标准时间
      let d = new Date(time)
      //返回数据
      return `${d.getFullYear()}年${d.getMonth()}月${d.getDate()}日`
    }
  }
}
</script>

<style>

</style>