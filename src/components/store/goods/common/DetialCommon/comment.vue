<template>
  <div>
    <div class="comment-box">
      <!--取得评论总数-->
      <form id="commentForm" name="commentForm" class="form-box">
        <div class="avatar-box">
          <i class="iconfont icon-user-full"></i>
        </div>
        <div class="conn-box">
          <div class="editor">
            <textarea id="txtContent" name="txtContent" sucmsg="" datatype="*10-1000" nullmsg="请填写评论内容！" v-model="comment"></textarea>
            <span class="Validform_checktip"></span>
          </div>
          <div class="subcon">
            <!--表单提交默认会刷新整个页面，所以我们要阻止它的默认事件用prenvent -->
            <input id="btnSubmit" name="submit" type="submit" value="提交评论" class="submit" @click.prevent="addComment">
            <span class="Validform_checktip"></span>
          </div>
        </div>
      </form>
      <ul id="commentList" class="list-box">
        <p style="margin:5px 0 15px 69px;line-height:42px;text-align:center;border:1px solid #f7f7f7;" v-if="dataList.length==0">暂无评论，快来抢沙发吧！</p>
        <li v-for="(item,index) in dataList" :key="index">
          <div class="avatar-box">
            <i class="iconfont icon-user-full"></i>
          </div>
          <div class="inner-box">
            <div class="info">
              <span>{{item.user_name}}</span>
              <span>{{item.add_time | date}}</span>
            </div>
            <p>{{item.content}}</p>
          </div>
        </li>
      </ul>
      <!--放置页码-->
      <div class="page-box" style="margin:5px 0 0 62px">
        <el-pagination
          @current-change="currentChange"
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
      <!--/放置页码-->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: null,
        dataList:[],
        comment:"",
        total:100,
        page:{
          pageIndex:1,
          pageSize:10
        }

      }

    },
    methods:{
      //获取用户评论
      getComment(){
        //注意如果请求里面需要的参数是这种形式的话 /site/comment/getbypage/:tablename/:artid?pageIndex=页码&pageSize=每页显示条数    /：后面的参数，在发送请求的时候，在地址后面是用+号连接，如果是？号后面的参数，那么就要以对象的形式传递，
        //但是get和post的传递方式又有不同，get传参是以一个{}包含我们要传递的参数，{}在这里表示配置项，而post里面直接传一个对象就好，比如以下面这个为例子，在post中直接在后面写this.page,不需要用{}包含，以键值对的形式传递。注意两个/：的参数，中间要手动拼接一个/
        //注意  {params:this.page} post传参的params只能写这个，不能换成其它单词
        this.$http.get(this.$api.commentList+"goods"+"/"+this.id,{params:this.page}).then(res=>{
          this.dataList = res.data.message;
          this.total=res.data.totalcount;
        })
      },
      //提交评论
      addComment(){
        this.$http.post(this.$api.comment+"goods"+"/"+this.id,{commenttxt:this.comment}).then(res=>{
          //评论提交成功之后要重新获取评论数据，把我们之前的写在评论框里面的内容情况，并刷新页面
          console.log(123);
          console.log(res);          
          this.comment="";
          this.getComment();
        })
      },
      //点击某一页的时候就向后台再一起发起请求请求点击的这一页的数据,这是element-ui组件里面的自带的时间有一个val的参数，就是我们点击的那页的数字
      currentChange(val){
        // console.log(val)
        //发送请求前，先改变我们要传给后台的当前页是第几页
        this.page.pageIndex=val;
        //发送对应页的请求
        this.getComment();
      }
    },
    created(){
      //获取id
      this.id = this.$route.params.id;
      this.getComment();
    }
  }

</script>

<style scope>


</style>
