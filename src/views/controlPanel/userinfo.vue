<template>
  <div class="userinfo">
    <Crumbs></Crumbs>
    <div class="search">
      <el-input v-model="search" placeholder="请输入手机号或昵称搜索" style="width:20%"></el-input>
      <el-button type="primary" style="margin-left:50px">搜索</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="头像" width="180" align="center"></el-table-column>
      <el-table-column prop="name" label="手机号" width="180" align="center"></el-table-column>
      <el-table-column prop="address" label="昵称" align="center"></el-table-column>
      <el-table-column prop="address" label="性别" align="center"></el-table-column>
      <el-table-column prop="address" label="心情便签" align="center"></el-table-column>
      <el-table-column prop="address" label="省市" align="center"></el-table-column>
      <el-table-column prop="address" label="是否vip" align="center"></el-table-column>
      <el-table-column prop="address" label="是否封号" align="center"></el-table-column>
    </el-table>
    <div class="paging">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import Crumbs from "@/components/crumbs";
export default {
  components: {
    Crumbs
  },
  data() {
    return {
      search: "",
      currentPage: 1,
      tableData: [
        {
          date: "2016-05-02",
          name: "1",
          address: "21518"
        },
        {
          date: "2016-05-04",
          name: "1",
          address: "21518"
        },
        {
          date: "2016-05-01",
          name: "1",
          address: "21518"
        },
        {
          date: "2016-05-03",
          name: "1",
          address: "21518"
        }
      ]
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.search {
  margin-bottom: 20px;
}

.paging {
  margin-top: 20px;
  float: right;
}
</style>