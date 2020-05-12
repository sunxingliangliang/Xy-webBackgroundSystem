<template>
  <div class="Qualification_records">
    <Crumbs></Crumbs>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="serialNumber" label="序号" width="180" align="center"></el-table-column>
      <el-table-column prop="activity" label="活动" width="180" align="center"></el-table-column>
      <el-table-column prop="nickname" label="昵称" align="center"></el-table-column>
      <el-table-column prop="source" label="来源" align="center"></el-table-column>
      <el-table-column prop="ChangeValue" label="变动值" align="center"></el-table-column>
      <el-table-column prop="AfterChange" label="变动后" align="center"></el-table-column>
      <el-table-column prop="orderForm" label="订单" align="center"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" align="center"></el-table-column>
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
      tableData: [
        {
          serialNumber: "1",
          activity: "-",
          nickname: "131231231",
          source: "管理员调整",
          ChangeValue: "-11",
          AfterChange: "21",
          orderForm: "-",
          createTime: "2020-05-09 09:25:38"
        },
        {
          serialNumber: "1",
          activity: "-",
          nickname: "131231231",
          source: "管理员调整",
          ChangeValue: "-11",
          AfterChange: "21",
          orderForm: "-",
          createTime: "2020-05-09 09:25:38"
        },
        {
          serialNumber: "1",
          activity: "-",
          nickname: "131231231",
          source: "管理员调整",
          ChangeValue: "-11",
          AfterChange: "21",
          orderForm: "-",
          createTime: "2020-05-09 09:25:38"
        },
        {
          serialNumber: "1",
          activity: "-",
          nickname: "131231231",
          source: "管理员调整",
          ChangeValue: "-11",
          AfterChange: "21",
          orderForm: "-",
          createTime: "2020-05-09 09:25:38"
        },
        {
          serialNumber: "1",
          activity: "-",
          nickname: "131231231",
          source: "管理员调整",
          ChangeValue: "-11",
          AfterChange: "21",
          orderForm: "-",
          createTime: "2020-05-09 09:25:38"
        },
        {
          serialNumber: "1",
          activity: "-",
          nickname: "131231231",
          source: "管理员调整",
          ChangeValue: "-11",
          AfterChange: "21",
          orderForm: "-",
          createTime: "2020-05-09 09:25:38"
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
<style lang="scss">
.paging {
  margin-top: 20px;
  float: right;
}
</style>