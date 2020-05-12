<template>
  <div class="login">
    <div class="login_warp">
      <div class="loginbox fl">
        <!-- 三个选项卡按钮 -->
        <div class="login_header">
          <span @click="cur=0" :class="{active:cur==0}">账号登录</span>
          <!-- <span @click="cur=1" :class="{active:cur==1}">注册账号</span> -->
        </div>
        <div class="login_content">
          <!-- 在cur==0时此板块显示 其他时候此板块不显示 -->
          <div v-show="cur==0" class="Cbody_item">
            <el-form ref="formRefs" :model="login" :rules="rules">
              <el-form-item prop="username">
                <el-input v-model="login.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="login.password" type="password" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item style="text-align:center">
                <el-button type="primary" @click="onSubmit" style="width:200px">登录</el-button>
                <el-button @click="onSubmit_reset" style="width:200px">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
          <!-- 在cur==1时此板块显示 其他时候此板块不显示 -->
          <div v-show="cur==1" class="Cbody_item">
            <el-form ref="formRef" :model="register" :rules="rules">
              <el-form-item prop="username">
                <el-input v-model="register.username" placeholder="请输入你的登录账户"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="register.password" type="password" placeholder="请输入你的登录密码"></el-input>
              </el-form-item>
              <el-form-item prop="confirm_password">
                <el-input v-model="register.confirm_password" type="password" placeholder="请再次输入你的登录密码"></el-input>
              </el-form-item>
              <el-form-item prop="cell_phone">
                <el-input v-model="register.cell_phone" type="password" placeholder="请输入你的手机号"></el-input>
              </el-form-item>
              <el-form-item prop="email">
                <el-input v-model="register.email" type="password" placeholder="请输入你的邮箱号"></el-input>
              </el-form-item>
              <el-form-item>
                <el-select v-model="register.character" placeholder="请选择你的角色" style="width:100%">
                  <el-option
                    v-for="item in role"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="text-align:center">
                <el-button type="primary" @click="onSubmit" style="width:200px">登录</el-button>
                <el-button @click="reset" style="width:200px">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      cur: 0, //默认选中第一个tab
      login: {
        username: "",//用户名
        password: ""//密码
      },
      register:{
        username: "",//用户名
        password: "",//密码
        confirm_password:'',//确认密码
        cell_phone:'',//手机号
        email:'',//邮箱
        character:''//角色

      },
      role: [
        {
          id: 1,
          name: "客服"
        },
        {
          id: 2,
          name: "经理"
        }
      ],
      rules: {
        username: [
          { required: true, message: "请输入您的用户名", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入您的密码", trigger: "blur" }
        ],
        confirm_password:[
          { required: true, message: "请输入您的确认密码", trigger: "blur" }
        ],
        cell_phone:[
          {required: true, message: "请输入手机号", trigger: "blur" },
          { min:11 ,max: 11, message: "长度为 11 个字符", trigger: "blur" }
        ],
        email:[
          { required: true, message: "请输入您的邮箱", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    
  },
  methods: {
    //登录
    onSubmit() {
      if(this.login.username === '' || this.login.password === ''){
        this.$message({
           message: "请输入用户名或密码",
            type: "error"
        })
      }else{
        this.$refs.formRef.validate(val => {
        if (this.login.username === "sun" && this.login.password === "000000") {
          let arr = ["1", "2", "3", "11", "21", "31","5","51","511"];
          window.sessionStorage.setItem("menulist", JSON.stringify(arr));
          window.sessionStorage.setItem("token", 'ab834355-2916-42f9-bf6d-c4fef6fbcc2e');
          this.$router.push("/index");
          this.$message({
            message: "登陆成功",
            type: "success"
          });
        } else if (this.login.username === "admin" && this.login.password === "000") {
          let arr = [
            "1", "11","12","13","14",//管理中心
            "2","21","22","23","24",//等级分佣
            "3","31","32",//素材中心
            "4","41","42",//商品管理
            "5","51","511","512","513","514",//营销功能
            "6","62","63","64","65",//会员管理
            "7","71","72","73","74","75","76","77","78",//订单管理
            "8","81","81","82","83","84","85","86",//财务管理
            "9","91","93",//消息推送
            "10","101","102","103",//数据统计
            "1101","1111",//广场审核
            "1201","1211",//举报管理
            ];
          window.sessionStorage.setItem("menulist", JSON.stringify(arr));
          window.sessionStorage.setItem("token", 'ab834355-2916-42f9-bf6d-c4fef6fbcc2e');
          this.$router.push("/index");
          this.$message({
            message: "登陆成功",
            type: "success"
          });
        } else {
          if (this.login.username !== "" && this.login.password !== "") {
            this.$message.error("用户名或密码错误");
          }
        }
      });
      }

    },
    //登录重置
    onSubmit_reset(){
      this.$refs.formRefs.resetFields();
    },
    //注册重置
    reset() {
      this.$refs.formRef.resetFields();
    }
  }
};
</script>
 
<style scoped>
.login{
  position: relative;
  height: 100%;
  width: 100%;
  background: #f5f6f7;
}
.login_header {
  margin-bottom: 40px;
}
.login_header span {
  margin-right: 20px;
  cursor: pointer;
}
.loginbox {
  width: 92%;
  overflow: hidden;
  padding: 20px;
  padding-top: 15px;
  background: #fff;
}
.Cbody_item {
  border: 0px solid #999;
  overflow: hidden;
}
.active {
  color: #3f7dff;
  padding-bottom: 10px;
  border-bottom: 3px solid #3f7dff;
}
.login_warp {
  width: 500px;
  position: absolute;
  top: 50%;
  margin-top: -250px;
  left: 50%;
  margin-left: -250px;
  border-radius: 10px;
  box-shadow: 0 0px 0px #ccc;
  overflow: hidden;
  border: 1px solid #3f7dff;
  /* margin-top: 10%; */
  cursor: pointer;
}
/* .login_warp:hover{
	top: -30px;
	box-shadow: 0 15px 21px #ccc;
} */
.loginrslider {
  color: #fff;
}
</style>