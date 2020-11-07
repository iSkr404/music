<template>
  <div>{{this.mvdetail}}</div>
</template>

<script>
import { _getMvDetail } from '../../network/discover/discover';
export default {
  name: "mvdetail",
  data() {
    return {
      mvdetail:[]
    }
  },
  created() {
    this._getMvDetail();
  },
  methods: {
    _getMvDetail() {
      let id = this.$route.query.id;
      return _getMvDetail(id).then((res) => {
        this.mvdetail=res.data;
      });
    },
  },
};
</script>

<style>
</style>