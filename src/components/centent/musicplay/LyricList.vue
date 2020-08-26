<template>
  <div class="lyriclist">
    <ul v-if="lyricList.length">
      <li v-for="(item,index) in lyricList" :key="index">{{item[1]}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    lyric: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      lyricList: []
    }
  },
  methods: {
    // parseLyric (lyric) {
    //   let RegExp = /\[(\d*:\d*\.\d*)\]/;
    //   let arr = [], timeArr = [], lyricArr = [], mergeArr = [];

    //   /**将歌词转换成数组 */
    //   arr = lyric.split('\n');

    //   for (let i of arr) {
    //     /**获取歌词 */
    //     let lrc = i.split(']')[1];
    //     if (lrc == '' || lrc == undefined) continue;
    //     lyricArr.push(lrc);

    //     /**处理时间 */
    //     let resTime = RegExp.exec(i)[1];
    //     let resTime2 = resTime.split(':');
    //     let min = parseInt(resTime2[0]) * 60;
    //     let sec = parseFloat(resTime2[1]);
    //     let time = parseFloat(Number(min + sec).toFixed(2));//toFixed返回值是String
    //     timeArr.push(time);
    //   }
    //   /**合并数组 */
    //   for (let i = 0, length = timeArr.length; i < length; i++) {
    //     let obj = new lyricItem(timeArr[i], lyricArr[i]);
    //     mergeArr.push(obj);
    //   }
    //   /**排序 */
    //   this.lyricArray = mergeArr.sort((a, b) => {
    //     return a.time - b.time;
    //   })
    //   this.length = this.lyricArray.length;
    // },
    initLyric () {
      let str = '\n'
      let lyricList1 = this.lyric.split('\n').join('').split('[').slice(1)

      // console.log(lyricList);
      for (let i of lyricList1) {
        let tr = i.split(']')
        if (tr[1] == '') continue
        this.lyricList.push(tr)
      }
    }
  },
  mounted () {
    this.initLyric()
  },
  watch: {
    lyric (val) {
      this.lyricList = []
      this.initLyric()
    }
  }
}
</script>

<style scoped lang='less'>
.lyriclist {
  margin-top: 10px;
  overflow: auto;
  height: 340px;
  li {
    height: 28px;
    line-height: 28px;
    color: #333;
  }
}
</style>