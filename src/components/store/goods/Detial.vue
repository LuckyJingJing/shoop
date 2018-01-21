<template>
  <div>
    <!-- 导航栏 -->
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/index.html">首页</a> &gt;
        <a href="/goods.html">购物商城</a>
        <a href="/goods/42/1.html">商品详情</a>

      </div>
    </div>

    <!-- 商品详情 -->
    <div class="section">
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <!--页面左边-->
          <div class="left-925">
            <div class="goods-box clearfix">
              <!--商品图片-->
              <div class="pic-box">
                <img-list :goods="dataList.imglist"></img-list>
              </div>

              <!--商品信息-->
              <div class="goods-spec">
                <info :goods="dataList.goodsinfo"></info>
              </div>
            </div>

            <div id="goodsTabs" class="goods-tab bg-wrap">
              <!--选项卡-->
              <el-tabs v-model="activeName2" type="card">
                  <el-tab-pane label="商品详情" name="first">
                    <div v-html="dataList.goodsinfo.content"></div>
                  </el-tab-pane>
                  <el-tab-pane label="用户评论" name="second">
                    <comment></comment>
                  </el-tab-pane>
              </el-tabs>
            </div>

          </div>
          <!--/页面左边-->

          <!--页面右边-->
          <div class="left-220">
            <div class="bg-wrap nobg">
              <div class="sidebar-box">
                <h4>推荐商品</h4>
                <hot :goods="dataList.hotgoodslist"></hot>
              </div>
            </div>
          </div>
          <!--/页面右边-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Info from "./common/DetialCommon/Info.vue";
  import Hot from "./common/DetialCommon/Hot.vue";
  import ImgList from "./common/DetialCommon/ImgList.vue";
  import Comment from "./common/DetialCommon/comment.vue";
   
  export default {
    data() {
      return {
        id: null,
        activeName2:"first",
        dataList:{
          goodsinfo:{},
          imglist:[],
          hotgoodslist:[]
        }
      }
    },
    methods: {
      //获取商品详情数据
      getDataList() {
        this.$http.get(this.$api.goodsDetail + this.id).then(res => {
          this.dataList = res.data.message;
        })
      }
    },
    created() {
      //获取id
      this.id = this.$route.params.id;
      this.getDataList();

    },
    components: {
      Info,
      Hot,
      ImgList,
      Comment

    }
  }

</script>

<style scope>


</style>
