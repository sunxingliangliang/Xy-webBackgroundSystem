<template>
    <div class="core_set">
      <Crumbs></Crumbs>
      核心设置
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