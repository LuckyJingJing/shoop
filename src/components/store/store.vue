<template>
  <div>
    <!-- 注意 头部标签避免和html5的新标签一样，会解析不出来，避免是header head都会出错 -->
    <hhead></hhead>
    <router-view></router-view>
    <ffoot></ffoot>
  </div>
</template>

<script>
  import Hhead from './common/header'
  import Ffoot from './common/footer'
  
  export default {
    components:{
      Hhead,
      Ffoot
    }
  }

</script>

<style scope>

</style>