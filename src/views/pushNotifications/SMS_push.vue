<template>
  <div class="SMSPush">
    <Crumbs></Crumbs>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="ID" width="180" align="center"></el-table-column>
      <el-table-column prop="name" label="用户id" width="180" align="center"></el-table-column>
      <el-table-column prop="TheTitleOf" label="标题名" align="center"></el-table-column>
      <el-table-column prop="incident" label="事件" align="center"></el-table-column>
      <el-table-column prop="iphone" label="手机号" align="center"></el-table-column>
      <el-table-column prop="internationalCode" label="国际代码" align="center"></el-table-column>
      <el-table-column prop="MessageTemplate" label="短信模板CODE" align="center"></el-table-column>
      <el-table-column prop="sendState" label="发送状态" align="center">
        <!-- <template slot-scope="scope">
          <span v-if="scope.row.sendState === 1">发送成功</span>
          <span v-if="scope.row.sendState === 2">发送失败</span>
        </template>-->
      </el-table-column>
      <el-table-column prop="failToSend" label="发送失败错误信息" align="center"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" align="center"></el-table-column>
      <el-table-column prop="address" label="操作" align="center">
        <template>
          <el-button size="mini" type="primary" @click="dialogVisible = true">详情</el-button>
        </template>
      </el-table-column>
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
    <!-- 详情 -->
    <el-dialog title="详情" :visible.sync="dialogVisible" width="30%">
      <el-row>
        <el-col>
          <span>ID:</span>
        </el-col>
        <el-col style="margin-top:10px">
          <span>用户id:</span>
        </el-col>
        <el-col style="margin-top:10px">
          <span>标题名:</span>
        </el-col>
        <el-col style="margin-top:10px">
          <span>事件:</span>
        </el-col>
        <el-col style="margin-top:10px">
          <span>手机号:</span>
        </el-col>
        <el-col style="margin-top:10px">
          <span>国际代码:</span>
        </el-col>
        <el-col style="margin-top:10px">
          <span>短信模板CODE:</span>
        </el-col>
        <el-col style="margin-top:10px">
          <span>发送状态:</span>
        </el-col>
        <el-col style="margin-top:10px">
          <span>发送失败错误信息:</span>
        </el-col>
        <el-col style="margin-top:10px">
          <span>创建时间:</span>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
      dialogVisible: false,
      tableData: [
        {
          date: "13633430",
          name: "0",
          TheTitleOf: "验证码",
          incident: "momomomo",
          iphone: "11112321312",
          internationalCode: "CN",
          MessageTemplate: "SMS_11231321",
          sendState: "1",
          failToSend: "失败了",
          createTime: "2020-2-3"
        },
        {
          date: "13633430",
          name: "0",
          TheTitleOf: "上海市普陀",
          incident: "momomomo",
          iphone: "11112321312",
          internationalCode: "CN",
          MessageTemplate: "SMS_11231321",
          sendState: "2",
          failToSend: "失败了",
          createTime: "2020-2-3"
        },
        {
          date: "13633430",
          name: "0",
          TheTitleOf: "上海市普弄",
          incident: "momomomo",
          iphone: "11112321312",
          internationalCode: "CN",
          MessageTemplate: "SMS_11231321",
          sendState: "1",
          failToSend: "失败了",
          createTime: "2020-2-3"
        },
        {
          date: "13633430",
          name: "0",
          TheTitleOf: "上海市普陀518 弄",
          incident: "momomomo",
          iphone: "11112321312",
          internationalCode: "CN",
          MessageTemplate: "SMS_11231321",
          sendState: "1",
          failToSend: "失败了",
          createTime: "2020-2-3"
        },
        {
          date: "13633430",
          name: "0",
          TheTitleOf: "上海市普陀弄",
          incident: "momomomo",
          iphone: "11112321312",
          internationalCode: "CN",
          MessageTemplate: "SMS_11231321",
          sendState: "1",
          failToSend: "失败了",
          createTime: "2020-2-3"
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
.paging {
  margin-top: 20px;
  float: right;
}
</style>