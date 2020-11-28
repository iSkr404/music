<template>
  <div class="mvlist">
    <img :src="mvlist.cover" width="290px" height="190px" alt="" @click="mvdateilClick(mvlist.id)" />
    <div>{{ mvlist.name }}</div>
    <span>{{ mvlist.artistName }}</span>
    <p class="playCount"><span></span>
      <i class="el-icon-view"></i>{{ mvlist.playCount|formCount}}
    </p>
  </div>
</template>

<script>
export default {
  name: "mvlist",
  props: ["mvlist"],
  methods: {
    mvdateilClick(id){
      this.$store.commit('setPause');
      this.$router.push({path:'/home/mvdetail',query:{id:id}});
    }
  },
  filters:{
    formCount(val){
      let count=Math.round(val/10000);
      if(count>=10){
        return count+'万';
      }else{
        return val;
      }
    }
  },
};
</script>

<style lang="less" scoped>
.mvlist {
  position: relative;
  img {
    border-radius: 5px;
  }
  div {
    padding-top: 5px;
    font-size: 18px;
    width: 290px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .playCount {
    position: absolute;
    right: 0;
    top: 0;
    color: white;
    width: 290px;
    text-align: right;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.3)
    );
    padding-right: 5px;
    border-radius: 0 5px 0 0;
    i{
      padding-right: 5px;
    }
  }
  margin-bottom: 20px;
}
</style>