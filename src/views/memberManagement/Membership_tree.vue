<template>
  <div class="Membership_tree">
    <Crumbs></Crumbs>
    <div class="search">
          <el-input v-model="search" placeholder="请根据联系电话或昵称搜索" style="width:20%"></el-input>
          <el-button type="primary" style="margin-left:50px">搜索</el-button>
        </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="state" label="状态" align="center"></el-table-column>
      <el-table-column prop="nickName" label="昵称" align="center"></el-table-column>
      <el-table-column prop="relation" label="代理级别" align="center"></el-table-column>
      <el-table-column prop="memberID" label="会员ID" align="center"></el-table-column>
      <el-table-column prop="iphone" label="联系电话" align="center"></el-table-column>
      <el-table-column prop="createTime" label="注册时间" align="center"></el-table-column>
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
      currentPage: 1,
      search: "",
      tableData: [
        {
          state: "1",
          nickName: "昵称",
          relation: "非代理",
          memberID: "1",
          iphone: "15812111117",
          createTime:"2020-03-02"
        },
        {
          state: "1",
          nickName: "昵称",
          relation: "非代理",
          memberID: "1",
          iphone: "15812111117",
          createTime:"2020-03-02"
        },
        {
          state: "1",
          nickName: "昵称",
          relation: "非代理",
          memberID: "1",
          iphone: "15812111117",
          createTime:"2020-03-02"
        },
        {
          state: "1",
          nickName: "昵称",
          relation: "非代理",
          memberID: "1",
          iphone: "15812111117",
          createTime:"2020-03-02"
        },
        {
          state: "1",
          nickName: "昵称",
          relation: "非代理",
          memberID: "1",
          iphone: "15812111117",
          createTime:"2020-03-02"
        },
        {
          state: "1",
          nickName: "昵称",
          relation: "非代理",
          memberID: "1",
          iphone: "15812111117",
          createTime:"2020-03-02"
        },
        {
          state: "1",
          nickName: "昵称",
          relation: "非代理",
          memberID: "1",
          iphone: "15812111117",
          createTime:"2020-03-02"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="scss">
.search {
  margin-bottom: 20px;
}
.paging {
  margin-top: 20px;
  float: right;
}
</style>
