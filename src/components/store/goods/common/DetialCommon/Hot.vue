<template>
  <div>
      <ul class="side-img-list">

          <li v-for="item in goods" :key="item.id">
            <div class="img-box">
              <router-link :to="{name:'goodsDetial',params:{id:item.id}}">
                <img :src="item.img_url">
              </router-link>
            </div>
            <div class="txt-box">
              <!--这种渲染模板的地方需要的id就是我们渲染数据 -->
              <router-link :to="{name:'goodsDetial',params:{id:item.id}}">{{item.title}}</router-link>
              <span>{{item.add_time | date}}</span>
            </div>
          </li>
          
        </ul>
  </div>
</template>

<script>
  
  export default {
    props:['goods']
  }

</script>

<style scope>

</style>