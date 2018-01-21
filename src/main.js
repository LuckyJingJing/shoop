//1.1导入vue第三方包
import Vuex from 'vuex';
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//1.2导入非vue第三方包
import axios from 'axios';
import 'normalize.css';

//1.3使用vue第三方包
Vue.use(Vuex);
Vue.use(ElementUi);

//2.1导入自己的配置文件
import Api from './js/api-config.js';
import "@/less/index.less";
import "./css/icon/iconfont.css";
import "./css/style.css";
// import myFilter from "./filter";  //这么写也可以
import myFilter from "./filter/index";

Vue.use(myFilter);


//3.1
//设置
/*浏览器有一个安全机制，如果是跨域请求，浏览器是不会把本地cookie信息携带过去的，所以我们在设置这一项代码的时
候，我们所有的操作都是没有cookie值存在的*/
//注意这里的defaults 有s  不要写成了defaults
axios.defaults.withCredentials=true;
axios.defaults.baseURL = 'http://localhost:8899'; //一配置之后，以后所有的请求都会使用这个域名

//3.2扩展Vue原型
Vue.prototype.$http = axios;
Vue.prototype.$api = Api;


import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
