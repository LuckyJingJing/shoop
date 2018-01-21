<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <router-link to="/store">首页</router-link>
      </div>
      <list-top></list-top>
      <list-main></list-main>
    </div>
  </div>
</template>

<script>

  //导入页面中的顶部和主体部分的组件
  import ListTop from "./common/ListCommon/ListTop.vue";
  import ListMain from "./common/ListCommon/ListMain.vue";
  export default {
    components:{
      ListTop,
      ListMain
    }
  }

</script>

<style scope>

</style>
