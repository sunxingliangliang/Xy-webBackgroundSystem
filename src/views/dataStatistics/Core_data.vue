<template>
  <div class="CoreData">
    <Crumbs></Crumbs>
    <div class="date">
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></el-date-picker>
      <el-button type="primary" style="margin-left:50px">搜索</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180" align="center"></el-table-column>
      <el-table-column prop="name" label="付款订单数量" width="180" align="center"></el-table-column>
      <el-table-column prop="address" label="新增用户数量" align="center"></el-table-column>
      <el-table-column prop="address" label="运营商新增数量" align="center"></el-table-column>
      <el-table-column prop="address" label="预估佣金" align="center"></el-table-column>
      <el-table-column prop="address" label="结算佣金" align="center"></el-table-column>
      <el-table-column prop="address" label="升级费" align="center"></el-table-column>
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
      value1: "",
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
<style lang="scss">
.date {
  margin-bottom: 20px;
}
.paging {
  margin-top: 20px;
  float: right;
}
</style>>
