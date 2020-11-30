<template>
  <div class="result-wrapper">
      <div class="song" v-for="item in musicList" :key="item.id">
        <div class="name">
          <span class="iconfont icon-play" @click="toPlayer(item.id)"></span>
          <a href="" @click.prevent="toComment(item.id)">{{item.name}}</a>
          <span class="iconfont icon-editmedia" v-show="item.mvid" @click="toMV(item.mvid)"></span>
        </div>
        <div class="singer">{{item.artists |formatSinger}}</div>
        <div class="album">《{{item.album.name}}》</div>
        <div class="time">{{item.duration | formatTime}}</div>
      </div>
    </div>
</template>

<script>
export default {
  name:'results',
  data() {
    return {
      musicList: [], //歌曲数组
    }
  },

  methods:{
    //跳转评论页面
    toComment(id) {
      this.$router.push(`/comment/${id}`)
    },
    
    //跳转mv页面
    toMV(mvid) {
      this.$router.push(`/video/${mvid}`)
    },

    //跳转音乐播放页面
    toPlayer(id) {
      this.$router.push(`/player/${id}`)
    }
  },

  async created(){
    //获取搜索
    const res = await this.$axios.get(`/search?keywords=${this.$route.params.keywords}`)
    // console.log(res);
    this.musicList = res.data.result.songs
  },

  //过滤器
  filters:{
    //毫秒转分
    formatTime(time){
      //毫秒 转 分
      const min = (time / 1000) / 60
      return min.toFixed(2)
    },

    //歌手间隔/
    formatSinger(name){
      const arr = []
      name.map(item => {
        return arr.push(item.name)
      })
      return arr.join('/')
    }
  }
}
</script>

<style>

</style>