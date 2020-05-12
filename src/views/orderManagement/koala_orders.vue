<template>
  <div class="koala_orders">
    <Crumbs></Crumbs>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <!-- 今日 -->
      <el-tab-pane label="今日" name="today">
        <div class="type">
          <el-select v-model="value" placeholder="请选择搜索类型">
            <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <el-button type="primary" style="margin-left:50px">搜索</el-button>
          <el-button type="success" size="small" style="margin-left:50px">预估效果：3759.7元</el-button>
          <el-button type="success" size="small">预估利润：588.47元</el-button>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="numericalOrder" label="订单号" align="center"></el-table-column>
          <el-table-column prop="TypesBonus" label="商品信息" width="450" align="center"></el-table-column>
          <el-table-column prop="OperatorClass" label="会员" align="center"></el-table-column>
          <el-table-column prop="OrderBonus" label="订单状态" align="center"></el-table-column>
          <el-table-column prop="numberParticipants" label="分佣状态" align="center"></el-table-column>
          <el-table-column prop="totalCommission" label="效果预估" align="center"></el-table-column>
          <el-table-column prop="perCapita" label="预估利润" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <el-button type="primary" size="small" @click="orderDetails">订单详情</el-button>
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
      <!-- 2020-03 -->
      <el-tab-pane label="2020-05" name="May">
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
      <!-- 2020-04 -->
      <el-tab-pane label="2020-04" name="April">
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
      <!-- 订单详情 -->
      <el-dialog title="订单详情" :visible.sync="dialogFormVisible" width="40%">
        <el-form :model="form">
          <el-divider content-position="left" style="margin:16px 0;">基本信息</el-divider>
          <el-row>
            <el-col :span="12">
              <el-form-item label="订单号：" :label-width="formLabelWidth">
                <el-input v-model="form.orderNumber" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="子订单号：" :label-width="formLabelWidth">
                <el-input v-model="form.childOrderNumber" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="商品ID：" :label-width="formLabelWidth">
                <el-input v-model="form.goodsID" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="下单人：" :label-width="formLabelWidth">
                <el-input v-model="form.orderPlacer" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="分佣状态：" :label-width="formLabelWidth">
                <el-input v-model="form.CommissionState" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="订单状态：" :label-width="formLabelWidth">
                <el-input v-model="form.orderStatus" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="佣金比例：" :label-width="formLabelWidth">
                <el-input v-model="form.commissionRate" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="效果预估：" :label-width="formLabelWidth">
                <el-input v-model="form.EstimateEffect" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-divider content-position="left" style="margin:16px 0;">商品管理</el-divider>
          <el-row>
            <el-col :span="24">
              <el-form-item label="商品：" :label-width="formLabelWidth">
                <el-input v-model="form.commodity" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="店铺：" :label-width="formLabelWidth">
                <el-input v-model="form.store" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="付款金额：" :label-width="formLabelWidth">
                <el-input v-model="form.paymentAmount" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="商品单价：" :label-width="formLabelWidth">
                <el-input v-model="form.CommodityPrice" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-divider content-position="left" style="margin:16px 0;">确认收货</el-divider>
          <el-row>
            <el-col :span="12">
              <el-form-item label="确认收货：" :label-width="formLabelWidth">
                <el-input v-model="form.confirmReceipt" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="满额结：" :label-width="formLabelWidth">
                <el-input v-model="form.FullKnot" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="维权：" :label-width="formLabelWidth">
                <el-input v-model="form.safeguard_legal_rights" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="0元购：" :label-width="formLabelWidth">
                <el-input v-model="form.yuanBuy" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="淘礼金：" :label-width="formLabelWidth">
                <el-input v-model="form.ForTheAmounts" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="返还金额：" :label-width="formLabelWidth">
                <el-input v-model="form.refund" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-divider content-position="left" style="margin:16px 0;">推广位</el-divider>
          <el-row>
            <el-col :span="12">
              <el-form-item label="推广位ID：" :label-width="formLabelWidth">
                <el-input v-model="form.generalize" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="渠道ID：" :label-width="formLabelWidth">
                <el-input v-model="form.MemberOperation" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="会员运营ID：" :label-width="formLabelWidth">
                <el-input v-model="form.MemberOperation" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="新增来源：" :label-width="formLabelWidth">
                <el-input v-model="form.OrdersForNew" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="更新来源：" :label-width="formLabelWidth">
                <el-input v-model="form.UpdateOrder" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="创建时间：" :label-width="formLabelWidth">
                <el-input v-model="form.createTime" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="更新时间：" :label-width="formLabelWidth">
                <el-input v-model="form.turnoverTime" autocomplete="off"></el-input>
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
      search: "",
      value: "",
      dialogFormVisible: false,
      formLabelWidth: "100px",
      form: {
        orderNumber: "867888833106797165",
        childOrderNumber: "867888833106797165",
        goodsID:"573132162691",
        orderPlacer:"Sun flower",
        CommissionState:"1",
        orderStatus:"结算",
        commissionRate:"30.00",
        EstimateEffect:"10.20",
        commodity:"咪芽孕妇专用面膜纯补水保湿哺乳怀孕期可用护肤品官方旗舰店正品",
        store:"咪芽旗舰店",
        paymentAmount:"34.00",
        CommodityPrice:"129.00",
        confirmReceipt:"2020-03-04 20:35:21",
        FullKnot:"0",
        safeguard_legal_rights:"",
        yuanBuy:"",
        ForTheAmounts:"",
        refund:"",
        generalize:"1236550169_109935350316",
        MemberOperation:"无",
        OrdersForNew:"API",
        UpdateOrder:"API",
        createTime:"2020-02-29 22:11:21",
        turnoverTime:"2020-03-04 20:37:13"
      },
      options: [
        {
          id: 1,
          name: "全部"
        },
        {
          id: 2,
          name: "预售"
        }
      ],
      currentPage: 1,
      tableData: [
        {
          numericalOrder: "867888833106797165",
          TypesBonus:
            "咪芽孕妇专用面膜纯补水保湿哺乳怀孕期可用护肤品官方旗舰店正品",
          OperatorClass: "Sun flower",
          OrderBonus: "1",
          numberParticipants: "0",
          totalCommission: "￥10.20",
          perCapita: "￥3.06",
          proportionBonus: "32.36"
        },
        {
          numericalOrder: "867888833106797165",
          TypesBonus:
            "咪芽孕妇专用面膜纯补水保湿哺乳怀孕期可用护肤品官方旗舰店正品",
          OperatorClass: "Sun flower",
          OrderBonus: "1",
          numberParticipants: "0",
          totalCommission: "￥10.20",
          perCapita: "￥3.06",
          proportionBonus: "32.36"
        },
        {
          numericalOrder: "867888833106797165",
          TypesBonus:
            "咪芽孕妇专用面膜纯补水保湿哺乳怀孕期可用护肤品官方旗舰店正品",
          OperatorClass: "Sun flower",
          OrderBonus: "1",
          numberParticipants: "0",
          totalCommission: "￥10.20",
          perCapita: "￥3.06",
          proportionBonus: "32.36"
        },
        {
          numericalOrder: "867888833106797165",
          TypesBonus:
            "咪芽孕妇专用面膜纯补水保湿哺乳怀孕期可用护肤品官方旗舰店正品",
          OperatorClass: "Sun flower",
          OrderBonus: "1",
          numberParticipants: "0",
          totalCommission: "￥10.20",
          perCapita: "￥3.06",
          proportionBonus: "32.36"
        },
        {
          numericalOrder: "867888833106797165",
          TypesBonus:
            "咪芽孕妇专用面膜纯补水保湿哺乳怀孕期可用护肤品官方旗舰店正品",
          OperatorClass: "Sun flower",
          OrderBonus: "1",
          numberParticipants: "0",
          totalCommission: "￥10.20",
          perCapita: "￥3.06",
          proportionBonus: "32.36"
        },
        {
          numericalOrder: "867888833106797165",
          TypesBonus:
            "咪芽孕妇专用面膜纯补水保湿哺乳怀孕期可用护肤品官方旗舰店正品",
          OperatorClass: "Sun flower",
          OrderBonus: "1",
          numberParticipants: "0",
          totalCommission: "￥10.20",
          perCapita: "￥3.06",
          proportionBonus: "32.36"
        },
        {
          numericalOrder: "867888833106797165",
          TypesBonus:
            "咪芽孕妇专用面膜纯补水保湿哺乳怀孕期可用护肤品官方旗舰店正品",
          OperatorClass: "Sun flower",
          OrderBonus: "1",
          numberParticipants: "0",
          totalCommission: "￥10.20",
          perCapita: "￥3.06",
          proportionBonus: "32.36"
        }
      ]
    };
  },
  methods: {
    orderDetails() {
      this.dialogFormVisible = true;
    },
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
.type {
  margin-bottom: 20px;
}

.paging {
  margin-top: 20px;
  float: right;
}
</style>
