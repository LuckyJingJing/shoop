<template>
    <div class="section">
        <div class="wrapper">
            <div class="wrap-box">
                <!--类别菜单-->
                <div class="left-220" style="margin:0;">
                    <div class="banner-nav">
                        <ul>
                        <!--此处声明下面可重复循环-->                         
                            <li v-for="(item,index) in dataList.catelist" :key="item.id">
                                <h3>
                                    <i class="iconfont icon-arrow-right" ></i>
                                    <span>{{item.title}}</span>
                                    <!-- 注意这里不是直接在p标签上面加循环，而是在里面嵌套一个span标签，然后在这个span标签上面循环-->
                                    <p>
                                        <span v-for="(subitem,index) in item.subcates" :key="subitem.id">{{subitem.title}}&nbsp;&nbsp;</span>
                                    </p>

                                    <!--注意这么写是错的，一定要搞清楚重复出现的是哪个结构，哪个标签，在要重复出现的标签和结构那里写循环-->
                                    <!-- <p v-for="(subitem,index) in item.subcates" :key="subitem.id">
                                            <span >{{subitem.title}}&nbsp;&nbsp;</span>
                                    </p> -->
                                </h3>
                                <div class="item-box" >
                                    <!--如有三级分类，此处可循环-->
                                    <dl>
                                        <dt >
                                            <!-- 上面已经在整个li标签里面循环了，这里就不需要再循环了 -->
                                            <router-link to="/goods/40.html">{{item.title}}</router-link>
                                        </dt>
                                        <dd>                                            
                                            <!-- <router-link v-for="(subitem,index) in item.subcates" :key="subitem.id" to="/goods/43.html">{{subitem.title}}</router-link> -->

                                            <!-- 如果1级里面嵌套了子级，子级里面又嵌套了子级，嵌套的比较深的时候，就可以把这个部分再用一个子组件来写 -->
                                            <!-- 如果有无限层，我们只能尝试封装一个单独的组件，因为只有组件才能递归自己，普通元素不行-->
                                            <!-- 我们把起始的一层列表数据传递过去，让它渲染 -->
                                            <!-- 然后该组件还会判断每一层数据是否有下一级，如果有那么嗲用自己继续渲染，直接没有下一级 -->
                                            <app-category :list="item.subcates"></app-category>
                                        </dd>
                                    </dl>
                                </div>
                            </li>                        
                        </ul>
                    </div>
                </div>
                <!--/类别菜单-->
                 
                <!--幻灯片-->
                <div class="left-705">
                    <div class="banner-img">
                        <el-carousel :interval="5000" arrow="always">
                            <el-carousel-item v-for="item in dataList.sliderlist" :key="item.id">
                                <img style="height:100%;":src="item.img_url" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <!--/幻灯片-->
                 
                <!--推荐商品  因为以后也会有其它页面也有这个功能，所以可以单独封装这个组件-->
                <div class="left-220">
                    <hot-list :list="dataList.toplist"></hot-list>
                </div>
                <!--/推荐商品-->
            </div>
        </div>
    </div>
</template>
  
<script>
    //导入左边嵌套的子组件
    import AppCategory from './category.vue';
    // 导入右边推荐模块的子组件
    import HotList from "./hotList.vue";
    export default {
        data(){
            return{
                dataList:{
                    sliderlist:[],
                    toplist:[],
                    catelist:[
                        // 模拟假设有这么多层嵌套
                        {
                            id: 151,
                            pid: 150,
                            class_layer: 2,
                            title: "男装",
                            subcates: [
                                {
                                    id: 155,
                                    pid: 154,
                                    class_layer: 4,
                                    title: "休闲西装",
                                    subcates: [
                                        {
                                            id: 155,
                                            pid: 154,
                                            class_layer: 4,
                                            title: "裤子",
                                            subcates: [
                                                {
                                                    id: 155,
                                                    pid: 154,
                                                    class_layer: 4,
                                                    title: "秋裤",
                                                    subcates: [
                                                        {
                                                            id: 155,
                                                            pid: 154,
                                                            class_layer: 4,
                                                            title: "内裤"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }  
                    ],
                }
            }
        },
        methods:{
            getTopData(){
                //获取商品列表头部的数据
                this.$http.get(this.$api.goodsTop).then(res=>{
                    // console.log(res);
                    this.dataList = res.data.message;
                })
            }
        },
        created(){
            this.getTopData();
        },
        //子组件,多层嵌套的时候，利用递归来实现
        components: {
            AppCategory,
            HotList
        }
  }
  
</script>
  
<style scope lang="less">
    .el-carousel{
        height: 100%;
        .el-carousel__container{
            height:100%;
        }
    }
</style>
  