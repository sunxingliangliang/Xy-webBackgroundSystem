<template>
    <div class="daily_mission">
      <Crumbs></Crumbs>
      每日任务
    </div>
</template>

<script>
import Crumbs from "@/components/crumbs";
export default {
    components: {
      Crumbs
  },
  data() {
    return {};
  },
  created() {
    // this.activePath = window.sessionStorage.getItem("activePath");
  }
}
</script>