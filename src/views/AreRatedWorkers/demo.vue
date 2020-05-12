<template>
  <div>
    <el-form ref="form" :inline="true" :model="form" label-width="80px">
      <!-- 固定项目 -->
      <div v-for="(item, index) in form.dynamicItem" :key="index">
        <el-form-item label="姓名" :prop="'dynamicItem.' + index + '.name'">
          <el-input v-model="item.name"></el-input>
        </el-form-item>
        <el-form-item>
          <i class="el-icon-delete" @click="deleteItem(item, index)"></i>
        </el-form-item>
      </div>
    </el-form>
    <el-button @click="addItem" type="primary">增加</el-button>
  </div>
</template>
<script>
export default {
  //   name: "dynamicForm",
  data() {
    return {
      form: {
        name: "",
        dynamicItem: []
      }
    };
  },
  methods: {
    addItem() {
      this.form.dynamicItem.push({
        name: "",
        phone: ""
      });
    },
    deleteItem(item, index) {
      this.form.dynamicItem.splice(index, 1);
    }
  }
};
</script>