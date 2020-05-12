<template>
  <div class="operator_Class">
    <Crumbs></Crumbs>
    <div class="add">
      <el-button type="success" size="small" icon="el-icon-plus" @click="add">添加运营商等级</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="运营商等级名称" align="center"></el-table-column>
      <el-table-column prop="name" label="等级图标" align="center"></el-table-column>
      <el-table-column prop="address" label="权重" align="center"></el-table-column>
      <el-table-column prop="address" label="淘客 自购分佣(%)" align="center"></el-table-column>
      <el-table-column prop="address" label="淘客 团队分佣(%)" align="center"></el-table-column>
      <el-table-column prop="address" label="淘客 平级奖励(%)" align="center"></el-table-column>
      <el-table-column prop="address" label="淘客 团队分红(%)" align="center"></el-table-column>
      <el-table-column prop="address" label="淘客 全球分红(%)" align="center"></el-table-column>
      <el-table-column prop="address" label="条件模式" align="center"></el-table-column>
      <el-table-column prop="address" label="状态" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <el-button type="primary" size="small" @click="compile">编辑</el-button>
        <el-button type="danger" size="small">删除</el-button>
      </el-table-column>
    </el-table>
    <!-- 弹窗 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="24">
            <el-form-item label="运营商自定义名称：" label-width="180px">
              <el-input style="width:320px" v-model="form.name" placeholder="运营商"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="权重：" label-width="180px">
              <el-input style="width:320px" v-model="form.name" placeholder="运营商"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="简单描述：" label-width="180px">
              <el-input type="textarea" :rows="2" v-model="form.textarea1" style="width:320px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="等级图标：" label-width="180px">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip" style="color:red">建议200x52 PNG格式</div>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider content-position="left" style="margin:5px 0;">加入条件1</el-divider>
        <el-row>
          <el-col :span="24">
            <el-form-item label="直推有效粉丝数量：" label-width="180px">
              <div class="QuantitativeLimitation">
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
            <el-form-item label="二代有效粉丝数量：" label-width="180px">
              <div class="QuantitativeLimitation">
                <div class="astrict_center">
                  <el-input v-model="form.name" style="  outline: none;"></el-input>
                </div>
                <div class="astrict_right">
                  <span>个</span>
                </div>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider content-position="left" style="margin:5px 0;">加入条件2</el-divider>
        <el-row>
          <el-col :span="24">
            <el-form-item label="团队订单总数量：" label-width="180px">
              <div class="QuantitativeLimitation">
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
            <el-form-item label="个人累计收益：" label-width="180px">
              <div class="QuantitativeLimitation">
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
        <el-divider content-position="left" style="margin:5px 0;">加入条件3</el-divider>
        <el-row>
          <el-col :span="24">
            <el-form-item label="月付价格：" label-width="180px">
              <div class="QuantitativeLimitation">
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
            <el-form-item label="年付价格：" label-width="180px">
              <div class="QuantitativeLimitation">
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
            <el-form-item label="永久价格：" label-width="180px">
              <div class="QuantitativeLimitation">
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
        <el-divider content-position="left" style="margin:5px 0;">条件模式</el-divider>
        <el-row>
          <el-col :span="24">
            <el-form-item label="条件模式：" label-width="180px">
              <el-radio v-model="form.radio" label="1">任意满足</el-radio>
              <el-radio v-model="form.radio" label="2">同时满足</el-radio>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="淘客平级奖模式：" label-width="180px">
              <el-radio v-model="form.radio" label="1">平台额外奖励</el-radio>
              <el-radio v-model="form.radio" label="2">上一等级运营商团队奖励扣</el-radio>
              <el-radio v-model="form.radio" label="2">抽成模式</el-radio>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider content-position="left" style="margin:5px 0;">淘客分佣设置</el-divider>
        <el-row>
          <el-col :span="24">
            <el-form-item label="淘客分佣设置：" label-width="180px">
              <div class="NewYorker">
                <div class="astrict_left">
                  <span>自购比例</span>
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
            <el-form-item label label-width="180px">
              <div class="NewYorker">
                <div class="astrict_left">
                  <span>团队比例</span>
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
            <el-form-item label label-width="180px">
              <div class="NewYorker">
                <div class="astrict_left">
                  <span>1级平级奖励</span>
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
            <el-form-item label label-width="180px">
              <div class="NewYorker">
                <div class="astrict_left">
                  <span>2级平级奖励</span>
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
            <el-form-item label label-width="180px">
              <div class="NewYorker">
                <div class="astrict_left">
                  <span>3级平级奖励</span>
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
            <el-form-item label label-width="180px">
              <div class="NewYorker">
                <div class="astrict_left">
                  <span>团队分红</span>
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
            <el-form-item label label-width="180px">
              <div class="NewYorker">
                <div class="astrict_left">
                  <span>全球分红</span>
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
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="状态：" label-width="180px">
              <el-radio v-model="form.radio" label="1">禁用</el-radio>
              <el-radio v-model="form.radio" label="2">正常</el-radio>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注：" label-width="180px">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容"
                v-model="form.textarea1"
                style="width:560px"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
      dialogVisible: false,
      currentPage: 1,
      form: {
        name: "",
        textarea1: ""
      },
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
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    add() {
      this.dialogVisible = true;
    },
    compile() {
      this.dialogVisible = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.add {
  margin-bottom: 20px;
}
.paging {
  margin-top: 20px;
  float: right;
}
.QuantitativeLimitation {
  width: 38% !important;
  height: 40px;
  // background:blanchedalmond;
  border: 1px solid #ccc;
  // .astrict_left {
  //   width: 15%;
  //   height: 100%;
  //   // background: blueviolet;
  //   float: left;
  //   font-size: 12px;
  //   text-align: center;
  //   border-right: 1px solid #ccc;
  // }
  .astrict_center {
    width: 78%;
    height: 100%;
    // background: violet;
    float: left;
  }
  .astrict_right {
    width: 34%;
    height: 100%;
    // background: aqua;
    float: left;
    font-size: 12px;
    text-align: center;
    border-left: 1px solid #ccc;
  }
}
.NewYorker {
  width: 50% !important;
  height: 40px;
  // background:blanchedalmond;
  border: 1px solid #ccc;
  .astrict_left {
    width: 20%;
    height: 100%;
    // background: blueviolet;
    float: left;
    font-size: 12px;
    text-align: center;
    border-right: 1px solid #ccc;
  }
  .astrict_center {
    width: 68%;
    height: 100%;
    // background: violet;
    float: left;
  }
  .astrict_right {
    width: 10%;
    height: 100%;
    // background: aqua;
    float: left;
    font-size: 12px;
    text-align: center;
    border-left: 1px solid #ccc;
  }
}
</style>