<template>
  <div>
    <dl>
      <dt>推荐</dt>
      <dd :class="['cursorPointer',current=='discover' ? 'current':'']" @click="toPath('discover')"><i class="iconfont">&#xe680;</i>发现音乐</dd>
      <dd :class="['cursorPointer',current=='allmv' ? 'current':'']" @click="toPath('allmv')"><i class="iconfont">&#xe6c4;</i>全部MV</dd>
      <!-- <dd class="cursorPointer" @click="toPath('allmv')"><i class="iconfont">&#xe670;</i>直播</dd> -->
      <!-- <dd class="cursorPointer" @click="toPath('allmv')"><i class="iconfont">&#xe614;</i>视频</dd> -->
      <!-- <dd class="cursorPointer" @click="toPath('allmv')"><i class="iconfont">&#xe61a;</i>朋友</dd> -->
    </dl>
    <dl>
      <dt>我的音乐</dt>
      <!-- <dd class="cursorPointer" @click="toPath('allmv')"><i class="iconfont">&#xe601;</i>本地音乐</dd> -->
      <!-- <dd class="cursorPointer" @click="toPath('allmv')"><i class="iconfont">&#xe723;</i>下载管理</dd> -->
    </dl>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: 'discover'
    }
  },
  methods: {
    toPath (path) {
      // window.sessionStorage.setItem('path', path)
      this.current = path
      this.$router.push(path)
    }
  },
  created () {
    // this.current = window.sessionStorage.getItem('path')
  }
}
</script>

<style lang='less' scoped>
dl {
  margin: 0;
  margin: 10px 0;
  dt {
    padding-left: 10px;
    height: 33px;
    font-size: 14px;
  }
  dd {
    box-sizing: border-box;
    color: #555;
    height: 33px;
    line-height: 33px;
    font-size: 15px;
    padding-left: 18px;
    border-left: 2px solid transparent;
    transition: 0.2s all;
    i {
      font-size: 18px;
      margin-right: 10px;
    }
    &:hover {
      color: #000;
    }
  }
  dd.current {
    color: #222;
    border-left: 2px solid #c62f2f;
    background-color: #e6e7ea;
  }
}
</style>
