<template>
  <div class="Carrier_Base">
    <Crumbs></Crumbs>
    <div class="Carrier_Base_content">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col>
            <el-form-item label="运营商自定义名称：" label-width="180px">
              <el-input style="width:320px" v-model="form.name" placeholder="运营商"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider content-position="left" style="margin:5px 0;">加入条件1</el-divider>
        <el-row>
          <el-col :span="24">
            <el-form-item label="直推有效粉丝数量：" label-width="180px">
            <!-- <div>a</div> -->
              <div class="QuantitativeLimitation" style="float:left">
                <div class="astrict_center">
                  <el-input v-model="form.name" style="  outline: none;"></el-input>
                </div>
                <div class="astrict_right">
                  <span>个</span>
                </div>
              </div>
              <div class="size">
                <i class="el-icon-question"></i>
                <span style="padding:0 5px">设置0表示禁用该条件</span>
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
              <div class="size">
                <i class="el-icon-question"></i>
                <span style="padding:0 5px">设置0表示禁用该条件</span>
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
              <div class="size">
                <i class="el-icon-question"></i>
                <span style="padding:0 5px">设置0表示禁用该条件</span>
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
              <div class="size">
                <i class="el-icon-question"></i>
                <span style="padding:0 5px">设置0表示禁用该条件</span>
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
              <div class="size">
                <i class="el-icon-question"></i>
                <span style="padding:0 5px">设置0表示禁用该条件</span>
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
              <div class="size">
                <i class="el-icon-question"></i>
                <span style="padding:0 5px">设置0表示禁用该条件</span>
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
              <div class="size">
                <i class="el-icon-question"></i>
                <span style="padding:0 5px">设置0表示禁用该条件</span>
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
              <div class="size">
                <i class="el-icon-question"></i>
                <span style="padding:0 5px">自购的佣金比例</span>
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
              <div class="size">
                <i class="el-icon-question"></i>
                <span style="padding:0 5px">佣金比例说明</span>
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
              <div class="size">
                <i class="el-icon-question"></i>
                <span style="padding:0 5px">平级奖励说明，设置为0，本奖励不参与分配</span>
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
              <div class="size">
                <i class="el-icon-question"></i>
                <span style="padding:0 5px">平级奖励说明，设置为0，本奖励不参与分配</span>
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
              <div class="size">
                <i class="el-icon-question"></i>
                <span style="padding:0 5px">平级奖励说明，设置为0，本奖励不参与分配</span>
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
              <div class="size">
                <i class="el-icon-question"></i>
                <span style="padding:0 5px">平级奖励说明，设置为0，本奖励不参与分配</span>
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
              <div class="size">
                <i class="el-icon-question"></i>
                <span style="padding:0 5px">设置为0，本奖励不参与分配，奖励是直接到余额</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider content-position="left" style="margin:5px 0;">全球分红订单</el-divider>
        <el-row>
          <el-col :span="24">
            <el-form-item label="全球分红订单 保护时间：" label-width="180px">
              <div class="QuantitativeLimitation">
                <div class="astrict_center">
                  <el-input v-model="form.name" style="  outline: none;"></el-input>
                </div>
                <div class="astrict_right">
                  <span>天</span>
                </div>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="全球分红订单 开始时间：" label-width="180px">
              <el-date-picker
                v-model="form.value"
                type="date"
                placeholder="选择日期"
                style="width:314px"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="余额提现扣费：" label-width="180px">
              <el-radio v-model="form.radio" label="1">平台额外奖励</el-radio>
              <el-radio v-model="form.radio" label="2">上一等级运营商团队奖励扣</el-radio>
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
          <el-col :span="24">
            <el-form-item label="加盟banner：" label-width="180px">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip" style="color:red">建议512x512，以便在客户端上有较好的展示效果</div>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="升级通道banner：" label-width="180px">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip" style="color:red">建议512x512，以便在客户端上有较好的展示效果</div>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider content-position="left" style="margin:5px 0;">加入说明</el-divider>
        <el-row>
          <el-col :span="24">
            <el-form-item label="加入说明：" label-width="180px">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容"
                v-model="textarea1"
                style="width:560px"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- <el-form-item label="备注">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
            v-model="textarea1"
            style="width:560px"
          ></el-input>
        </el-form-item>-->
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
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
      fileList: [],
      astrict: "",
      select: "",
      input3: "",
      textarea1: "",
      form: {
        name: "",
        value: "",
        checkedValue: "",
        radio: [
          {
            id: 1,
            name: "关闭"
          },
          {
            id: 2,
            name: "开启"
          }
        ],
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
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
<style lang="scss" scoped>
.Carrier_Base {
  position: relative;
}
.Carrier_Base_content {
  position: absolute;
  left: 50%;
  margin-left: -30%;
  width: 60%;
  margin-top: 50px;
}
.QuantitativeLimitation {
  width: 38% !important;
  height: 40px;
  border: 1px solid #ccc;
  float: left;
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
.size{
  float: left;
  margin-left: 50px;
}
.NewYorker {
  width: 50% !important;
  height: 40px;
  // background:blanchedalmond;
  border: 1px solid #ccc;
  float: left;
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

.el-input__inner {
  border-radius: 0px !important;
}
</style>