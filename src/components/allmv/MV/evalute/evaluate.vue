<template>
  <div class="eval">
    <div class="eval-user">
      <img
        width="60px"
        height="60px"
        src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50"
        alt=""
      />
      <textarea
        class="e-input"
        name=""
        id=""
        cols="90"
        rows="4"
        style="resize: none"
      ></textarea>
      <div class="corr u-arr">
        <em class="arrline">◆</em><span class="arrclr">◆</span>
      </div>
    </div>
    <div class="btns">
      <div class="btns-l">
        <i class="el-icon-picture-outline-round"></i
        ><i class="el-icon-s-fold"></i>
      </div>
      <button class="btn-fb">评价</button>
    </div>
    <h3 class="new-eval">最新评价</h3>
    <div class="eval-list" v-for="item in comment" :key="item.id">
      <div class="user-img">
        <img width="60px" height="60px" :src="item.user.avatarUrl" alt="" />
      </div>
      <div class="evalute-text">
        <span class="u-name">{{item.user.nickname}}</span>:
       {{item.content}}
      </div>
      <div class="s-time">
        <div class="r-time">{{item.time|fromTime}}</div>
        <a href="javasctipt:void(0)"
          ><span class="iconfont">&#xe60c;</span>(666)</a
        >
        <span style="color: #dbd0cc; padding: 0 5px"> | </span>

        <a href="javascript:void(0)">&nbsp;&nbsp;回复</a>
      </div>
    </div>
  </div>
</template>
<script>
import {formatDate} from '@/common/js/tool'
export default {
  name: "evaluate",
  props: ["comment"],
  filters:{
    fromTime(val){
      return formatDate(new Date(val),'MM月dd日 hh:mm');
    }
  }
};
</script>
<style lang="less" scoped>
.eval {
  margin: 30px 0;
  width: 740px;
  .eval-user {
    display: flex;
    position: relative;
    .e-input {
      margin-left: 10px;
      border-color: #cdcdcd;
      padding: 5px;
      font-size: 16px;
    }
    .corr {
      position: absolute;
      top: 11px;
      left: 62.5px;
    }
    .u-arr {
      width: 13px;
      height: 14px;
      overflow: hidden;
    }
    .arrline {
      color: #cdcdcd;
      display: block;
      font-family: "SimSun";
      font-size: 15px;
      font-style: normal;
      font-weight: normal;
      height: 10px;
      line-height: normal;
    }
    .arrclr {
      margin: -10px 0 0 1px;
      color: #fff;
      display: block;
      font-family: "SimSun";
      font-size: 15px;
      font-style: normal;
      font-weight: normal;
      height: 10px;
      line-height: normal;
    }
    .new-eval {
      border-bottom: 1px solid #cfcfcf;
    }
  }
  .btns {
    position: relative;
    height: 40px;
    .btns-l {
      position: absolute;
      font-size: 24px;
      left: 70px;
      i {
        padding-right: 10px;
        color: #9d9d9d;
      }
    }
    .btn-fb {
      background-color: #3887d2;
      color: white;
      position: absolute;
      text-align: center;
      right: 0;
      top: 10px;
      border: 0;
      width: 50px;
      height: 25px;
      border-radius: 3px;
    }
  }
  .new-eval {
    margin-top: 30px;
    font-size: 12px;
    color: black;
    border-bottom: 1px solid #cfcfcf;
  }
  .eval-list {
    padding: 15px 0;
    border-bottom: 1px dotted #cccccc;
    .user-img {
      float: left;
    }
    .evalute-text {
      margin-left: 70px;
      .u-name {
        color: #0c89d4;
      }
    }
    .s-time {
      margin-left: 70px;
      margin-top: 15px;
      text-align: right;
      .r-time {
        float: left;
      }
      a:hover {
        text-decoration: underline;
        color: #666666;
      }
    }
  }
  .eval-list:nth-last-child(1) {
    border: none;
  }
}
</style>