<template>
  <div class="Goods_sector">
    <Crumbs></Crumbs>
    <div :class="['tab',cur==0?'tabs':'']" @click="ClickCur(cur=0)">a</div>
    <div :class="['tab',cur==1?'tabs':'']" @click="ClickCur(cur=1)">b</div>
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
      cur: 0
    };
  },
  methods: {
    ClickCur(cur) {
      console.log(cur);
    }
  }
};
</script>
<style>
.tab {
  float: left;
  width: 200px;
  height: 500px;
  border: 1px solid #000;
}
.tabs {
  width: 200px;
  height: 500px;
  border: 1px solid red;
}
</style>