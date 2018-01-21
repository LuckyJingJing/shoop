<template>
  <div  >
    <ul class="side-img-list">                    
        <li v-for="item in list" :key="item.id">
            <div class="img-box">
                <label>{{item.id}}</label>
                <img :src="item.img_url">
            </div>
            <div class="txt-box">
                <router-link to="">{{item.title}}</router-link>
                <!-- 这里使用的过滤器是我们自己封装好了的，而且是封装在了Vue的原型上面了，在main.js里面导入use了之后,就可以直接在这里用了 -->
                <span>{{item.add_time | date}}</span>
            </div>
        </li>                  
    </ul>
  </div>
</template>

<script>

export default {
  props:["list"]
}

</script>

<style scope>

</style>
  