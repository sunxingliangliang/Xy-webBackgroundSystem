<template>
  <div class="global_dividend">
    <Crumbs></Crumbs>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
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
      activeName: "currentMonth",
      search: "",
      currentPage: 1,
      tableData: [
        {
          numericalOrder: "1",
          TypesBonus: "1",
          OperatorClass: "运营商等级名称",
          OrderBonus: "12",
          numberParticipants: "0",
          totalCommission: "32.36",
          perCapita: "0.00",
          proportionBonus: "32.36",
          createTime: "2020-05-07 03:06:41"
        },
        {
          numericalOrder: "1",
          TypesBonus: "1",
          OperatorClass: "运营商等级名称",
          OrderBonus: "12",
          numberParticipants: "0",
          totalCommission: "32.36",
          perCapita: "0.00",
          proportionBonus: "32.36",
          createTime: "2020-05-07 03:06:41"
        },
        {
          numericalOrder: "1",
          TypesBonus: "1",
          OperatorClass: "运营商等级名称",
          OrderBonus: "12",
          numberParticipants: "0",
          totalCommission: "32.36",
          perCapita: "0.00",
          proportionBonus: "32.36",
          createTime: "2020-05-07 03:06:41"
        },
        {
          numericalOrder: "1",
          TypesBonus: "1",
          OperatorClass: "运营商等级名称",
          OrderBonus: "12",
          numberParticipants: "0",
          totalCommission: "32.36",
          perCapita: "0.00",
          proportionBonus: "32.36",
          createTime: "2020-05-07 03:06:41"
        },
        {
          numericalOrder: "1",
          TypesBonus: "1",
          OperatorClass: "运营商等级名称",
          OrderBonus: "12",
          numberParticipants: "0",
          totalCommission: "32.36",
          perCapita: "0.00",
          proportionBonus: "32.36",
          createTime: "2020-05-07 03:06:41"
        },
        {
          numericalOrder: "1",
          TypesBonus: "1",
          OperatorClass: "运营商等级名称",
          OrderBonus: "12",
          numberParticipants: "0",
          totalCommission: "32.36",
          perCapita: "0.00",
          proportionBonus: "32.36",
          createTime: "2020-05-07 03:06:41"
        },
        {
          numericalOrder: "1",
          TypesBonus: "1",
          OperatorClass: "运营商等级名称",
          OrderBonus: "12",
          numberParticipants: "0",
          totalCommission: "32.36",
          perCapita: "0.00",
          proportionBonus: "32.36",
          createTime: "2020-05-07 03:06:41"
        },
        {
          numericalOrder: "1",
          TypesBonus: "1",
          OperatorClass: "运营商等级名称",
          OrderBonus: "12",
          numberParticipants: "0",
          totalCommission: "32.36",
          perCapita: "0.00",
          proportionBonus: "32.36",
          createTime: "2020-05-07 03:06:41"
        },
        {
          numericalOrder: "1",
          TypesBonus: "1",
          OperatorClass: "运营商等级名称",
          OrderBonus: "12",
          numberParticipants: "0",
          totalCommission: "32.36",
          perCapita: "0.00",
          proportionBonus: "32.36",
          createTime: "2020-05-07 03:06:41"
        },
        {
          numericalOrder: "1",
          TypesBonus: "1",
          OperatorClass: "运营商等级名称",
          OrderBonus: "12",
          numberParticipants: "0",
          totalCommission: "32.36",
          perCapita: "0.00",
          proportionBonus: "32.36",
          createTime: "2020-05-07 03:06:41"
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
.balance {
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
