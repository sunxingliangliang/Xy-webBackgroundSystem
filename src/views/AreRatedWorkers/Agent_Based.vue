<template>
  <div class="Agent_Based">
    <Crumbs></Crumbs>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="加盟设置" name="ToSet">
        <div class="Agent_Based_toSet">
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="加盟名称：">
              <el-input style="width:560px"></el-input>
            </el-form-item>
            <!-- <el-form-item label="提现申请">
          <el-radio-group v-model="form.checkedValue">
            <el-radio v-for="item in form.radio" :key="item.id" :label="item.id">{{item.name}}</el-radio>
          </el-radio-group>
            </el-form-item>-->
            <el-form-item label="选择模式：">
              <el-radio v-model="form.radio" label="1">后台手动</el-radio>
              <el-radio v-model="form.radio" label="2">注册自动通过</el-radio>
              <el-radio v-model="form.radio" label="3">条件自动</el-radio>
            </el-form-item>
            <el-form-item label="指定等级：">
              <el-select v-model="form.name" placeholder="指定等级">
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="余额提现：">
              <el-radio v-model="form.radio" label="1">跟随系统</el-radio>
              <el-radio v-model="form.radio" label="2">等级指定</el-radio>
            </el-form-item>
            <el-form-item label="推广位：">
              <el-radio v-model="form.radio" label="1">手动分配</el-radio>
              <el-radio v-model="form.radio" label="2">自动分配</el-radio>
            </el-form-item>
            <el-form-item label="等级图标：" label-width="130px">
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
            <el-form-item label="加盟banner：" label-width="130px">
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
            <el-form-item label="升级通道banner：" label-width="130px">
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
            <el-form-item label="加盟说明：">
              <el-input
                type="textarea"
                placeholder="请输入内容"
                :rows="5"
                v-model="textarea1"
                style="width:560px"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="分佣设置" name="Servants_set">
        <div class="Agent_Based_PointSet">
          <el-form>
            <el-form-item label="APP余额展示形式：" label-width="140px">
              <el-radio-group v-model="ruleForm.status">
                <el-radio label="集分宝"></el-radio>
                <el-radio label="元(人民币)"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
          <!-- 集分宝 -->
          <div class="b1" v-if="ruleForm.status == '集分宝'">
            <el-form v-model="ruleForm">
              <el-form-item label="集分宝自定义名称：" label-width="140px">
                <el-input style="width:320px" v-model="ruleForm.astrict"></el-input>
              </el-form-item>
              <el-form-item label="集分宝单位：" label-width="140px">
                <el-input style="width:320px" v-model="ruleForm.astrict"></el-input>
              </el-form-item>
              <el-form-item label="淘客分佣设置：" label-width="140px">
                <div class="QuantitativeLimitation">
                  <div class="astrict_left">
                    <span>自购/分享</span>
                  </div>
                  <div class="astrict_center">
                    <el-input v-model="ruleForm.astrict" style="  outline: none;"></el-input>
                  </div>
                  <div class="astrict_right">
                    <span>%</span>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label label-width="140px">
                <div class="QuantitativeLimitation">
                  <div class="astrict_left">
                    <span>一级分佣</span>
                  </div>
                  <div class="astrict_center">
                    <el-input v-model="ruleForm.astrict" style="  outline: none;"></el-input>
                  </div>
                  <div class="astrict_right">
                    <span>%</span>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label label-width="140px">
                <div class="QuantitativeLimitation">
                  <div class="astrict_left">
                    <span>二级分佣</span>
                  </div>
                  <div class="astrict_center">
                    <el-input v-model="ruleForm.astrict" style="  outline: none;"></el-input>
                  </div>
                  <div class="astrict_right">
                    <span>%</span>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label label-width="140px">
                <div class="QuantitativeLimitation">
                  <div class="astrict_left">
                    <span>三级分佣</span>
                  </div>
                  <div class="astrict_center">
                    <el-input v-model="ruleForm.astrict" style="  outline: none;"></el-input>
                  </div>
                  <div class="astrict_right">
                    <span>%</span>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label label-width="140px">
                <div class="QuantitativeLimitation">
                  <div class="astrict_left">
                    <span>四级分佣</span>
                  </div>
                  <div class="astrict_center">
                    <el-input v-model="ruleForm.astrict" style="  outline: none;"></el-input>
                  </div>
                  <div class="astrict_right">
                    <span>%</span>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label label-width="140px">
                <div class="QuantitativeLimitation">
                  <div class="astrict_left">
                    <span>五级分佣</span>
                  </div>
                  <div class="astrict_center">
                    <el-input v-model="ruleForm.astrict" style="  outline: none;"></el-input>
                  </div>
                  <div class="astrict_right">
                    <span>%</span>
                  </div>
                </div>
              </el-form-item>
              <p style="margin-left:140px;color:red">分佣等级默认0，没有下级不选</p>
              <el-form-item label label-width="140px">
                <el-button type="success" style="margin-top:10px" size="small">确定</el-button>
              </el-form-item>
            </el-form>
          </div>
          <!-- 元(人民币) -->
          <div class="b1" v-if="ruleForm.status == '元(人民币)'">
            <el-form v-model="ruleForm">
              <el-form-item label="淘客分佣设置：" label-width="140px">
                <div class="QuantitativeLimitation">
                  <div class="astrict_left">
                    <span>自购/分享</span>
                  </div>
                  <div class="astrict_center">
                    <el-input v-model="ruleForm.astrict" style="  outline: none;"></el-input>
                  </div>
                  <div class="astrict_right">
                    <span>%</span>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label label-width="140px">
                <div class="QuantitativeLimitation">
                  <div class="astrict_left">
                    <span>一级分佣</span>
                  </div>
                  <div class="astrict_center">
                    <el-input v-model="ruleForm.astrict" style="  outline: none;"></el-input>
                  </div>
                  <div class="astrict_right">
                    <span>%</span>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label label-width="140px">
                <div class="QuantitativeLimitation">
                  <div class="astrict_left">
                    <span>二级分佣</span>
                  </div>
                  <div class="astrict_center">
                    <el-input v-model="ruleForm.astrict" style="  outline: none;"></el-input>
                  </div>
                  <div class="astrict_right">
                    <span>%</span>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label label-width="140px">
                <div class="QuantitativeLimitation">
                  <div class="astrict_left">
                    <span>三级分佣</span>
                  </div>
                  <div class="astrict_center">
                    <el-input v-model="ruleForm.astrict" style="  outline: none;"></el-input>
                  </div>
                  <div class="astrict_right">
                    <span>%</span>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label label-width="140px">
                <div class="QuantitativeLimitation">
                  <div class="astrict_left">
                    <span>四级分佣</span>
                  </div>
                  <div class="astrict_center">
                    <el-input v-model="ruleForm.astrict" style="  outline: none;"></el-input>
                  </div>
                  <div class="astrict_right">
                    <span>%</span>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label label-width="140px">
                <div class="QuantitativeLimitation">
                  <div class="astrict_left">
                    <span>五级分佣</span>
                  </div>
                  <div class="astrict_center">
                    <el-input v-model="ruleForm.astrict" style="  outline: none;"></el-input>
                  </div>
                  <div class="astrict_right">
                    <span>%</span>
                  </div>
                </div>
              </el-form-item>
              <p style="margin-left:140px;color:red">分佣等级默认0，没有下级不选</p>
              <el-form-item label label-width="140px">
                <el-button type="success" style="margin-top:10px" size="small">确定</el-button>
              </el-form-item>
            </el-form>
          </div>
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
      astrict: "",
      select: "",
      input3: "",
      textarea1: "",
      activeName: "ToSet",
      fileList: [],
      ruleForm: {
        status: "元(人民币)",
        astrict: ""
        // name:''
      },
      options: [
        {
          id: 1,
          name: "运营商等级名称(永久)"
        },
        {
          id: 2,
          name: "运营商(永久)"
        },
        {
          id: 3,
          name: "高级VIP"
        }
      ],
      form: {
        checkedValue: "",
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
    handleClick(tab, event) {
      console.log(tab, event);
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
.Agent_Based_toSet {
  width: 50%;
  margin-left: 300px;
}
.Agent_Based_PointSet {
  width: 50%;
  margin-left: 300px;
}
.QuantitativeLimitation {
  width: 50%!important;
  height: 40px;
  border: 1px solid #ccc;
  .astrict_left {
    width: 25% ;
    height: 100%;
    // background: blueviolet;
    float: left;
    font-size: 12px;
    text-align: center;
    border-right: 1px solid #ccc;
  }
  .astrict_center {
    width: 59%;
    height: 100%;
    // background: violet;
    float: left;
  }
  .astrict_right {
    width: 20% ;
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