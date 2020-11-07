<template>
  <div>
    <div class="fristmv">
      <div class="type">
        热门地区:<span v-for="(item, index) in type" @click="mvtypeClick(index)" :key="item.value" :class="mvtypeindex === index ? 'current' : ''">{{ item.name }}</span
        >
      </div>
      <div class="mv-main-list">
        <mv-list v-for="mvlist in mvdata" :key="mvlist.id" :mvlist="mvlist"></mv-list>
      </div>
    </div>
  </div>
</template>

<script>
import { _getFristMv } from "../../../network/discover/discover";

import mvList from "./mvList";
export default {
  name: "FristMV",
  data() {
    return {
      mvtypeindex: 0,
      type: [
        { name: "内地" },
        { name: "港台" },
        { name: "欧美" },
        { name: "日本" },
      ],
      mvdata: [],
    };
  },
  created() {
    this._getFristMv();
  },
  methods: {
    _getFristMv() {
      return _getFristMv({
        area: this.type[this.mvtypeindex].name,
        limit: 8,
      }).then((res) => {
        this.mvdata = res.data;
      });
    },
    mvtypeClick(index) {
      this.mvtypeindex = index;
      this._getFristMv();
    },
  },
  components: {
    mvList,
  },
};
</script>
<style lang='less' scoped>
.fristmv {
  .type {
    margin: 15px 0;
    span {
      margin: 0 10px;
      padding: 2px 5px;
      border-radius: 5px;
      cursor: pointer;
    }
    .current {
      color: #ec4141;
      background-color: #fcebeb;
    }
  }
  .mv-main-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
