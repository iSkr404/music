<template>
  <div class="simiArtist">
    <div class="item" v-for="item in simiArtistList" :key="item.id">
      <img :src="item.img1v1Url" alt="">
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
import { _simiArtist } from '@/network/discover/discover'
export default {
  props: ['id'],
  data () {
    return {
      simiArtistList: []
    }
  },
  async created () {
    if (this.$store.state.cookie) {
      const res = await _simiArtist(this.id, this.$store.state.cookie)
      console.log(res);
      this.simiArtistList = res.artists
    } else {
      this.$message.info('需要登录')
    }
  }
}
</script>

<style lang='less' scoped>
.simiArtist {
  .item {
    float: left;
    margin: 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      width: 120px;
      height: 120px;
      border: 1px solid rgba(0, 0, 0, 0.3);
    }
    span {
      text-align: center;
      color: #333;
    }
  }
}
</style>