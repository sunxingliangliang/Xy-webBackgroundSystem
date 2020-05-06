<template>
  <div class="crumbs">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{authName}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{activeName}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 一级菜单
      authName: "",
      //二级菜单
      activeName: ""
    };
  },
  created() {
    //  取一级菜单
    this.authName = window.sessionStorage.getItem("authName");
    // 取二级菜单
    this.activeName = window.sessionStorage.getItem("activeName");
  }
};
</script>
<style>
.crumbs {
  padding-bottom: 20px;
}
</style>