<template>
  <div class="TableList">
    <el-table :show-header="hiddenTableHeader" stripe :header-cell-style="{padding:'2px 0',fontSize:'12px'}" :row-style="{padding:'2px 0',fontsize:'12px'}" :cell-style="{padding:'2px 0',fontSize:'12px'}" :data="tracklist" style="width: 100%">
      <el-table-column type="index">
      </el-table-column>
      <el-table-column label="操作" width="70px">
        <template>
          <i class="iconfont">&#xe60a;</i>
          <i class="iconfont">&#xe723;</i>
        </template>
      </el-table-column>
      <el-table-column label="音乐标题" prop="name">
      </el-table-column>
      <el-table-column v-if="hiddenSinger" label="歌手" prop="song">
      </el-table-column>
      <el-table-column v-if="hiddenAlbum" label="专辑" width="380px" prop="album">
      </el-table-column>
      <el-table-column label="时长" prop="time" width="70px">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    tracklist: {
      type: Array,
      default () {
        return []
      }
    },
    hiddenTableHeader: {
      type: Boolean,
      default () {
        return true
      }
    },
    hiddenSinger: {
      type: Boolean,
      default () {
        return true
      }
    },
    hiddenAlbum: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  created () {
    // 通过得到的id列表然后请求详情信息
    // console.log(this.tracklist);
  },
  methods: {
  }
}
</script>

<style lang='less' scoped>
.TableList {
  tr {
    height: 20px !important;
    i {
      margin: 0 2px;
      font-size: 14px;
    }
    i:hover {
      color: #000;
    }
  }
  tr:hover {
    td {
      div {
        color: #000;
      }
    }
  }
}
</style>