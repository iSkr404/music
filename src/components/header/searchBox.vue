<template>
  <div class="searchBox">
    ing...
    <!-- todos:把数据展示出来 -->
  </div>
</template>

<script>
export default {
  props: ['searchHotList']
}
</script>

<style lang='less' scoped>
.searchBox {
  width: 320px;
  height: 400px;
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 41px;
  border-radius: 3px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 110;
}
.searchBox::after {
  content: "";
  top: -14px;
  left: 14px;
  position: absolute;
  border: 7px solid transparent;
  border-bottom: 7px solid #fff;
}
</style>