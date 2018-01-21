//导入第三方包
import axios from 'axios';
//导入配置文件
import api from '@/js/api-config.js';

//声明一个变量存储我们不需要进行进行登陆校验的页面
var nologinCheck =["store", "goodsList", "goodsDetial"]

export default function(to,from,next){
  //获取我们需要去的页面
  var nextToPage = to.name;
  /*判断我们要去的页面是不是我们上面不需要进行校验的页面，如果是，则不需要进行校验，直接调用next方法，让用户访问*/
  //数组.some 返回的是true 和false ，只要我们访问的页面是这个数组中有的页面就不需要进行校验
  //v表示数组中的每一项
  if(nologinCheck.some(v=>v==nextToPage)){
    //满足条件，不需要进行校验，直接调用next（）；前面加一个return就是说，终止下面的执行
    return next();
  }

  //通过调用后台的 判断是否登陆的接口，通过后台返回的接口来知道用户是否登陆了
  var flag = false;
  axios.get(api.isLogin).then(res=>{
    if(res.data.code == "logined" ){
      flag = true;
    }
    //如果直接登陆的是登陆页面，且已经登陆过，直接跳转到首页
    if(nextToPage == "login"  &&  flag){
      next({name:"store"})

      //如果直接访问的不是登陆页面，且没有登陆过，那么跳转到登陆页面，登陆之后再跳转到之前访问的页面，所以这里还要另外再传一个之前访问的路径的参数
    }else if(nextToPage != "login"  && flag == false){
      /*这里获取地址参数之后，还要在登陆组件进行判断。如果这里有地址参数，那么登陆组件那边要获取这个参数，将
      要跳转的页面的地址改为这个参数，没有的话，手动设置跳转到首页*/
      next({name:"login", query: {nextPage: to.fullPath} })
      
      //因为next一定要被执行，所以必须再写一个else的判断
    }else{
      next();
    }
  })
    
  
}