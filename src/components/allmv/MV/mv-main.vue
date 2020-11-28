<template>
  <div>
    <div class="mv-main">
      <p class="mv-title">最新MV<i class="el-icon-arrow-right"></i></p>
      <frist-mv></frist-mv>
    </div>
  </div>
</template>

<script>
import FristMv from "../MV/FristMv";
export default {
  name: "mv-main",
  components: {
    FristMv,
  },
};
</script>

<style lang="less" scoped>
.mv-main {
  .mv-title {
    font-size: 18px;
    color: black;
    border-bottom: 1px solid #cccccc;
  }
}
</style>
<style>
.Allmv .el-tabs__content {
  width: 1245px;
}
</style>