<template></template>

<script>
import { _getPersonalizedMv } from "../../../network/axios";
export default {
  name: "PersonalizedMv",
  created() {
      this._getPersonalizedMv();
  },
  methods: {
    _getPersonalizedMv() {
      return _getPersonalizedMv.then((res)=>{
          console.log(res);
      });
    },
  },
};
</script>

<style>
</style>