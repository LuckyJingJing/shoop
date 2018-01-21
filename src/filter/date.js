// import Vue from 'vue';

// Vue.filter("date",function(data){
//   return new.Date(data).toLocaleDateString;
// })

//toLocaleDateString只有年月日

//像上面那么写的话，每次都要导入vue，我们可以利用vue的插件机制来做
export default function(date){
  return new Date(date).toLocaleDateString();
}
