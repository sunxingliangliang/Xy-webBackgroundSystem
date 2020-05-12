<template>
  <div class="Agent_Level">
    <Crumbs></Crumbs>
    <div class="add">
      <el-button type="success" icon="el-icon-plus" size="small" @click="add">添加</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="等级ID" align="center"></el-table-column>
      <el-table-column prop="name" label="等级名称" algin="center"></el-table-column>
      <el-table-column prop="address" label="等级图标" align="center"></el-table-column>
      <el-table-column prop="address" label="等级权重" align="center"></el-table-column>
      <el-table-column prop="address" label="条件模式" align="center"></el-table-column>
      <el-table-column prop="address" label="收费" align="center"></el-table-column>
      <el-table-column prop="address" label="自购订单" align="center"></el-table-column>
      <el-table-column prop="address" label="一级粉丝" align="center"></el-table-column>
      <el-table-column prop="address" label="总佣金" align="center"></el-table-column>
      <el-table-column prop="address" label="状态" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <el-button size="small" type="primary" @click="compile">编辑</el-button>
        <el-button size="small" type="danger">删除</el-button>
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
    <el-dialog title="添加" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="form">
        <el-row>
          <el-col :span="24">
            <el-form-item label="等级名称：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="等级权重：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="简单描述：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="等级图标：" :label-width="formLabelWidth">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider content-position="left" style="margin:5px 0;">升级条件</el-divider>
        <el-row>
          <el-col :span="24">
            <el-form-item label="收费：" label-width="140px">
              <div class="QuantitativeLimitation">
                <div class="astrict_left">
                  <span></span>
                </div>
                <div class="astrict_center">
                  <el-input v-model="form.name" style="  outline: none;"></el-input>
                </div>
                <div class="astrict_right">
                  <span>元</span>
                </div>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="自购确认收货订单：" label-width="140px">
              <div class="QuantitativeLimitation">
                <div class="astrict_left">
                  <span></span>
                </div>
                <div class="astrict_center">
                  <el-input v-model="form.name" style="  outline: none;"></el-input>
                </div>
                <div class="astrict_right">
                  <span>个</span>
                </div>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="邀请一级粉丝数量：" label-width="140px">
              <div class="QuantitativeLimitation">
                <div class="astrict_left">
                  <span></span>
                </div>
                <div class="astrict_center">
                  <el-input v-model="form.name" style="  outline: none;"></el-input>
                </div>
                <div class="astrict_right">
                  <span>个</span>
                </div>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="累计确认收货佣金：" label-width="140px">
              <div class="QuantitativeLimitation">
                <div class="astrict_left">
                  <span></span>
                </div>
                <div class="astrict_center">
                  <el-input v-model="form.name" style="  outline: none;"></el-input>
                </div>
                <div class="astrict_right">
                  <span>元</span>
                </div>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider content-position="left" style="margin:5px 0;">淘客分佣设置</el-divider>
        <el-row>
          <el-col :span="24">
            <el-form-item label="收费：" label-width="140px">
              <div class="QuantitativeLimitation">
                <div class="astrict_left">
                  <span>自购/分享</span>
                </div>
                <div class="astrict_center">
                  <el-input v-model="form.name" style="  outline: none;"></el-input>
                </div>
                <div class="astrict_right">
                  <span>%</span>
                </div>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label label-width="140px">
              <div class="QuantitativeLimitation">
                <div class="astrict_left">
                  <span>1级分佣</span>
                </div>
                <div class="astrict_center">
                  <el-input v-model="form.name" style="  outline: none;"></el-input>
                </div>
                <div class="astrict_right">
                  <span>%</span>
                </div>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="余额提现扣费：" label-width="140px">
              <el-radio v-model="form.radio" label="1">跟随系统</el-radio>
              <el-radio v-model="form.radio" label="2">等级指定</el-radio>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="状态：" label-width="140px">
              <el-radio v-model="form.radio" label="1">禁用</el-radio>
              <el-radio v-model="form.radio" label="2">正常</el-radio>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注：" label-width="140px">
              <el-input v-model="form.name" :rows="3" type="textarea"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
      form: {
        name: ""
      },
      dialogFormVisible: false,
      formLabelWidth: "100px",
      fileList: [],

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
    compile(){
      this.dialogFormVisible = true;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
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
.QuantitativeLimitation {
  width: 100% !important;
  height: 40px;
  border: 1px solid #ccc;
  .astrict_left {
    width: 20% !important;
    height: 100%;
    // background: blueviolet;
    float: left;
    font-size: 12px;
    text-align: center;
    border-right: 1px solid #ccc;
  }
  .astrict_center {
    width: 20%;
    height: 100%;
    // background: violet;
    float: left;
  }
  .astrict_right {
    width: 20% !important;
    height: 100%;
    // background: aqua;
    float: left;
    font-size: 12px;
    text-align: center;
    border-left: 1px solid #ccc;
  }
}
</style>