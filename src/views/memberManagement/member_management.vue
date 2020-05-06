<template>
    <div class="member_management">
      <Crumbs></Crumbs>
      会员管理
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