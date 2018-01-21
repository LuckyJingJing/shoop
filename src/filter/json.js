import Vue from 'vue';

Vue.filter("json",function(obj){
  return JSON.parse(obj);
})

export default{
  function(obj){
    return JSON.parse(obj);
  }
}