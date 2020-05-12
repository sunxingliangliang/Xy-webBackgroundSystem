<template>
  <div class="qualification">
    <Crumbs></Crumbs>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="会员" align="center"></el-table-column>
      <el-table-column prop="name" label="剩余次数" align="center"></el-table-column>
      <el-table-column prop="address" label="累计资格" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <el-button size="small" type="warning" @click="QualificationRecords">资格记录</el-button>
        <el-button size="small" type="danger" @click="AdjustQualification">调整资格</el-button>
      </el-table-column>
    </el-table>
    <!-- 资格记录 -->
    <div class="QualificationRecords">
      <el-dialog title="资格记录" :visible.sync="dialogTableVisible">
        <el-table :data="gridData" border>
          <el-table-column property="date" label="序号" align="center"></el-table-column>
          <el-table-column property="name" label="活动" align="center"></el-table-column>
          <el-table-column property="address" label="昵称" align="center"></el-table-column>
          <el-table-column property="address" label="来源" align="center"></el-table-column>
          <el-table-column property="address" label="变动值" align="center"></el-table-column>
          <el-table-column property="address" label="变动后" align="center"></el-table-column>
          <el-table-column property="address" label="订单" align="center"></el-table-column>
          <el-table-column property="address" label="创建时间" align="center"></el-table-column>
        </el-table>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogTableVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 调整资格 -->
    <div class="AdjustQualification">
      <el-dialog title="资格记录" :visible.sync="dialogFormVisible" width="30%">
        <el-form :model="form">
          <el-form-item label="会员昵称：" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="累计资格：" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="剩余次数：" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="修改类型：" :label-width="formLabelWidth">
            <el-radio v-model="form.radio" label="1">增加</el-radio>
            <el-radio v-model="form.radio" label="2">减少</el-radio>
          </el-form-item>
          <el-form-item label="变动值：" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
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
      currentPage: 1,
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "100px",
      form: {
        name: "",
        region: ""
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  created() {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 资格记录
    QualificationRecords() {
      // console.log(e);
      this.dialogTableVisible = true;
    },
    //调整资格
    AdjustQualification() {
      this.dialogFormVisible = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.paging {
  margin-top: 20px;
  float: right;
}
</style>