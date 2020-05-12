<template>
  <div class="remaining_sum">
    <Crumbs></Crumbs>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <!-- 今日 -->
      <el-tab-pane label="今日" name="today">
        <div class="balance">
          <span>增加：0元</span>
          &nbsp;
          <span>减少：-62元</span>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="序号" width="200" align="center"></el-table-column>
          <el-table-column prop="name" label="昵称" align="center"></el-table-column>
          <el-table-column prop="address" label="金额" width="150" align="center"></el-table-column>
          <el-table-column prop="link" label="类型" width="300" align="center"></el-table-column>
          <el-table-column prop="remark" label="备注" width="300" align="center"></el-table-column>
          <el-table-column prop="createTime" label="时间" width="300" align="center"></el-table-column>
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
          <el-table-column prop="date" label="商品来源" width="200" align="center"></el-table-column>
          <el-table-column prop="address" label="商品名称"></el-table-column>
          <el-table-column prop="name" label="商品销量" width="150" align="center"></el-table-column>
          <el-table-column prop="link" label="商品链接" width="300" align="center"></el-table-column>
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
          <el-table-column prop="date" label="商品来源" width="200" align="center"></el-table-column>
          <el-table-column prop="address" label="商品名称"></el-table-column>
          <el-table-column prop="name" label="商品销量" width="150" align="center"></el-table-column>
          <el-table-column prop="link" label="商品链接" width="300" align="center"></el-table-column>
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
          <el-table-column prop="date" label="商品来源" width="200" align="center"></el-table-column>
          <el-table-column prop="address" label="商品名称"></el-table-column>
          <el-table-column prop="name" label="商品销量" width="150" align="center"></el-table-column>
          <el-table-column prop="link" label="商品链接" width="300" align="center"></el-table-column>
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
      search: "",
      currentPage: 1,
      tableData: [
        {
          date: "1111",
          name: "小羊人 🐑 👣 👛 💄",
          address: "-8.00",
          link: "其他",
          remark: "提现",
          createTime: "2020-04-30 19:06:15"
        },
        {
          date: "1",
          name: "小羊人 🐑 👣 👛 💄",
          address: "-8.00",
          link: "其他",
          remark: "提现",
          createTime: "2020-04-30 19:06:15"
        },
        {
          date: "1",
          name: "小羊人 🐑 👣 👛 💄",
          address: "-8.00",
          link: "其他",
          remark: "提现",
          createTime: "2020-04-30 19:06:15"
        },
        {
          date: "1",
          name: "小羊人 🐑 👣 👛 💄",
          address: "-8.00",
          link: "其他",
          remark: "提现",
          createTime: "2020-04-30 19:06:15"
        },
        {
          date: "1",
          name: "小羊人 🐑 👣 👛 💄",
          address: "-8.00",
          link: "其他",
          remark: "提现",
          createTime: "2020-04-30 19:06:15"
        },
        {
          date: "1",
          name: "小羊人 🐑 👣 👛 💄",
          address: "-8.00",
          link: "其他",
          remark: "提现",
          createTime: "2020-04-30 19:06:15"
        },
        {
          date: "1",
          name: "小羊人 🐑 👣 👛 💄",
          address: "-8.00",
          link: "其他",
          remark: "提现",
          createTime: "2020-04-30 19:06:15"
        },
        {
          date: "1",
          name: "小羊人 🐑 👣 👛 💄",
          address: "-8.00",
          link: "其他",
          remark: "提现",
          createTime: "2020-04-30 19:06:15"
        },
        {
          date: "1",
          name: "小羊人 🐑 👣 👛 💄",
          address: "-8.00",
          link: "其他",
          remark: "提现",
          createTime: "2020-04-30 19:06:15"
        },
        {
          date: "1",
          name: "小羊人 🐑 👣 👛 💄",
          address: "-8.00",
          link: "其他",
          remark: "提现",
          createTime: "2020-04-30 19:06:15"
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
.balance{
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
