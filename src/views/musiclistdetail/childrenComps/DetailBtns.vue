<template>
  <div class="DetailBtns">
    <div>
      <!-- 切换歌单详情 -->
      <span :class="activeName==index?'current':''" @click="spanClick(index)" v-for="(item,index) in list" :key="index">
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
      activeName: 0
    }
  },
  methods: {
    // 切换样式并通知父组件
    spanClick (i) {
      this.activeName = i
      this.$emit('toggleList', i)
    }
  }
}
</script>

<style lang='less' scoped>
.DetailBtns {
  width: 110%;
  margin-top: 30px;
  margin-left: -20px;
  padding-left: 5%;
  border-bottom: 1px solid #ccc;
  display: flex;
  div {
    padding: 0 0 5px;
    span {
      cursor: pointer;
      text-align: center;
      margin: 0 10px;
      padding: 0 2px 5px;
      font-size: 15px;
    }
    .current {
      border-bottom: 3px solid #c62f2f;
    }
  }
}
</style>