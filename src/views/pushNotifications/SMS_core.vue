<template>
  <div class="SMS_core">
    <Crumbs></Crumbs>
    <div class="SMS_core_content">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="APP类型">
          <el-radio-group v-model="form.checkedValue">
            <el-radio
              v-for="item in form.radio"
              :key="item.id"
              :label="item.id"
            >{{item.name}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="短信通道">
          <el-radio v-model="form.radio" label="1">阿里短信</el-radio>
        </el-form-item>
        <el-row style="margin-bottom:22px">
          <p class="AccessKey">阿里 AccessKey ID</p>
          <div style="float:left">
            <el-input v-model="form.name" show-password style="width:600px"></el-input>
          </div>
        </el-row>
        <el-row style="margin-bottom:22px">
          <p class="AccessKey_Secret">阿里 AccessKey Secret</p>
          <div style="float:left">
            <el-input v-model="form.name" show-password style="width:600px"></el-input>
          </div>
        </el-row>
        <el-form-item label="阿里签名">
          <el-input v-model="form.name" style="width:600px"></el-input>
        </el-form-item>
        <el-row style="margin-bottom:10px">
          <p class="Al_verification">阿里验证码模版ID</p>
          <div style="float:left">
            <el-input v-model="form.name" style="width:600px"></el-input>
            <div style="margin-top:10px">
              <span style="font-size:12px">先从阿里云创建短信模版内容：您的验证码${code}，该验证码5分钟内有效，请勿泄漏于他人！</span>
              <el-button type="primary" size="small">发送验证</el-button>
            </div>
          </div>
        </el-row>
        <el-form-item label="短信上线">
         <el-radio-group v-model="form.checkedValue">
            <el-radio
              v-for="item in form.radio"
              :key="item.id"
              :label="item.id"
            >{{item.name}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="敏感短信">
          <el-radio v-model="form.radio" label="1">验证</el-radio>
          <el-radio v-model="form.radio" label="2">不验证</el-radio>
        </el-form-item>
        <el-form-item label="授权过期">
          <el-radio v-model="form.radio" label="1">开启</el-radio>
          <el-radio v-model="form.radio" label="2">关闭</el-radio>
        </el-form-item>
        <el-form-item label="过期提醒">
          <el-input v-model="form.desc" style="width:600px"></el-input>
        </el-form-item>
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
      form: {
        checkedValue: "",
        radio: [
          {
            id: 1,
            name: "授权"
          },
          {
            id: 2,
            name: "不授权"
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
    }
  }
};
</script>
<style lang="scss">
.SMS_core {
  position: relative;
}
.SMS_core_content {
  position: absolute;
  left: 50%;
  margin-left: -30%;
  width: 60%;
  margin-top: 50px;
}
.AccessKey {
  float: left;
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-left: -50px;
}
.AccessKey_Secret {
  float: left;
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-left: -76px;
}
.Al_verification {
  float: left;
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-left: -44px;
}
</style>