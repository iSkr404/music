<template>
  <div class="mvdetail" :key="$route.fullPath">
    <div class="mv-c">
      <div class="m-left">
        <div class="mv-n">
          <div class="n-title">
            <h2 class="n-h2">
              <span class="iconfont n-tubiao">&#xe62c;</span>{{ mvdetail.name }}
            </h2>
            <span class="n-name" @click="artistClick(mvdetail.artistId)">{{
              mvdetail.artistName
            }}</span>
          </div>
          <div class="mv">
            <div class="mv-video">
              <div class="palyer">
                <video
                  controls
                  :src="mvUrl.url"
                  width="100%"
                  height="100%"
                ></video>
              </div>
            </div>
          </div>
          <div class="wrap">
            <span><i class="iconfont">&#xe60c;</i>点赞（{{ lickCount }}）</span>
            <!-- （{{mvdetail.subCount}}） -->
            <span
              ><i class="iconfont">&#xe63a;</i>收藏（{{
                mvdetail.subCount
              }}）</span
            >
            <!-- （{{mvdetail.shareCount}}） -->
            <span
              ><i class="iconfont">&#xe65d;</i>分享（{{
                mvdetail.shareCount
              }}）</span
            >
          </div>
          <div class="m-evalute">
            <p class="e-title">评论<span class="e-count">共666条评价</span></p>
            <evaluate :comment='comment'></evaluate>
          </div>
        </div>
      </div>
      <div class="m-right">
        <h3 class="m-s">MV简介</h3>
        <div class="m-detail">
          <p class="m-fb">发布时间 : {{ mvdetail.publishTime }}</p>
          <p class="m-cs">播放次数 : {{ mvdetail.playCount | formCount }}</p>
          <p class="m-info">{{ mvdetail.desc }}</p>
        </div>
        <h3 class="m-s">相关推荐</h3>
        <div class="m-list" v-for="item in recomlist" :key="item.id">
          <div class="m-list-left">
            <img
              :src="item.cover"
              alt=""
              width="120px"
              height="70px"
              :title="item.name"
              @click="mvdateilClick(item.id)"
            />
            <p class="m-list-title">
              <i class="el-icon-video-camera"></i
              ><span>{{ item.playCount | formCount }}</span>
            </p>
          </div>
          <div class="m-list-right">
            <p class="r-title">{{ item.name }}</p>
            <p>{{ item.duration | fromduration }}</p>
            <p>{{ item.artistName }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  _getMvDetail,
  _getMVurl,
  _getRecomList,
  _getMVevalute,
  _getMvComment,
} from "@/network/discover/discover";
import evaluate from "@/components/allmv/MV/evalute/evaluate";
export default {
  name: "mvdetail",
  data() {
    return {
      mvdetail: [],
      mvUrl: [],
      recomlist: [],
      lickCount: "",
      mid: "",
      comment:[]
    };
  },
  created() {
    // 获取mv详情
    this._getMvDetail();
    // 获取mv地址
    this._getMVurl();
    // 获取mv推荐
    // this._getRecomList();
    // 获取点赞条数
    this._getMVevalute();
  },
  methods: {
    _getMvDetail() {
      return _getMvDetail(this.$route.query.id).then((res) => {
        this.mvdetail = res.data;
        this.$nextTick(() => {
          this._getMvComment(this.mvdetail.id);
          return _getRecomList(this.mvdetail.coverId).then((res) => {
            this.recomlist = res.mvs;
          });
        });
      });
    },
    _getMVurl() {
      return _getMVurl(this.$route.query.id).then((res) => {
        this.mvUrl = res.data;
      });
    },
    // 跳转到歌手详情页
    artistClick(id) {
      // console.log(id);
      this.$router.push({ path: "/home/artistalbum", query: { id } });
    },
    // 获取点赞条数
    _getMVevalute() {
      return _getMVevalute(this.$route.query.id).then((res) => {
        this.lickCount = res.likedCount;
      });
    },
    mvdateilClick(mid) {
      this.$router.push({ path: "/home/mvdetail", query: { id: mid } });
    },
    // 获取mv评论
    _getMvComment(mid) {
      return _getMvComment(mid).then((res) => {
        console.log(res);
        this.comment=res.comments;
      });
    },
  },
  filters: {
    formCount(val) {
      let count = Math.round(val / 10000);
      if (count >= 10) {
        return count + "万";
      } else {
        return val;
      }
    },
    fromduration(val) {
      let m =
        Math.floor(val / 1000 / 60) < 10
          ? "0" + Math.floor(val / 1000 / 60)
          : Math.floor(val / 1000 / 60);
      let n =
        (val / 1000) % 60 < 10 ? "0" + ((val / 1000) % 60) : (val / 1000) % 60;
      return m + " : " + n;
    },
  },
  destroyed() {
    this.$store.commit("setPause");
  },
  watch: {
    $route(to) {
      if (this.$route.path == "/home/mvdetail") {
        this.mvdateilClick(to.query.id);
        // 获取mv详情
        this._getMvDetail();
        // 获取mv地址
        this._getMVurl();
        // 获取mv推荐
        // this._getRecomList();
        // 获取点赞条数
        this._getMVevalute();
      }
    },
  },
  components:{
    evaluate
  }
};
</script>

