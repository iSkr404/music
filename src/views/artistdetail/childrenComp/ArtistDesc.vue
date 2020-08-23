<template>
  <div class="artistDesc">
    <ul>
      <li v-for="(item,index) in introduction" :key="index">
        <!-- {{item}} -->
        <div class="title">{{item.ti}}</div>
        <!-- <p v-html="item.txt" style="white-space: pre-line;"></p> -->
        <p style="white-space: pre-line;">{{item.txt}}</p>
        <!-- {{item.txt}} -->
      </li>
    </ul>
  </div>
</template>

<script>
import { _getArtistalbumDesc } from '@/network/discover/discover'
export default {
  props: ['id'],
  data () {
    return {
      // 介绍
      introduction: [],
    }
  },
  methods: {
    // 获取歌手介绍
    getArtistalbumDesc () {
      _getArtistalbumDesc(this.id).then(result => {
        this.introduction = result.introduction
      })
    },
  },
  mounted () {
    this.getArtistalbumDesc()
  }
}
</script>

<style lang='less' scoped>
.artistDesc {
  padding: 0 20px;
  .title {
    margin-top: 40px;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #222;
  }
  p {
    // text-indent: 2em;
    line-height: 30px;
    font-size: 14px;
    color: #666666;
  }
}
</style>