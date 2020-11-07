<template>
  <div>
    <div class="Allmv">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="MV" name="mv">
          <mv-main v-if="activeName == 'mv'"></mv-main>
        </el-tab-pane>
        <el-tab-pane label="视频" name="view">
          <s-view v-if="activeName == 'view'"></s-view>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { _getMusicMV } from "../../network/discover/discover";

import sView from './sview'
import mvMain from './MV/mv-main'
export default {
  name: "Allmv",
  data() {
    return {
      activeName: "mv",
    };
  },
  created() {
    this._getMusicMV();
  },
  methods: {
    _getMusicMV() {
      return _getMusicMV().then((res) => {
        // console.log(res);
      });
    },
    handleClick(){
      console.log(1);
    }
  },
  components:{
    sView,
    mvMain
  }
};
</script>

<style lang='less'>
</style>
<style>
.Allmv .el-tabs__nav-wrap::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #fafafa;
  z-index: 1;
}
.Allmv .is-active{
  font-weight: 600;
}
</style>