<style lang="less" scoped>
.mvdetail {
  position: absolute;
  left: 0;
  top: 50px;
  right: 0;
  bottom: 0;
  height: 100%;
  background: #f5f5f5;
  z-index: 300;
  overflow: scroll;
  .mv-c {
    width: calc(100% - 35%);
    margin: 0 auto;
    height: 2000px;
    display: flex;
    background-color: #ffffff;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    .m-left {
      flex: 3;
      padding: 27px 35px 40px 34px;
      .n-title {
        padding: 10px 0;
        margin: 8px 0;
        .n-h2 {
          float: left;
          max-width: 100%;
          margin-top: -10px;
          margin-right: 8px;
          font-size: 24px;
          line-height: 32px;
          font-weight: normal;
        }
        .n-name {
          float: left;
          margin: 4px 0 0 0;
          line-height: 17px;
          color: #0c73c2;
          cursor: pointer;
        }
        .n-tubiao {
          color: #c20c0c;
          font-size: 24px;
          padding-right: 5px;
        }
        .n-name:hover {
          text-decoration: underline;
        }
      }
      .mv {
        margin-top: 25px;
        .mv-video {
          .player {
          }
        }
      }
      .wrap {
        margin-top: 20px;
        color: #333;
        width: 100%;
        display: flex;
        flex-direction: row;
        // justify-content: space-between;
        span {
          height: 26px;
          line-height: 26px;
          padding: 0 10px;
          background-color: #f5f5f6;
          border: 1px solid #acadae;
          border-radius: 5px;
          i {
            font-size: 14px;
            margin-right: 5px;
          }
          margin-right: 10px;
        }
      }
      .m-evalute {
        margin-top: 40px;
        .e-title {
          font-size: 24px;
          color: black;
          border-bottom: 2px solid #c20c0c;
          padding-bottom: 5px;
          .e-count {
            font-size: 12px;
            color: #666666;
            padding-left: 20px;
          }
        }
      }
    }
    .m-right {
      flex: 1;
      padding: 20px 40px 40px 30px;
      border-left: 1px solid #d3d3d3;
      .m-s {
        height: 23px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
        color: #333;
        font-size: 12px;
      }
      .m-list {
        display: flex;
        margin-bottom: 10px;
        .m-list-left {
          width: 120px;
          height: 70px;
          position: relative;
          .m-list-title {
            width: 120px;
            position: absolute;
            top: 0;
            right: 0;
            padding-right: 5px;
            height: 20px;
            line-height: 20px;
            color: #fff;
            box-sizing: border-box;
            text-align: right;
            background-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 0.3)
            );
            span {
              padding-left: 3px;
            }
          }
        }
        .m-list-right {
          margin-left: 8px;
          .r-title {
            width: 94px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            line-height: 25px;
            color: black;
            font-size: 16px;
            cursor: pointer;
          }
          p {
            line-height: 20px;
          }
          p:nth-child(3) {
            margin-top: 2px;
            cursor: pointer;
          }
          p:nth-child(3):hover {
            text-decoration: underline;
          }
        }
      }
      .m-detail {
        .m-info {
          margin: 10px 0 20px;
          color: black;
        }
      }
    }
  }
}
</style>