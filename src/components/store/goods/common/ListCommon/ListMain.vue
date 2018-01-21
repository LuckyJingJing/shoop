<template>
  <div>
    <div class="section" v-for="item in dataList" :key="item.level1cateid">

        <!--子类-->
        <div class="main-tit">
          <h2>{{item.catetitle}}</h2>
          <p>
            <router-link to="" v-for="subitem in item.level2catelist" :key="subitem.subcateid">{{subitem.subcatetitle}}</router-link>
            <router-link to="">更多
              <i>+</i>
            </router-link>
          </p>
        </div>
        <!--/子类-->
        <div class="wrapper clearfix">
          <div class="wrap-box">
            <ul class="img-list">
    
              <li v-for="subitem in item.datas" :key="subitem.artID">
                <!-- 注意这里面的地址要传参数 -->
                <router-link :to="{name:'goodsDetial',params:{id:subitem.artID}}">
                  <div class="img-box">
                    <img :src="subitem.img_url">
                  </div>
                  <div class="info">
                    <h3>{{subitem.artTitle}}</h3>
                    <p class="price">
                      <b>¥{{subitem.sell_price}}</b>元</p>
                    <p>
                      <strong>{{subitem.stock_quantity}}</strong>
                      <span>市场价：
                        <s>{{subitem.market_price}}</s>
                      </span>
                    </p>
                  </div>
                </router-link>
              </li>
    
            </ul>
          </div>
        </div>
      </div>
  </div>

</template>

<script>
  export default {
    data(){
      return{
        dataList:[
          {
            level1cateid: 40,
            catetitle: "手机数码",
            level2catelist:[],
            datas: []
          }
        ]
      }
    },
    methods:{
      getData(){
        this.$http.get(this.$api.goodsContent).then(res=>{
          // console.log(res);
          this.dataList = res.data.message;
        })
      }
    },
    created(){
      this.getData();
    }
  }

</script>

<style scope>


</style>
