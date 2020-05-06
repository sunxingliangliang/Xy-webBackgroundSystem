import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/login/index.vue"
import Index from "@/views/index.vue"
//管理中心 =》 控制台
import ControlPanel from "@/views/controlPanel/controlPanel.vue"

// 素材中心 =》 素材分类
import materialClassification from "@/views/MaterialCenter/material_classification.vue"
//素材中心 =》 素材管理
import materialManagement  from "@/views/MaterialCenter/material_management .vue"

//等级分佣 =》 代理基础设置
import AgentBased from "@/views/are_Rated_Workers/Agent_Based.vue"
//等级分佣 =》 代理等级设置
import AgentLevel from "@/views/are_Rated_Workers/Agent_Level.vue"
//等级分佣 =》 运营商基础设置
import CarrierBase from "@/views/are_Rated_Workers/Carrier_Base.vue"
//等级分佣 =》 运营商等级管理
import operatorClass from "@/views/are_Rated_Workers/operator_Class.vue"

//商品管理 =》 爆料商品
import BrokeGoods from "@/views/commodityManagement/Broke_goods.vue"
//商品管理 =》 商品板块
import GoodsSector from "@/views/commodityManagement/Goods_sector.vue"

//营销功能 => 每日任务
import dailyMission from "@/views/marketingFunction/daily_mission.vue"

//会员管理 => 核心设置
import coreSet from "@/views/memberManagement/core_set.vue"
//会员管理 => 会员管理
import memberManagement from "@/views/memberManagement/member_management.vue"
//会员管理 => 代理商管理
import agentManagement from "@/views/memberManagement/agent_management.vue"
//会员管理 => 运营商管理
import operatorManagement from "@/views/memberManagement/operator_management.vue"
//会员管理 => 会员关系树
import MembershipTree from "@/views/memberManagement/Membership_tree.vue"

//订单管理 => 淘宝订单
import TaobaoOrders from "@/views/orderManagement/Taobao_orders.vue"
//订单管理 => 拼多多订单
import PinduoduoOrder from "@/views/orderManagement/Pinduoduo_order.vue"
//订单管理 => 京东订单
import JingdongOrders from "@/views/orderManagement/Jingdong_orders.vue"
//订单管理 => 唯品会订单
import VipshopOrder from "@/views/orderManagement/Vipshop_order.vue"
//订单管理 => 会员订单
import MemberOrder from "@/views/orderManagement/Member_order.vue"
//订单管理 => 多麦订单
import HisOrder from "@/views/orderManagement/His_order.vue"
//订单管理 => 考拉订单
import koalaOrders from "@/views/orderManagement/koala_orders.vue"
//订单管理 => 苏宁订单
import SuningOrder from "@/views/orderManagement/Suning_order.vue"

//财务管理 => 会员提现设置
import MembershipWithdrawal from "@/views/financialManagement/Membership_withdrawal.vue"
//财务管理 => 平台账户充值
import PlatformAccount from "@/views/financialManagement/Platform_account.vue"
//财务管理 => 会员提现管理
import MemberWithdrawalManagement from "@/views/financialManagement/Member_withdrawal_management.vue"
//财务管理 => 资金账户记录
import accountCapital from "@/views/financialManagement/account_capital.vue"
//财务管理 => 余额变动明细
import remainingSum from "@/views/financialManagement/remaining_sum.vue"
//财务管理 => 全球分红记录
import globalDividend from "@/views/financialManagement/global_dividend.vue"

//消息推送 => 短信核心设置
import SMSCore from "@/views/pushNotifications/SMS_core.vue"
//消息推送 => 推送模板管理
import PushTemplate from "@/views/pushNotifications/Push_template.vue"
//消息推送 => 短信推送记录
import SMSPush from "@/views/pushNotifications/SMS_push.vue"
//消息推送 => 消息推送记录
import Notification from "@/views/pushNotifications/notification.vue"

