<template>
  <div class="SquareAudit">
    <Crumbs></Crumbs>
    <div class="search">
      <el-input v-model="search" placeholder="请输入搜索内容" style="width:20%"></el-input>
      <el-button type="primary" style="margin-left:50px">搜索</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="举报日期" align="center"></el-table-column>
      <el-table-column prop="name" label="举报者用户名" align="center"></el-table-column>
      <el-table-column prop="name" label="被举报者用户名" align="center"></el-table-column>
      <el-table-column prop="name" label="举报内容" align="center"></el-table-column>
      <el-table-column prop="address" label="举报图片" align="center"></el-table-column>
      <el-table-column prop="address" label="联系方式" align="center"></el-table-column>
      <el-table-column prop="address" label="状态" align="center"></el-table-column>
      <el-table-column prop="address" label="处理结果" align="center"></el-table-column>
      <el-table-column prop="address" label="编辑" align="center">
        <el-button size="small" type="danger">未处理</el-button>
      </el-table-column>
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
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  created() {
    // this.activePath = window.sessionStorage.getItem("activePath");
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
