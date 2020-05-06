<template>
    <div class="Membership_tree">
      <Crumbs></Crumbs>
      会员关系树
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