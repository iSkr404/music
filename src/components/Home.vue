<template>
  <div>
    <el-container>
      <!-- 头部信息 -->
      <el-header>
        <header-temp></header-temp>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px" style="overflow-y:hidden;">
          <aside-menu> </aside-menu>
        </el-aside>
        <!-- 主体部分 -->
        <el-main>
          <!-- 通过路由匹配切换组件 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
// 侧边栏组件
import asideMenu from './aside/Aside.vue'
// 头部
import headerTemp from './header/header'
export default {

  components: {
    asideMenu,
    headerTemp
  }
}
</script>

<style lang='less'>
.el-header {
  padding: 0 !important;
}
</style>
