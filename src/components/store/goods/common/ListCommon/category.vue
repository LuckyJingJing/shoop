<template>
  <div>
    <!-- 这里循环的部分就和之前我们写在父组件里面的代码是一样的，只是我们用了子组件的一个名字把原来要循环的标签，相当于在那里把要循环的标签的位置占住了，然后在这个子组件里面进行循环-->
    <router-link v-for="(item,index) in list" :key="list.id" to="">{{item.title}}

    <!-- 用递归的方式自己调用自己 true的时候显示 false的时候隐藏-->
    <app-category v-if="item.subcates && item.subcates.length !=0" :list="item.subcates"></app-category>

    </router-link>
  </div>
</template>
  
<script>
  export default {
    //为了在当前组件内使用，所以给自己定义了一个名字
    name: "app-category",
    // 父组件传值给子组件的时候需要用props接受，子组件才能拿到并使用,
    //接收父传递过来的数据
    props:["list"]

  }

</script>
  
<style scope>
  
</style>
  