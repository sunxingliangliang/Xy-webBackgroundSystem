<template>
  <div class="Member_withdrawal_management">
    <Crumbs></Crumbs>
    <div class="type">
      <el-select v-model="value" placeholder="请选择搜索类型">
        <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
      <el-button type="primary" style="margin-left:50px">搜索</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="序号" width="100" align="center"></el-table-column>
      <el-table-column prop="name" label="会员昵称" width="180" align="center"></el-table-column>
      <el-table-column prop="CollectionAlipay" label="收款支付宝" align="center"></el-table-column>
      <el-table-column prop="AlipayName" label="支付宝姓名" align="center"></el-table-column>
      <el-table-column prop="withdrawDeposit" label="提现(元)" align="center"></el-table-column>
      <el-table-column prop="serviceCharge" label="手续费(元)" align="center"></el-table-column>
      <el-table-column prop="account" label="到账(元)" align="center"></el-table-column>
      <el-table-column prop="createTime" label="申请时间" align="center"></el-table-column>
      <el-table-column prop="state" label="状态" align="center"></el-table-column>
      <el-table-column prop="audit" label="审核" align="center"></el-table-column>
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
      currentPage:1,
      value: "",
      options: [
        {
          id: 1,
          name: "待审"
        },
        {
          id: 2,
          name: "驳回"
        },
        {
          id: 3,
          name: "成功"
        }
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          CollectionAlipay: "363508236@qq.com",
          AlipayName: "葛雯文",
          withdrawDeposit: "8.00",
          serviceCharge: "0.00",
          account: "8.00",
          createTime: "2020-5-01 06:56:33",
          state: 1,
          audit: ""
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          CollectionAlipay: "363508236@qq.com",
          AlipayName: "葛雯文",
          withdrawDeposit: "8.00",
          serviceCharge: "0.00",
          account: "8.00",
          createTime: "2020-5-01 06:56:33",
          state: 1,
          audit: ""
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          CollectionAlipay: "363508236@qq.com",
          AlipayName: "葛雯文",
          withdrawDeposit: "8.00",
          serviceCharge: "0.00",
          account: "8.00",
          createTime: "2020-5-01 06:56:33",
          state: 1,
          audit: ""
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          CollectionAlipay: "363508236@qq.com",
          AlipayName: "葛雯文",
          withdrawDeposit: "8.00",
          serviceCharge: "0.00",
          account: "8.00",
          createTime: "2020-5-01 06:56:33",
          state: 1,
          audit: ""
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
<style>
.type {
  margin-bottom: 20px;
}
.paging {
  margin-top: 20px;
  float: right;
}
</style>