<template>
  <div class="member_management">
    <Crumbs></Crumbs>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <div class="add">
        <el-button type="primary" icon="el-icon-plus" size="small" @click="add">添加</el-button>
      </div>
      <!-- 今日 -->
      <el-tab-pane label="今日" name="today">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="memberID" label="会员ID" align="center"></el-table-column>
          <el-table-column prop="headPortrait" label="头像" align="center"></el-table-column>
          <el-table-column prop="nickName" label="昵称" align="center"></el-table-column>
          <el-table-column prop="iphone" label="手机号" align="center"></el-table-column>
          <el-table-column prop="class" label="等级" align="center"></el-table-column>
          <el-table-column prop="openingTime" label="性别" align="center"></el-table-column>
          <el-table-column prop="gender" label="推荐人" align="center"></el-table-column>
          <el-table-column prop="referrer" label="自购订单" align="center"></el-table-column>
          <el-table-column prop="purchaseOrder" label="余额" align="center"></el-table-column>
          <el-table-column prop="balance" label="累计收益" align="center"></el-table-column>
          <el-table-column prop="accumulatedIncome" label="最近登录时间" align="center"></el-table-column>
          <el-table-column prop="registrationDate" label="注册时间" align="center"></el-table-column>
          <el-table-column prop="state" label="状态" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <el-button type="danger" size="small">删除</el-button>
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
      <!-- 所有 -->
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
      <!-- 添加 -->
      <el-dialog title="添加" :visible.sync="dialogFormVisible" width="30%">
        <el-form :model="form">
          <el-row>
            <el-col :span="24">
              <el-form-item label="昵称：" :label-width="formLabelWidth">
                <el-input v-model="form.orderNumber" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="手机号：" :label-width="formLabelWidth">
                <el-input v-model="form.orderNumber" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="邀请码：" :label-width="formLabelWidth">
                <el-input v-model="form.childOrderNumber" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="密码：" :label-width="formLabelWidth">
                <el-input v-model="form.goodsID" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="推荐人：" :label-width="formLabelWidth">
                <el-input v-model="form.CommissionState" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="性别：" :label-width="formLabelWidth">
                <el-select v-model="value" placeholder="请选择搜索类型">
                  <el-option
                    v-for="item in options"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
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
      dialogFormVisible: false,
      formLabelWidth: "100px",
      value: "",
      options: [
        {
          id: 1,
          name: "男"
        },
        {
          id: 2,
          name: "女"
        }
      ],
      form: {
        orderNumber: "",
        childOrderNumber: "",
        goodsID: "",
        orderPlacer: "",
        CommissionState: "",
        orderStatus: "",
        commissionRate: "",
        EstimateEffect: ""
      },

      tableData: [
        {
          memberID: "646",
          headPortrait: "",
          nickName: "昵称",
          iphone: "15763010234",
          class: "1",
          openingTime: "1",
          gender: "2",
          referrer: "xin啊",
          purchaseOrder: "0",
          balance: "0.00",
          accumulatedIncome: "2020-03-02",
          registrationDate: "2020-03-02 19:22",
          state: "1"
        },
        {
          memberID: "646",
          headPortrait: "",
          nickName: "昵称",
          iphone: "15763010234",
          class: "1",
          openingTime: "1",
          gender: "2",
          referrer: "xin啊",
          purchaseOrder: "0",
          balance: "0.00",
          accumulatedIncome: "2020-03-02",
          registrationDate: "2020-03-02 19:22",
          state: "1"
        },
        {
          memberID: "646",
          headPortrait: "",
          nickName: "昵称",
          iphone: "15763010234",
          class: "1",
          openingTime: "1",
          gender: "2",
          referrer: "xin啊",
          purchaseOrder: "0",
          balance: "0.00",
          accumulatedIncome: "2020-03-02",
          registrationDate: "2020-03-02 19:22",
          state: "1"
        },
        {
          memberID: "646",
          headPortrait: "",
          nickName: "昵称",
          iphone: "15763010234",
          class: "1",
          openingTime: "1",
          gender: "2",
          referrer: "xin啊",
          purchaseOrder: "0",
          balance: "0.00",
          accumulatedIncome: "2020-03-02",
          registrationDate: "2020-03-02 19:22",
          state: "1"
        },
        {
          memberID: "646",
          headPortrait: "",
          nickName: "昵称",
          iphone: "15763010234",
          class: "1",
          openingTime: "1",
          gender: "2",
          referrer: "xin啊",
          purchaseOrder: "0",
          balance: "0.00",
          accumulatedIncome: "2020-03-02",
          registrationDate: "2020-03-02 19:22",
          state: "1"
        },
        {
          memberID: "646",
          headPortrait: "",
          nickName: "昵称",
          iphone: "15763010234",
          class: "1",
          openingTime: "1",
          gender: "2",
          referrer: "xin啊",
          purchaseOrder: "0",
          balance: "0.00",
          accumulatedIncome: "2020-03-02",
          registrationDate: "2020-03-02 19:22",
          state: "1"
        },
        {
          memberID: "646",
          headPortrait: "",
          nickName: "昵称",
          iphone: "15763010234",
          class: "1",
          openingTime: "1",
          gender: "2",
          referrer: "xin啊",
          purchaseOrder: "0",
          balance: "0.00",
          accumulatedIncome: "2020-03-02",
          registrationDate: "2020-03-02 19:22",
          state: "1"
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
    add() {
      this.dialogFormVisible = true;
    }
  }
};
</script>
<style lang="scss">
.add {
  margin-bottom: 20px;
}
.paging {
  margin-top: 20px;
  float: right;
}
</style>
