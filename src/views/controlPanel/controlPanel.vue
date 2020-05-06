<template>
  <div class="controlPanel">
    <Crumbs></Crumbs>
    <div class="statistical_Graph">
      <div id="Clinch_a_deal_the_statistical" :style="{width: '60%', height: '500px'}"></div>
      <div class="saleroom">
        <div class="saleroom_item">
          <div class="saleroom_item_left">
            <img src="../../assets/image/orderForm.png" alt />
          </div>
          <div class="saleroom_item_right">
            <p class="saleroom_item_num">今日订单总数</p>
            <p class="saleroom_item_money">6571</p>
            <p class="saleroom_item_compare">
              <span>-2.8%</span> 相比昨日
            </p>
          </div>
        </div>
        <div class="saleroom_item">
          <div class="saleroom_item_left">
            <img src="../../assets/image/money.png" alt />
          </div>
          <div class="saleroom_item_right">
            <p class="saleroom_item_num">今日销售金额</p>
            <p class="saleroom_item_money">6571</p>
            <p class="saleroom_item_compare">
              <span>-2.8%</span> 相比昨日
            </p>
          </div>
        </div>
        <div class="saleroom_item">
          <div class="saleroom_item_left">
            <img src="../../assets/image/market.png" alt />
          </div>
          <div class="saleroom_item_right">
            <p class="saleroom_item_num">昨日订单总数</p>
            <p class="saleroom_item_money">6571</p>
            <p class="saleroom_item_compare">
              <span>-2.8%</span> 相比昨日
            </p>
          </div>
        </div>
        <div class="saleroom_item">
          <div class="saleroom_item_left">
            <img src="../../assets/image/yesterday_money.png" alt />
          </div>
          <div class="saleroom_item_right">
            <p class="saleroom_item_num">昨日销售金额</p>
            <p class="saleroom_item_money">6571</p>
            <p class="saleroom_item_compare">
              <span>-2.8%</span> 相比昨日
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="merchandise_Sales">
      <div class="merchandise_Sales_Ranking">
        <div class="merchandise_Sales_Ranking_top">
          <p>商品销售排行</p>
        </div>
        <div class="merchandise_Sales_Ranking_bottom">
          <el-table :data="tableData" style="width: 100%;">
            <el-table-column prop="id" label="排名" width="100" align="center"></el-table-column>
            <el-table-column prop="date" label="商品" width="280"></el-table-column>
            <el-table-column prop="name" label="销量" align="center"></el-table-column>
            <el-table-column label="成交金额" align="center" prop="address"></el-table-column>
          </el-table>
        </div>
      </div>
      <div class="merchandise_Sales_proportion">
        <div>
          <div id="Goods_accounted_for" :style="{width: '100%', height: '100%'}"></div>
        </div>
      </div>
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
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "1518"
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "1517"
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "1519"
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "1516"
        },
        {
          id: 5,
          date: "2016-05-03",
          name: "王小虎",
          address: "1516"
        }
      ]
    };
  },
  mounted() {
    this.drawLine();
    this.initData();
    // this.activePath = window.sessionStorage.getItem("activePath");
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("Clinch_a_deal_the_statistical")
      );
      // 绘制图表
      myChart.setOption({
        title: {
          text: "七日成交统计"
          // left:"center"
        },
        tooltip: {},
        xAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      });
      window.onresize = myChart.resize;
    },
    initData() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("Goods_accounted_for"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "商品销售占比",
          // subtext: "纯属虚构",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.statistical_Graph {
  width: 100%;
  height: 500px;
  #Clinch_a_deal_the_statistical {
    background: #fff;
    border-radius: 8px;
    float: left;
  }
  #Goods_accounted_for {
    // margin-top: 20px!important;
    div {
      margin-top: 20px !important;
    }
  }
  .saleroom {
    width: 40%;
    height: 510px;
    float: left;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .saleroom_item {
      width: 48%;
      height: 48%;
      background: #fff;
      border-radius: 8px;
      .saleroom_item_left {
        width: 30%;
        height: 100%;
        // background: bisque;
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 66px;
          height: 66px;
        }
      }
      .saleroom_item_right {
        width: 70%;
        height: 100%;
        // background: blueviolet;
        float: left;
        .saleroom_item_num {
          text-align: center;
          font-size: 22px;
          margin-top: 30px;
          margin-right: 60px;
        }
        .saleroom_item_money {
          text-align: center;
          font-size: 30px;
          font-weight: bold;
          margin-top: 20px;
          margin-right: 60px;
        }
        .saleroom_item_compare {
          text-align: center;
          margin-right: 60px;
          margin-top: 15px;
          span {
            // background: red;
            color: red;
          }
        }
      }
    }
  }
}
.merchandise_Sales {
  width: 100%;
  height: 350px;
  // background: red;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .merchandise_Sales_Ranking {
    width: 49.5%;
    height: 100%;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    .merchandise_Sales_Ranking_top {
      width: 100%;
      height: 20%;
      // background: red;
      display: flex;
      align-items: center;
      p {
        margin-left: 20px;
        font-size: 20px;
        font-weight: bold;
      }
    }
    .merchandise_Sales_Ranking_bottom {
      width: 100%;
      height: 80%;
      background: beige;
    }
  }
  .merchandise_Sales_proportion {
    width: 49.5%;
    height: 100%;
    background: #fff;
    border-radius: 8px;
    div {
      width: 100%;
      height: 100%;
      margin-top: 20px;
    }
  }
}
// @media screen and (max-width: 1680px) {
//   .saleroom_item_left img{
//     // font-size: 10px!important;
//     // color: red;
//     width: 22px;
//     height: 22px;
//   }
// }
// @media screen and (max-width: 1680px) {
//   .saleroom_item_right p{
//     font-size: 10px!important;
//     color: red;
//   }
// }

</style>