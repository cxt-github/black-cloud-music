<template>
  <div class="player">
    <div class="left">
      <img class="disc" src="../assets/img/disc.png" alt="" />
      <img class="cover" :src="alNameUrl?alNameUrl:'../assets/img/cover.png'" alt="" />
    </div>
    <div class="right">
      <div class="title">
        <img src="../assets/img/tag.png" alt="" /><span>{{songName}}</span>
      </div>
      <div class="singer">歌手: <span>{{singerArr}}</span></div>
      <div class="album">所属专辑: <span>{{alName}}</span></div>
      <audio class="audio" controls :src="musicUrl"></audio>
      <ul class="lyric-container" v-for="(item,index) in lyric" :key="index">
        <li class="lyric">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "player",
  data() {
    return {
      musicUrl: "", //歌曲播放地址
      alName: "", //专辑名称
      alNameUrl: "", //专辑图片地址
      songName: "", //歌曲名称
      singerArr: [], // 歌手数组
      lyric: [], //歌词数组
    };
  },
  async created() {
    const id = this.$route.params.id
    //获取歌曲播放地址
    const res = await this.$axios.get(`/song/url?id=${id}`);
    this.musicUrl = res.data.data[0].url;

    //获取歌曲详细信息
    const det = await this.$axios.get(`/song/detail?ids=${id}`);
    this.alName = det.data.songs[0].al.name
    this.alNameUrl = det.data.songs[0].al.picUrl
    this.songName = det.data.songs[0].name

    const arr = []
    det.data.songs[0].ar.map(item => {
      return arr.push(item.name)
    })
    this.singerArr = arr.join('/')

    // 获取歌词
    const lyr = await this.$axios.get(`/lyric?id=${id}`)
    var newArr = lyr.data.lrc.lyric.split('\n')
    this.lyric = newArr.map(item => {
      return item.slice(item.indexOf(']')+1).trim()
    })
    console.log();
  },
};
</script>

<style></style>
