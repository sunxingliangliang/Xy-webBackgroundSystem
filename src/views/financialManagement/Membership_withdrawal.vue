<template>
  <div class="Membership_withdrawal">
    <Crumbs></Crumbs>
    <div class="Membership_withdrawal_content">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="提现申请">
          <el-radio-group v-model="form.checkedValue">
            <el-radio v-for="item in form.radio" :key="item.id" :label="item.id">{{item.name}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="提现限制">
          <el-radio v-model="form.radio" label="1">关闭</el-radio>
          <el-radio v-model="form.radio" label="1">开启</el-radio>
        </el-form-item>
        <el-form-item label="提现方式">
          <el-radio v-model="form.radio" label="1">自有支付宝</el-radio>
          <el-radio v-model="form.radio" label="1">官方</el-radio>
        </el-form-item>
        <el-form-item label="次数限制">
          <div class="astrict_day">
            <div class="astrict_left">
              <span>每天最多申请</span>
            </div>
            <div class="astrict_center">
              <el-input v-model="astrict" style="  outline: none;"></el-input>
            </div>
            <div class="astrict_right">
              <span>次(0不限制，失败、驳回不计数 )</span>
            </div>
          </div>
          <div class="astrict_month">
            <div class="astrict_left">
              <span>每月最多申请</span>
            </div>
            <div class="astrict_center">
              <el-input v-model="astrict" style="  outline: none;"></el-input>
            </div>
            <div class="astrict_right">
              <span>次(0不限制，失败、驳回不计数 )</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="自动到账">
          <el-radio v-model="form.radio" label="1">关闭</el-radio>
          <el-radio v-model="form.radio" label="1">开启</el-radio>
        </el-form-item>
        <el-form-item label="固定比例">
          <el-input style="width:560px"></el-input>
        </el-form-item>
        <el-form-item label="数量限制">
          <div class="QuantitativeLimitation">
            <div class="astrict_left">
              <span>单笔数量至少</span>
            </div>
            <div class="astrict_center">
              <el-input v-model="astrict" style="  outline: none;"></el-input>
            </div>
            <div class="astrict_right">
              <span>个集分宝</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="倍数限制">
          <div class="MultipleRestrictions">
            <div class="astrict_left">
              <span>单笔集分宝数量必须是</span>
            </div>
            <div class="astrict_center">
              <el-input v-model="astrict" style="  outline: none;"></el-input>
            </div>
            <div class="astrict_right">
              <span>的倍数</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="结算模式">
          <el-radio v-model="form.radio" label="1">满额结</el-radio>
          <el-radio v-model="form.radio" label="1">月结</el-radio>
        </el-form-item>
        <el-form-item label="结算日期">
          <div class="MultipleRestrictions">
            <div class="astrict_left">
              <span>每月</span>
            </div>
            <div class="astrict_center">
              <el-select v-model="select" slot="prepend" placeholder="请选择" style="width:100%">
                <el-option label="22" value="1"></el-option>
                <el-option label="23" value="2"></el-option>
                <el-option label="24" value="3"></el-option>
              </el-select>
            </div>
            <div class="astrict_right">
              <span>日</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="备注">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
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
      form: {
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
    }
  }
};
</script>
<style lang="scss">
.Membership_withdrawal {
  position: relative;
}
.Membership_withdrawal_content {
  position: absolute;
  left: 50%;
  margin-left: -30%;
  width: 60%;
  margin-top: 50px;
}
.astrict_day {
  width: 60%;
  height: 40px;
  // background:blanchedalmond;
  border: 1px solid #ccc;
  .astrict_left {
    width: 15%;
    height: 100%;
    // background: blueviolet;
    float: left;
    font-size: 12px;
    text-align: center;
    border-right: 1px solid #ccc;
  }
  .astrict_center {
    width: 50%;
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
.astrict_month {
  width: 60%;
  height: 40px;
  // background:blanchedalmond;
  border: 1px solid #ccc;
  margin-top: 5px;
  .astrict_left {
    width: 15%;
    height: 100%;
    // background: blueviolet;
    float: left;
    font-size: 12px;
    text-align: center;
    border-right: 1px solid #ccc;
  }
  .astrict_center {
    width: 50%;
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
.QuantitativeLimitation {
  width: 60%;
  height: 40px;
  // background:blanchedalmond;
  border: 1px solid #ccc;
  .astrict_left {
    width: 15%;
    height: 100%;
    // background: blueviolet;
    float: left;
    font-size: 12px;
    text-align: center;
    border-right: 1px solid #ccc;
  }
  .astrict_center {
    width: 50%;
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
.MultipleRestrictions {
  width: 60%;
  height: 40px;
  // background:blanchedalmond;
  border: 1px solid #ccc;
  .astrict_left {
    width: 25%;
    height: 100%;
    // background: blueviolet;
    float: left;
    font-size: 12px;
    text-align: center;
    border-right: 1px solid #ccc;
  }
  .astrict_center {
    width: 50%;
    height: 100%;
    // background: violet;
    float: left;
  }
  .astrict_right {
    width: 24%;
    height: 100%;
    // background: aqua;
    float: left;
    font-size: 12px;
    text-align: center;
    border-left: 1px solid #ccc;
  }
}
.el-input__inner {
  border-radius: 0px!important;
}
</style>