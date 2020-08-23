<template>
  <div class="NewSong">
    <ul>
      <li v-for="(item,index) in newsonglist" :key="item.id">
        <div class="number">{{index +1}}</div>
        <img :src="item.picUrl" alt="">
        <div class="desc">
          <p>{{item.name}} ({{item.song.alias[0]}})</p>
          <div class="author">
            <p>{{item.song.album.artists[0].name}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsonglist: []
    }
  },
  methods: {
    async getNewsongList () {
      const result = await this.$http.get('/personalized/newsong')
      if (result.name && result.name === 'Error') {
        return this.$message.error('请求错误')
      }
      if (result.code !== 200) return this.$message.error(result.msg)
      this.newsonglist = result.result
      // console.log(result);
    }
  },
  created () {
    this.getNewsongList()
  }
}
</script>

<style lang='less' scoped>
.NewSong {
  ul {
    margin-bottom: 110px;
    display: flex;
    flex-wrap: wrap;
    border-left: 1px solid #eee;
    border-bottom: 1px solid #eee;
    li {
      cursor: pointer;
      border-top: 1px solid #eee;
      border-right: 1px solid #eee;
      box-sizing: border-box;
      padding: 10px;
      flex: 50%;
      display: flex;

      img {
        display: block;
        width: 42px;
        height: 42px;
      }
      .number {
        width: 30px;
        height: 42px;
        line-height: 42px;
        text-align: center;
      }
      .desc {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
      }
    }
    & :hover {
      background-color: #ccc !important;
    }
    li:nth-child(4n + 1) {
      background-color: #f6f6f6;
    }
    li:nth-child(4n + 2) {
      background-color: #f6f6f6;
    }
  }
}
</style>
