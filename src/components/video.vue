<template>
  <div class="video">
    <div class="title-wrapper">
      <span class='tag'>MV</span>
      <span class='title'>{{song}}</span>
      <span class='artist'>{{artistName}}</span>
    </div>
    <video :src="mvUrl" controls></video>
  </div>
</template>

<script>
export default {
  name: 'mv',
  data() {
    return {
     mvUrl: '', //mv地址 
     artistName: '', //歌手
     song: '', //歌曲
    }
  },
  async created(){
    //获取mv地址
    const res = await this.$axios.get(`/mv/url?id=${this.$route.params.mvid}`)
    this.mvUrl = res.data.data.url

    //获取mv详细信息
    const detailed = await this.$axios.get(`/mv/detail?mvid=${this.$route.params.mvid}`)
    this.artistName = detailed.data.data.artistName
    this.song = detailed.data.data.name
  }
}
</script>

<style>

</style>