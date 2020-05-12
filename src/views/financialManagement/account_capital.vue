<template>
  <div class="account_capital">
    <Crumbs></Crumbs>
    <div class="title">
      <i class="el-icon-s-finance" style="font-size:16px;"></i>
      <span>账户余额：￥0.00，</span>
      <span>累计充值：￥0.00，</span>
      <span>累计提现：￥0.00，</span>
      <span>累计提现手续费：￥0.00</span>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="序号" width="180" align="center"></el-table-column>
      <el-table-column prop="name" label="变动前" width="180" align="center"></el-table-column>
      <el-table-column prop="address" label="变动值" align="center"></el-table-column>
      <el-table-column prop="serviceCharge" label="手续费" align="center"></el-table-column>
      <el-table-column prop="AfterChange" label="变动后" align="center"></el-table-column>
      <el-table-column prop="state" label="类型" align="center"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" align="center"></el-table-column>
    </el-table>
    <!-- 分页 -->
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
      tableData: [
        {
          date: "1",
          name: "8.00",
          address: "2.00",
          serviceCharge: "1.00",
          AfterChange: "6.00",
          state: 1,
          createTime: "2016-05-01"
        },
        {
          date: "1",
          name: "8.00",
          address: "2.00",
          serviceCharge: "1.00",
          AfterChange: "6.00",
          state: 1,
          createTime: "2016-05-01"
        },
        {
          date: "1",
          name: "8.00",
          address: "2.00",
          serviceCharge: "1.00",
          AfterChange: "6.00",
          state: 1,
          createTime: "2016-05-01"
        },
        {
          date: "1",
          name: "8.00",
          address: "2.00",
          serviceCharge: "1.00",
          AfterChange: "6.00",
          state: 1,
          createTime: "2016-05-01"
        },
        {
          date: "1",
          name: "8.00",
          address: "2.00",
          serviceCharge: "1.00",
          AfterChange: "6.00",
          state: 1,
          createTime: "2016-05-01"
        },
        {
          date: "1",
          name: "8.00",
          address: "2.00",
          serviceCharge: "1.00",
          AfterChange: "6.00",
          state: 1,
          createTime: "2016-05-01"
        },
        {
          date: "1",
          name: "8.00",
          address: "2.00",
          serviceCharge: "1.00",
          AfterChange: "6.00",
          state: 1,
          createTime: "2016-05-01"
        },
        {
          date: "1",
          name: "8.00",
          address: "2.00",
          serviceCharge: "1.00",
          AfterChange: "6.00",
          state: 1,
          createTime: "2016-05-01"
        },
        {
          date: "1",
          name: "8.00",
          address: "2.00",
          serviceCharge: "1.00",
          AfterChange: "6.00",
          state: 1,
          createTime: "2016-05-01"
        }
      ]
    };
  },
  methods:{
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
.title {
  font-size: 15px;
  margin-bottom: 15px;
  font-weight: bold;
}
.paging {
  margin-top: 20px;
  float: right;
}
</style>