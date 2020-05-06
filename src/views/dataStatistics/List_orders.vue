<template>
  <div class="List_orders">
    <Crumbs></Crumbs>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <!-- 今日 -->
      <el-tab-pane label="今日" name="today">
        <div class="search">
          <el-input v-model="search" placeholder="请输入搜索的商品名称" style="width:20%"></el-input>
          <el-button type="primary" style="margin-left:50px">搜索</el-button>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="头像" width="400" align="center"></el-table-column>
          <el-table-column label="会员名称" align="center">
            <template slot-scope="scope">
              <div @click="MemberName(scope.row)">{{scope.row.address}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="出单量" width="400" align="center"></el-table-column>
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
        <!-- 弹出框 -->
        <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </el-tab-pane>
      <!-- 昨日 -->
      <el-tab-pane label="昨日" name="yesterday">
        <div class="search">
          <el-input v-model="search" placeholder="请输入搜索的商品名称" style="width:20%"></el-input>
          <el-button type="primary" style="margin-left:50px">搜索</el-button>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="头像" width="400" align="center"></el-table-column>
          <el-table-column prop="address" label="会员名称" align="center"></el-table-column>
          <el-table-column prop="name" label="出单量" width="400" align="center"></el-table-column>
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
        <div class="search">
          <el-input v-model="search" placeholder="请输入搜索的商品名称" style="width:20%"></el-input>
          <el-button type="primary" style="margin-left:50px">搜索</el-button>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="头像" width="400" align="center"></el-table-column>
          <el-table-column prop="address" label="会员名称" align="center"></el-table-column>
          <el-table-column prop="name" label="出单量" width="400" align="center"></el-table-column>
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
        <div class="search">
          <el-input v-model="search" placeholder="请输入搜索的商品名称" style="width:20%"></el-input>
          <el-button type="primary" style="margin-left:50px">搜索</el-button>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="头像" width="400" align="center"></el-table-column>
          <el-table-column prop="address" label="会员名称" align="center"></el-table-column>
          <el-table-column prop="name" label="出单量" width="400" align="center"></el-table-column>
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
      <!-- 所有 -->
      <el-tab-pane label="所有" name="All">
        <div class="search">
          <el-input v-model="search" placeholder="请输入搜索的商品名称" style="width:20%"></el-input>
          <el-button type="primary" style="margin-left:50px">搜索</el-button>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="头像" width="400" align="center"></el-table-column>
          <el-table-column prop="address" label="会员名称" align="center"></el-table-column>
          <el-table-column prop="name" label="出单量" width="400" align="center"></el-table-column>
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
      form:{
        name:'',
        region:''
      },
      formLabelWidth: '120px',
      dialogFormVisible: false,
      tableData: [
        {
          date: "京东",
          name: "1",
          address: "上海市普陀区金沙江路 1518 弄",
          link: ""
        },
        {
          date: "淘宝",
          name: "2",
          address: "上海市普陀区金沙江路 1517 弄",
          link: ""
        },
        {
          date: "拼多多",
          name: "3",
          address: "上海市普陀区金沙江路 1519 弄",
          link: ""
        },
        {
          date: "爱奇艺",
          name: "4",
          address: "上海市普陀区金沙江路 1516 弄",
          link: ""
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
    },
    MemberName(row) {
      console.log(row);
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
