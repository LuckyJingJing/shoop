//导入路由第三方包
import Vue from 'vue';
import Router from 'vue-router';
//使用router
Vue.use(Router);

//导入路由守卫的文件
//全局守卫的方法和参数如上面所写，但是为了实现一个文件的功能单一化，所以我们把这个方法单独写一个文件
//引入beforeEach 文件
import beforeEach from "@/js/beforeEach";

/*导入路由文件,在build文件夹里webpack.base.conf.js的文件里的resolve:对象里面有配置以json,js,vue的后缀名可
以省略不写 ，也配置了可以用@表示src目录*/ 
//登陆
import Login from "@/components/login/Login";

//首页
import Store from "../components/store/store"

//商品页面
import GoodsList from "@/components/store/goods/List";
import GoodsDetial from "@/components/store/goods/Detial";

//提交订单，支付页面
import OrderCommit from "@/components/store/order/Commit";
import OrderPay from "@/components/store/order/Pay";

//购物车页面
import Shopcat from "@/components/store/shopcat/Shopcat";



//创建router对象，
var router = new Router({
  //创建路由规则
  routes:[
    //重定向
    {path:"/", redirect: "/store"},

    //登陆
    {name:"login", path:"/login", component:Login},
    
    //首页
    {name:"store", path:"/store", component: Store, children:
      [
        //商品
        {name:"goodsList", path:"goods/list", component: GoodsList},
        {name:"goodsDetial", path:"goods/detial/:id", component: GoodsDetial},
    
        //提交订单，支付
        {name:"OrderCommit", path:"order/commit", component: OrderCommit},
        {name:"OrderPay", path:"order/pay", component: OrderPay},

        //购物车
        {name:"shopcat", path:"shopcat", component: Shopcat}

      ]
      
    }

    
    
  ]
})
/*当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直
处于 等待中。*/
  router.beforeEach(beforeEach);

//暴露路由对象，在main.js中挂载在Vue实例上面
export default router;
