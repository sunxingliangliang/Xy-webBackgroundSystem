<template>
  <div class="material_classification">
    <Crumbs></Crumbs>
    <div class="add">
      <el-button type="success" size="small" icon="el-icon-plus" @click="add">添加</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="权重" align="center" width="220px"></el-table-column>
      <el-table-column prop="name" label="分类名称"></el-table-column>
      <el-table-column prop="name" label="类型" align="center"></el-table-column>
      <el-table-column prop="address" label="操作" align="center">
        <el-button size="small" type="primary" @click="modification">修改</el-button>
        <el-button size="small" type="danger" @click="expurgate">删除</el-button>
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
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <el-form :model="form">
        <el-row>
          <el-col :span="24">
            <el-form-item label="分类名称：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="类型：" :label-width="formLabelWidth">
              <el-radio v-model="form.radio" label="1">图文素材</el-radio>
              <el-radio v-model="form.radio" label="2">商品素材</el-radio>
              <el-radio v-model="form.radio" label="3">精品单选</el-radio>
              <el-radio v-model="form.radio" label="4">好货专场</el-radio>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="上级分类：" :label-width="formLabelWidth">
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
      search: "",
      currentPage: 1,
      value: "",
      dialogVisible: false,
      formLabelWidth: "100px",
      form: {
        name: "",
        radio: ""
      },
      options: [
        {
          id: 1,
          name: "你好"
        },
        {
          id: 2,
          name: "我不好"
        }
      ],
      tableData: [
        {
          date: "2122",
          name: "好货专场",
          address: "商品素材"
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
      ]
    };
  },
  created() {
    // console.log(this)
    // this.activePath = window.sessionStorage.getItem("activePath");
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    //添加
    add() {
      this.dialogVisible = true;
    },
    //修改
    modification() {
      this.dialogVisible = true;
    },
    //删除
    expurgate(e) {
      console.log(e)
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
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
