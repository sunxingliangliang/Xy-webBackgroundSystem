<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.el-menu-item-group__title{
  padding: 0!important;
}
// .el-form-item__label{
//   text-align: center!important;
// }
.el-dialog {
position: absolute;
top: 50%;
left: 50%;
margin: 0 !important;
transform: translate(-50%, -50%);
max-height: calc(100% - 330px);
max-width: calc(100% - 30px);
display: flex;
flex-direction: column;
}
.el-dialog__body {
overflow: auto;
}
</style>
