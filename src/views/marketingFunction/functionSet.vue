<template>
  <div class="functionSet">
    <Crumbs></Crumbs>
    <div class="add">
      <el-button type="success" icon="el-icon-plus" size="small" @click="add">添加</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="serialNumber" label="序号" align="center"></el-table-column>
      <el-table-column prop="activityTitle" label="活动标题" align="center"></el-table-column>
      <el-table-column prop="activityImg" label="活动图片" align="center"></el-table-column>
      <el-table-column prop="shareGifts" label="分享赠送" align="center"></el-table-column>
      <el-table-column prop="FreeReceive" label="免费领取" align="center"></el-table-column>
      <el-table-column prop="FreeAmount" label="免费领取量" align="center"></el-table-column>
      <el-table-column prop="RegisterFree" label="注册赠送" align="center"></el-table-column>
      <el-table-column prop="RegisteredQuantity" label="注册送数量" align="center"></el-table-column>
      <el-table-column prop="InviteGiving" label="邀请赠送" align="center"></el-table-column>
      <el-table-column prop="FansOrder" label="粉丝下单" align="center"></el-table-column>
      <el-table-column prop="InvitationQuantity" label="邀请送数量" align="center"></el-table-column>
      <el-table-column prop="startTime" label="开始时间" align="center"></el-table-column>
      <el-table-column prop="endTime" label="结束时间" align="center"></el-table-column>
      <el-table-column label="状态" align="center">
        <template slot-scope="scope">
          <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <el-button type="primary" size="small" @click="compileButton">编辑</el-button>
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
    <!-- 添加 -->
    <el-dialog title="添加 " :visible.sync="dialogFormVisible" width="40%">
      <el-form :model="form">
        <el-row>
          <el-col :span="24">
            <el-form-item label="活动标题：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="分享送：" :label-width="formLabelWidth">
              <el-radio v-model="form.radio" label="1">关闭</el-radio>
              <el-radio v-model="form.radio" label="2">开启</el-radio>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="免费领取：" :label-width="formLabelWidth">
              <el-radio v-model="form.radio" label="1">关闭</el-radio>
              <el-radio v-model="form.radio" label="2">开启</el-radio>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="注册赠送：" :label-width="formLabelWidth">
              <el-radio v-model="form.radio" label="1">关闭</el-radio>
              <el-radio v-model="form.radio" label="2">开启</el-radio>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="邀请赠送：" :label-width="formLabelWidth">
              <el-radio v-model="form.radio" label="1">关闭</el-radio>
              <el-radio v-model="form.radio" label="2">开启</el-radio>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="添加日期：" :label-width="formLabelWidth">
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="活动图片：" :label-width="formLabelWidth">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="活动规则：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off" type="textarea" :rows="4"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑 -->
    <el-dialog title="添加 " :visible.sync="compile" width="40%">
      <el-form :model="form">
        <el-row>
          <el-col :span="24">
            <el-form-item label="活动标题：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off" placeholder="1~20个字符"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="活动图片：" :label-width="formLabelWidth">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="活动规则：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off" type="textarea" :rows="4"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="compile = false">取 消</el-button>
        <el-button type="primary" @click="compile = false">确 定</el-button>
      </div>
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
      value1: "",
      value: true,
      form: {
        name: "",
        region: ""
      },
      dialogFormVisible: false,
      compile: false,
      formLabelWidth: "100px",
      fileList: [],
      tableData: [
        {
          serialNumber: "961",
          activityTitle: "活动标题",
          activityImg: "",
          shareGifts: 1,
          FreeReceive: 1,
          FreeAmount: 1,
          RegisterFree: 1,
          RegisteredQuantity: 1,
          InviteGiving: 1,
          FansOrder: 1,
          InvitationQuantity: 1,
          startTime: "2020-05-22 15:51:22",
          endTime: "2020-05-08 15:47:05",
          state: 1,
          createTime: "2020-05-08 15:46:54"
        },
        {
          serialNumber: "961",
          activityTitle: "活动标题",
          activityImg: "",
          shareGifts: 1,
          FreeReceive: 1,
          FreeAmount: 1,
          RegisterFree: 1,
          RegisteredQuantity: 1,
          InviteGiving: 1,
          FansOrder: 1,
          InvitationQuantity: 1,
          startTime: "2020-05-22 15:51:22",
          endTime: "2020-05-08 15:47:05",
          state: 1,
          createTime: "2020-05-08 15:46:54"
        },
        {
          serialNumber: "961",
          activityTitle: "活动标题",
          activityImg: "",
          shareGifts: 1,
          FreeReceive: 1,
          FreeAmount: 1,
          RegisterFree: 1,
          RegisteredQuantity: 1,
          InviteGiving: 1,
          FansOrder: 1,
          InvitationQuantity: 1,
          startTime: "2020-05-22 15:51:22",
          endTime: "2020-05-08 15:47:05",
          state: 1,
          createTime: "2020-05-08 15:46:54"
        },
        {
          serialNumber: "961",
          activityTitle: "活动标题",
          activityImg: "",
          shareGifts: 1,
          FreeReceive: 1,
          FreeAmount: 1,
          RegisterFree: 1,
          RegisteredQuantity: 1,
          InviteGiving: 1,
          FansOrder: 1,
          InvitationQuantity: 1,
          startTime: "2020-05-22 15:51:22",
          endTime: "2020-05-08 15:47:05",
          state: 1,
          createTime: "2020-05-08 15:46:54"
        },
        {
          serialNumber: "961",
          activityTitle: "活动标题",
          activityImg: "",
          shareGifts: 1,
          FreeReceive: 1,
          FreeAmount: 1,
          RegisterFree: 1,
          RegisteredQuantity: 1,
          InviteGiving: 1,
          FansOrder: 1,
          InvitationQuantity: 1,
          startTime: "2020-05-22 15:51:22",
          endTime: "2020-05-08 15:47:05",
          state: 1,
          createTime: "2020-05-08 15:46:54"
        },
        {
          serialNumber: "961",
          activityTitle: "活动标题",
          activityImg: "",
          shareGifts: 1,
          FreeReceive: 1,
          FreeAmount: 1,
          RegisterFree: 1,
          RegisteredQuantity: 1,
          InviteGiving: 1,
          FansOrder: 1,
          InvitationQuantity: 1,
          startTime: "2020-05-22 15:51:22",
          endTime: "2020-05-08 15:47:05",
          state: 1,
          createTime: "2020-05-08 15:46:54"
        },
        {
          serialNumber: "961",
          activityTitle: "活动标题",
          activityImg: "",
          shareGifts: 1,
          FreeReceive: 1,
          FreeAmount: 1,
          RegisterFree: 1,
          RegisteredQuantity: 1,
          InviteGiving: 1,
          FansOrder: 1,
          InvitationQuantity: 1,
          startTime: "2020-05-22 15:51:22",
          endTime: "2020-05-08 15:47:05",
          state: 1,
          createTime: "2020-05-08 15:46:54"
        },
        {
          serialNumber: "961",
          activityTitle: "活动标题",
          activityImg: "",
          shareGifts: 1,
          FreeReceive: 1,
          FreeAmount: 1,
          RegisterFree: 1,
          RegisteredQuantity: 1,
          InviteGiving: 1,
          FansOrder: 1,
          InvitationQuantity: 1,
          startTime: "2020-05-22 15:51:22",
          endTime: "2020-05-08 15:47:05",
          state: 1,
          createTime: "2020-05-08 15:46:54"
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
    },
    add() {
      this.dialogFormVisible = true;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    compileButton() {
      this.compile = true;
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