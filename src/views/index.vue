<template>
  <el-container>
    <el-header>
      <div class="header_left">
        <i class="el-icon-menu"></i>
        <span style="padding-left:10px">熊友后台管理系统</span>
      </div>
      <div class="header_right">
        <i class="el-icon-user"></i>
        <span>-admin</span>
        <i class="el-icon-setting" style="padding-left:15px"></i>
        <span>修改密码</span>
        <i class="el-icon-switch-button" style="padding-left:15px"></i>
        <span @click="logout">退出</span>
      </div>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <!-- <div class="button_menu" @click="button_menu">折叠</div> -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          :default-active="activePath"
        >
          <el-submenu
            :index="item.id+''"
            v-for="item in menulist"
            :key="item.id"
            v-if="item.children&&list.includes(item.id)"
          >
            <template slot="title">
              <div @click="oneMenu(item.authName)">
                <i :class="iconObj[item.id]"></i>
                <span style="color:#fff">{{item.authName}}</span>
              </div>
            </template>
            <el-menu-item-group>
              <!-- 二级菜单 -->
              <el-menu-item
                :index="subItem.path"
                v-for="subItem in item.children"
                :key="subItem.id"
                v-if="list.includes(subItem.id)"
                @click="saveNavState(subItem.path),activeName(subItem.authName)"
              >{{subItem.authName}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main style="width:100%;height:100%">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      activePath: "",
      menulist: [
        {
          id: "1",
          authName: "管理中心",
          children: [
            {
              id: "11",
              authName: "控制台",
              path: "/controlPanel"
            }
          ]
        },
        {
          id: "2",
          authName: "素材中心",
          children: [
            {
              id: "21",
              authName: "素材分类",
              path: "/material_classification"
            },
            {
              id: "22",
              authName: "素材管理",
              path: "/material_management"
            }
          ]
        },
        {
          id: "3",
          authName: "等级分佣",
          children: [
            {
              id: "31",
              authName: "代理基础设置",
              path: "/Agent_Based"
            },
            {
              id: "32",
              authName: "代理等级管理",
              path: "/Agent_Level"
            },
            {
              id: "33",
              authName: "运营商基础设置",
              path: "/Carrier_Base"
            },
            {
              id: "34",
              authName: "运营商等级管理",
              path: "/operator_Class"
            }
          ]
        },
        {
          id: "4",
          authName: "商品管理",
          children: [
            {
              id: "41",
              authName: "爆料商品",
              path: "/Broke_goods"
            },
            {
              id: "42",
              authName: "商品板块",
              path: "/Goods_sector"
            }
          ]
        },
        {
          id: "5",
          authName: "营销功能",
          path: "user",
          children: [
            {
              id: "51",
              authName: "每日任务",
              path: "/daily_mission"
            }
          ]
        },
        {
          id: "6",
          authName: "会员管理",
          children: [
            {
              id: "61",
              authName: "核心设置",
              path: "/core_set"
            },
            {
              id: "62",
              authName: "会员管理",
              path: "/member_management"
            },
            {
              id: "63",
              authName: "代理商管理",
              path: "/agent_management"
            },
            {
              id: "64",
              authName: "运营商管理",
              path: "/operator_management"
            },
            {
              id: "65",
              authName: "会员关系树",
              path: "/Membership_tree"
            },
          ]
        },
        {
          id: "7",
          authName: "订单管理",
          children: [
            {
              id: "71",
              authName: "淘宝订单",
              path: "/Taobao_orders"
            },
            {
              id: "72",
              authName: "拼多多订单",
              path: "/Pinduoduo_order"
            },
            {
              id: "73",
              authName: "京东订单",
              path: "/Jingdong_orders"
            },
            {
              id: "74",
              authName: "唯品会订单",
              path: "/Vipshop_order"
            },
            {
              id: "75",
              authName: "会员订单",
              path: "/Member_order"
            },
            {
              id: "76",
              authName: "多麦订单",
              path: "/His_order"
            },
            {
              id: "77",
              authName: "考拉订单",
              path: "/koala_orders"
            },
            {
              id: "78",
              authName: "苏宁订单",
              path: "/Suning_order"
            }
          ]
        },
        {
          id: "8",
          authName: "财务管理",
          children: [
            {
              id: "81",
              authName: "会员提现设置",
              path: "/Membership_withdrawal"
            },
            {
              id: "82",
              authName: "平台账户充值",
              path: "/Platform_account"
            },
            {
              id: "83",
              authName: "会员提现管理",
              path: "/Member_withdrawal_management"
            },
            {
              id: "84",
              authName: "账户资金记录",
              path: "/account_capital"
            },
            {
              id: "85",
              authName: "余额变动明细",
              path: "/remaining_sum"
            },
            {
              id: "86",
              authName: "全球分红记录",
              path: "/global_dividend"
            },
          ]
        },
        {
          id: "9",
          authName: "消息推送",
          children: [
            {
              id: "91",
              authName: "短信核心设置",
              path: "/SMS_core"
            },
            {
              id: "92",
              authName: "推送模板管理",
              path: "/Push_template"
            },
            {
              id: "93",
              authName: "短信推送记录",
              path: "/SMS_push"
            },
            {
              id: "94",
              authName: "消息推送记录",
              path: "/notification"
            }
          ]
        },
        {
          id: "10",
          authName: "数据统计",
          children: [
            {
              id: "101",
              authName: "商品成交榜",
              path: "/Trade_list"
            },
            {
              id: "102",
              authName: "出单排行榜",
              path: "/List_orders"
            },
            {
              id: "103",
              authName: "核心数据统计",
              path: "/Core_data"
            }
          ]
        }
      ],
      iconObj: {
        "1": "el-icon-setting",
        "2": "el-icon-s-cooperation",
        "3": "el-icon-s-unfold",
        "4": "el-icon-s-shop",
        "5": "el-icon-s-finance",
        "6": "el-icon-s-custom",
        "7": "el-icon-menu",
        "8": "el-icon-shopping-cart-1",
        "9": "el-icon-thumb",
        "10": "el-icon-orange"
      },
      list: JSON.parse(window.sessionStorage.getItem("menulist"))
    };
  },
  created() {
    this.activePath = window.sessionStorage.getItem("activePath");
  },
  methods: {
    // button_menu() {
    //   this.isCollapse = !this.isCollapse;
    // },
    saveNavState(activePath) {
      window.sessionStorage.setItem("activePath", activePath);
      this.activePath = activePath;
    },
    oneMenu(authName) {
      // console.log(authName)
      window.sessionStorage.setItem("authName", authName);
    },
    activeName(activeName) {
      window.sessionStorage.setItem("activeName", activeName);
    },
    //退出
    logout() {
      //退出功能
      //弹出确认对话框
      //用户点击确认，跳回用户登录页面，清除token
      this.$confirm("确定要退出登录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功!"
          });
          //确认退出，清除token
          sessionStorage.removeItem("activePath");
          //跳转登录页面(编程式导航)
          this.$router.push("/login");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  }
};
</script>

<style lang="scss">
.el-header {
  background: #2c2a29;
}
.el-aside {
  background: #333744;
  /* height: 100%; */
}
.el-main {
  background: #fff;
}
.header_left {
  width: 400px;
  height: 100%;
  font-size: 22px;
  color: #fff;
  line-height: 55px;
  float: left;
}
.header_right {
  float: right;
  line-height: 60px;
  color: #fff;
  span {
    cursor: pointer;
  }
}
.el-menu {
  border: none;
}
.button_menu {
  background: saddlebrown;
  color: #fff;
  text-align: center;
  cursor: pointer;
}
</style>