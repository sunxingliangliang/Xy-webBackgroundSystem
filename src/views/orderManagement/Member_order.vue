<template>
  <div class="Member_order">
    <Crumbs></Crumbs>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <!-- 今日 -->
      <el-tab-pane label="今日" name="today">
        <div class="money">
          <el-button type="success" size="small">今日：0.00元</el-button>
          <el-button type="success" size="small">昨日：6.55元</el-button>
          <el-button type="success" size="small">累计：65.00元</el-button>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="serialNumber" label="序号" align="center"></el-table-column>
          <el-table-column prop="nickname" label="昵称" align="center"></el-table-column>
          <el-table-column prop="orderNumber" label="订单号" align="center"></el-table-column>
          <el-table-column prop="typePayment" label="支付类型" align="center"></el-table-column>
          <el-table-column prop="UpgradeType" label="升级类型" align="center"></el-table-column>
          <el-table-column prop="openingTime" label="开通时长(月)" align="center"></el-table-column>
          <el-table-column prop="money" label="金额" align="center"></el-table-column>
          <el-table-column prop="actualPayment" label="实际支付金额" align="center"></el-table-column>
          <el-table-column prop="orderStatus" label="订单状态" align="center"></el-table-column>
          <el-table-column prop="timeApplication" label="申请时间" align="center"></el-table-column>
          <el-table-column prop="auditTime" label="审核时间" align="center"></el-table-column>
          <el-table-column prop="audit" label="审核" align="center"></el-table-column>
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
      </el-tab-pane>
      <!-- 昨日 -->
      <el-tab-pane label="昨日" name="yesterday">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="numericalOrder" label="序号" width="200" align="center"></el-table-column>
          <el-table-column prop="TypesBonus" label="分红类型" align="center"></el-table-column>
          <el-table-column prop="OperatorClass" label="运营商等级" align="center"></el-table-column>
          <el-table-column prop="OrderBonus" label="分红订单" align="center"></el-table-column>
          <el-table-column prop="numberParticipants" label="参与人数" align="center"></el-table-column>
          <el-table-column prop="totalCommission" label="总佣金(元)" align="center"></el-table-column>
          <el-table-column prop="perCapita" label="人均(元)" align="center"></el-table-column>
          <el-table-column prop="proportionBonus" label="分红比例(%)" align="center"></el-table-column>
          <el-table-column prop="createTime" label="分红时间" align="center"></el-table-column>
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
      </el-tab-pane>
      <!-- 本月 -->
      <el-tab-pane label="本月" name="currentMonth">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="numericalOrder" label="序号" width="200" align="center"></el-table-column>
          <el-table-column prop="TypesBonus" label="分红类型" align="center"></el-table-column>
          <el-table-column prop="OperatorClass" label="运营商等级" align="center"></el-table-column>
          <el-table-column prop="OrderBonus" label="分红订单" align="center"></el-table-column>
          <el-table-column prop="numberParticipants" label="参与人数" align="center"></el-table-column>
          <el-table-column prop="totalCommission" label="总佣金(元)" align="center"></el-table-column>
          <el-table-column prop="perCapita" label="人均(元)" align="center"></el-table-column>
          <el-table-column prop="proportionBonus" label="分红比例(%)" align="center"></el-table-column>
          <el-table-column prop="createTime" label="分红时间" align="center"></el-table-column>
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
      </el-tab-pane>
      <!-- 上月 -->
      <el-tab-pane label="上月" name="lastMonth">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="numericalOrder" label="序号" width="200" align="center"></el-table-column>
          <el-table-column prop="TypesBonus" label="分红类型" align="center"></el-table-column>
          <el-table-column prop="OperatorClass" label="运营商等级" align="center"></el-table-column>
          <el-table-column prop="OrderBonus" label="分红订单" align="center"></el-table-column>
          <el-table-column prop="numberParticipants" label="参与人数" align="center"></el-table-column>
          <el-table-column prop="totalCommission" label="总佣金(元)" align="center"></el-table-column>
          <el-table-column prop="perCapita" label="人均(元)" align="center"></el-table-column>
          <el-table-column prop="proportionBonus" label="分红比例(%)" align="center"></el-table-column>
          <el-table-column prop="createTime" label="分红时间" align="center"></el-table-column>
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
      </el-tab-pane>
      <!-- 2020-03 -->
      <el-tab-pane label="所有" name="All">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="numericalOrder" label="序号" width="200" align="center"></el-table-column>
          <el-table-column prop="TypesBonus" label="分红类型" align="center"></el-table-column>
          <el-table-column prop="OperatorClass" label="运营商等级" align="center"></el-table-column>
          <el-table-column prop="OrderBonus" label="分红订单" align="center"></el-table-column>
          <el-table-column prop="numberParticipants" label="参与人数" align="center"></el-table-column>
          <el-table-column prop="totalCommission" label="总佣金(元)" align="center"></el-table-column>
          <el-table-column prop="perCapita" label="人均(元)" align="center"></el-table-column>
          <el-table-column prop="proportionBonus" label="分红比例(%)" align="center"></el-table-column>
          <el-table-column prop="createTime" label="分红时间" align="center"></el-table-column>
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
      </el-tab-pane>
    </el-tabs>
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
      activeName: "today",
      currentPage: 1,
      tableData: [
        {
          serialNumber : "1",
          nickname:"咪芽孕妇",
          orderNumber: "867888833106797165",
          typePayment : "1",
          UpgradeType: "0",
          openingTime: "1",
          money: "3.06",
          actualPayment: "32.36",
          orderStatus:"1",
          timeApplication:"2020-03-03",
          auditTime:"2020-01-01",
          audit:"1"
        },
        {
          serialNumber : "1",
          nickname:"咪芽孕妇",
          orderNumber: "867888833106797165",
          typePayment : "1",
          UpgradeType: "0",
          openingTime: "1",
          money: "3.06",
          actualPayment: "32.36",
          orderStatus:"1",
          timeApplication:"2020-03-03",
          auditTime:"2020-01-01",
          audit:"1"
        },
        {
          serialNumber : "1",
          nickname:"咪芽孕妇",
          orderNumber: "867888833106797165",
          typePayment : "1",
          UpgradeType: "0",
          openingTime: "1",
          money: "3.06",
          actualPayment: "32.36",
          orderStatus:"1",
          timeApplication:"2020-03-03",
          auditTime:"2020-01-01",
          audit:"1"
        },
        {
          serialNumber : "1",
          nickname:"咪芽孕妇",
          orderNumber: "867888833106797165",
          typePayment : "1",
          UpgradeType: "0",
          openingTime: "1",
          money: "3.06",
          actualPayment: "32.36",
          orderStatus:"1",
          timeApplication:"2020-03-03",
          auditTime:"2020-01-01",
          audit:"1"
        },
        {
          serialNumber : "1",
          nickname:"咪芽孕妇",
          orderNumber: "867888833106797165",
          typePayment : "1",
          UpgradeType: "0",
          openingTime: "1",
          money: "3.06",
          actualPayment: "32.36",
          orderStatus:"1",
          timeApplication:"2020-03-03",
          auditTime:"2020-01-01",
          audit:"1"
        },
        {
          serialNumber : "1",
          nickname:"咪芽孕妇",
          orderNumber: "867888833106797165",
          typePayment : "1",
          UpgradeType: "0",
          openingTime: "1",
          money: "3.06",
          actualPayment: "32.36",
          orderStatus:"1",
          timeApplication:"2020-03-03",
          auditTime:"2020-01-01",
          audit:"1"
        },
        {
          serialNumber : "1",
          nickname:"咪芽孕妇",
          orderNumber: "867888833106797165",
          typePayment : "1",
          UpgradeType: "0",
          openingTime: "1",
          money: "3.06",
          actualPayment: "32.36",
          orderStatus:"1",
          timeApplication:"2020-03-03",
          auditTime:"2020-01-01",
          audit:"1"
        },
        {
          serialNumber : "1",
          nickname:"咪芽孕妇",
          orderNumber: "867888833106797165",
          typePayment : "1",
          UpgradeType: "0",
          openingTime: "1",
          money: "3.06",
          actualPayment: "32.36",
          orderStatus:"1",
          timeApplication:"2020-03-03",
          auditTime:"2020-01-01",
          audit:"1"
        },
        {
          serialNumber : "1",
          nickname:"咪芽孕妇",
          orderNumber: "867888833106797165",
          typePayment : "1",
          UpgradeType: "0",
          openingTime: "1",
          money: "3.06",
          actualPayment: "32.36",
          orderStatus:"1",
          timeApplication:"2020-03-03",
          auditTime:"2020-01-01",
          audit:"1"
        },
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
.money{
  margin-bottom: 20px;
}
.paging {
  margin-top: 20px;
  float: right;
}
</style>
