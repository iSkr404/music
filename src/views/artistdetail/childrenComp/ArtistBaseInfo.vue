
<template>
  <div class="artistBaseInfo">
    <!-- // 歌手详情头部 -->
    <div class="image">
      <img :src="artist.picUrl" alt="">
    </div>
    <div class="desc">
      <div class="name">
        <span>歌手</span>
        {{artist.name}}
      </div>
      <div class="warp">
        <p>
          <i class="iconfont">&#xe680; 单曲数：</i><span>{{artist.musicSize}}</span>
        </p>
        <p>
          <i class="iconfont">&#xe6c4; 专辑数：</i><span>{{artist.albumSize}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    artist: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  methods: {

  },
  mounted () {
    // console.log(this.artist);
  }
}
</script>

<style lang='less' scoped>
.artistBaseInfo {
  display: flex;
  .image {
    box-sizing: border-box;
    width: 195px;
    height: 200px;
    overflow: hidden;
    border: 1px solid #ddd;
    img {
      width: auto;
      height: 220px;
      transform: translate(-23px, -22px);
    }
  }

  .desc {
    margin-left: 20px;
    flex: 1;
    .name {
      font-size: 20px;
      span {
        display: inline-block;
        padding: 2px 4px;
        border-radius: 3px;
        text-align: center;
        font-size: 12px;
        width: 30px;
        background-color: #c62f2f;
        color: #fff;
      }
    }

    .warp {
      margin-top: 30px;
      p {
        font-size: 13px;
        color: #333;
        span {
          color: #666;
        }
        i {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