//数据统计 => 商品成交排行榜
import TradeList from "@/views/dataStatistics/Trade_list.vue"
//数据统计 => 出单排行榜
import ListOrders from "@/views/dataStatistics/List_orders.vue"
//数据统计 => 核心数据统计
import CoreData from "@/views/dataStatistics/Core_data.vue"

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/login"
  },
  {
    name:"login",
    path:"/login",
    component:Login
  },
  {
    name:"index",
    path:"/index",
    component:Index,
    // redirect:"/home",
    children:[
      //管理中心 =》 控制台
      {
        name:"controlPanel",
        path:"/controlPanel",
        component:ControlPanel
      },
      // 素材中心 =》 素材分类
      {
        name:"material_classification",
        path:"/material_classification",
        component:materialClassification
      },
      // 素材中心 =》 素材管理
      {
        name:"material_management",
        path:"/material_management",
        component:materialManagement
      },
      //等级分佣 =》代理基础设置
      {
        name:"Agent_Based",
        path:"/Agent_Based",
        component:AgentBased
      },
      //等级分佣 =》代理等级设置
      {
        name:"Agent_Level",
        path:"/Agent_Level",
        component:AgentLevel
      },
      //等级分佣 =》运营商基础设置
      {
        name:"Carrier_Base",
        path:"/Carrier_Base",
        component:CarrierBase
      },
      //等级分佣 =》运营商等级管理
      {
        name:"operator_Class",
        path:"/operator_Class",
        component:operatorClass
      },
      //商品管理 =》 爆料商品
      {
        name:"Broke_goods",
        path:"/Broke_goods",
        component:BrokeGoods
      },
      //商品管理 =》 商品板块
      {
        name:"Goods_sector",
        path:"/Goods_sector",
        component:GoodsSector
      },
      //营销功能 => 每日任务
      {
        name:"daily_mission",
        path:"/daily_mission",
        component:dailyMission
      },

      //会员管理 => 核心设置
      {
        name:"core_set",
        path:"/core_set",
        component:coreSet
      },
      //会员管理 => 会员管理
      {
        name:"member_management",
        path:"/member_management",
        component:memberManagement
      },
      //会员管理 => 代理商管理
      {
        name:"agent_management",
        path:"/agent_management",
        component:agentManagement
      },
      //会员管理 => 运营商管理
      {
        name:"operator_management",
        path:"/operator_management",
        component:operatorManagement
      },
      //会员管理 => 会员关系树
      {
        name:"Membership_tree",
        path:"/Membership_tree",
        component:MembershipTree
      },
      //会员管理 => 淘宝订单
      {
        name:"Taobao_orders",
        path:"/Taobao_orders",
        component:TaobaoOrders
      },
      //会员管理 => 拼多多订单
      {
        name:"Pinduoduo_order",
        path:"/Pinduoduo_order",
        component:PinduoduoOrder
      },
      //会员管理 => 京东订单
      {
        name:"Jingdong_orders",
        path:"/Jingdong_orders",
        component:JingdongOrders
      },
      //会员管理 => 唯品会订单
      {
        name:"Vipshop_order",
        path:"/Vipshop_order",
        component:VipshopOrder
      },
      //会员管理 => 会员订单
      {
        name:"Member_order",
        path:"/Member_order",
        component:MemberOrder
      },
      //会员管理 => 多麦订单
      {
        name:"His_order",
        path:"/His_order",
        component:HisOrder
      },
      //会员管理 => 考拉订单
      {
        name:"koala_orders",
        path:"/koala_orders",
        component:koalaOrders
      },
      //会员管理 => 苏宁订单
      {
        name:"Suning_order",
        path:"/Suning_order",
        component:SuningOrder
      },
      
      //财务管理 => 会员提现设置
      {
        name:"Membership_withdrawal",
        path:"/Membership_withdrawal",
        component:MembershipWithdrawal
      },
      //财务管理 => 平台账户充值
      {
        name:"Platform_account",
        path:"/Platform_account",
        component:PlatformAccount
      },
      //财务管理 => 会员提现管理
      {
        name:"Member_withdrawal_management",
        path:"/Member_withdrawal_management",
        component:MemberWithdrawalManagement
      },
      //财务管理 => 账户资金记录
      {
        name:"account_capital",
        path:"/account_capital",
        component:accountCapital
      },
      //财务管理 => 余额变动明细
      {
        name:"remaining_sum",
        path:"/remaining_sum",
        component:remainingSum
      },
      //财务管理 => 全球分红记录
      {
        name:"global_dividend",
        path:"/global_dividend",
        component:globalDividend
      },     

      //消息推送 => 短信核心设置
      {
        name:"SMS_core",
        path:"/SMS_core",
        component:SMSCore
      }, 
      //消息推送 => 推送模板管理
      {
        name:"Push_template",
        path:"/Push_template",
        component:PushTemplate
      }, 
      //消息推送 => 短信推送记录
      {
        name:"SMS_push",
        path:"/SMS_push",
        component:SMSPush
      }, 
      //消息推送 => 消息推送记录
      {
        name:"notification",
        path:"/notification",
        component:Notification
      }, 

      //数据统计 => 商品成交排行榜
      {
        name:"Trade_list",
        path:"/Trade_list",
        component:TradeList
      }, 
      //数据统计 => 出单排行榜
      {
        name:"List_orders",
        path:"/List_orders",
        component:ListOrders
      }, 
      //数据统计 => 核心数据统计
      {
        name:"Core_data",
        path:"/Core_data",
        component:CoreData
      }, 
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router