<template>
  <div id="main">
      <Header></Header>
      <el-divider></el-divider>
      <div class="scene">
        <div class="scene-content">
          <p class="scene_title">旅游订单中心</p>
          <el-tabs v-model="activeName" >
              <el-tab-pane label="订单详情" name="first">
                  <el-row>
                      <el-col :span="8" v-for="(item ,index) in sceneInfoList" :key="index"  >
                        <el-card :body-style="{ padding: '0px'}">
                          <img src="../assets/images/scene1.jpg" class="image">
                          <div style="padding: 14px;">
                            <p>【旅游景点】: {{item.province}} / {{item.city}} / {{item.name}}</p>
                            <p>【订单价格】: {{item.price}}</p>
                            <p>【下单时间】: {{item.time}}</p>
                            <p>【订单状态】: {{item.state}}</p>
                            <p>【下单平台】: {{item.OTA}}</p>
                          </div>
                        </el-card>
                      </el-col>
                </el-row>
              </el-tab-pane>

              <el-tab-pane label="评论信息" name="second">
                  <el-row>
                      <el-col :span="8" v-for="(item ,index) in sceneCommentList" :key="index" >
                        <el-card :body-style="{ padding: '0px' }">
                          <img src="../assets/images/scene1.jpg" class="image">
                          <div style="padding: 14px;">
                            <p>【评论内容】: {{item.content}}</p>
                            <p>【下单时间】: {{item.time}}</p>
                            <p>【评价打分】: {{item.score}}(1-5)</p>
                          </div>
                        </el-card>
                      </el-col>
                </el-row>
              </el-tab-pane>
              <!-- <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
              <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
          </el-tabs>
        </div>      
      </div>
      <div class="copyright clearfix">
          <div class="left-text fl">
            <span class="iconfont logo">TrustTravel</span>
            <span class="info-text">© 2019 TrustTravel, Inc. All rights reserved.</span>
          </div>
          <div class="right-text fl clearfix">
            <a href="javascript:;" class="fr">CNY - ￥</a>
            <a href="javascript:;" class="fr">中文（简体）</a>
          </div>
        </div>
  </div>  
</template>
<style>
  .scene{
    width: 100%;
   height: 100%;
  }
  .scene_title{
    overflow-wrap: break-word !important;
    font-family: Circular, PingFang-SC, "Hiragino Sans GB", 微软雅黑, "Microsoft YaHei", "Heiti SC" !important;
    font-size: 32px !important;
    font-weight: 800 !important;
    line-height: 1.125em !important;
    color: #484848 !important;
    margin-bottom: 1rem !important;
    
  }
  .scene-content{
    padding: 0 100px;
    width: 1000px
  }
  .body-style{
    font-family: Circular, PingFang-SC, "Hiragino Sans GB", 微软雅黑, "Microsoft YaHei", "Heiti SC" !important;
    font-size: 14px
  }
   .copyright{
        margin:0 20px;
        border-top: 1px solid rgb(235, 235, 235);
        padding: 15px 0;
        /*height: 40px;*/
        /*line-height: 40px;*/
  }
  .left-text{
          width: 60%;
          color: rgb(118, 118, 118);
  } 
        .logo{
            font-size: 18px;
            margin-right: 10px;
          }
          .info-text{
            font-size: 14px;
            font-weight: bolder;
          }
        .right-text{
          width: 40%;
          /*background-color: deeppink;*/
          /*height: 30px;*/
         
        }
        a{
            display: inline-block;
            margin-left: 15px;
            padding: 8px 12px;
            box-sizing: border-box;
            border: 1px solid rgb(242, 242, 242);
            border-radius: 3px;
            color: rgb(118, 118, 118);
            font-size: 14px;
            font-weight: bolder;
          }
        &:hover{
              background-color: #cccc;
        }
  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
<script>
  import Header from '../components/Header';
  import Vue from 'vue'
    export default {
    name: 'SceneInfo',
    components: {
      Header
    },
    data(){
      return {
        activeName: 'first',
        addr: JSON.parse(sessionStorage.getItem('addr')),
        count: '',
        sceneInfoList: [],
        sceneCommentList: [],
        content:'',
        score:'',
        exist:'',
       
        txhash:'',
        flag:'',
       
      }
    },
    created() {
      this.getSceneOrderCount()
     // this.orderSceneTicket()
    },
    methods: {
      getSceneOrderCount() {
        Vue.axios.get('http://47.102.216.199:3333' + '/scene/count/' + this.addr).then((res) => {
          if(res.data.data !=  null){
            this.count = res.data.data.count
          }
          this.getSceneOrderInfo()
          this.getSceneOrdercomment()
        })
       
      },
      
      getSceneOrderInfo(){
        console.log(this.count)
        this.sceneInfoList = [];
        for(let i = 0;i<this.count ;i++){
          Vue.axios.get(process.env.BASE_URL + '/scene/' + this.addr + '/' + i).then((res) => {
              if(res.data.data !=  null){
                res.data.data.time = this.getDate(res.data.data.time)
                this.sceneInfoList.push(res.data.data)
                console.log(res.data.data)
                //console.log(this.getDate(res.data.data.time))
              }
          })
        } 
      },

      getSceneOrdercomment(){
        this.sceneCommentList = [];
        for(let i = 0;  i< this.count ;i++){
          Vue.axios.get(process.env.BASE_URL + '/scene/comment/' + this.addr + '/' + i).then((res) => {
              if(res.data.data !=  null ){
                res.data.data.time = this.getDate(res.data.data.time)
                this.content = res.data.data.content
                this.score = res.data.data.score
                this.exist = res.data.data.exist
                this.sceneCommentList.push(res.data.data)
                console.log(res.data.data)
              }
          })
        }
        this.commentSceneService() 
      },
      commentSceneService(){
        let commentParams = {
          //addr:,
          //index:this.commentForm.count,
          //content:this.commentForm.content,
          //score:this.commentForm.score
        }
        Vue.axios.post(process.env.BASE_URL + '/scene/comment/' ,commentParams).then((res) => {
          console.log(res.data)
              if(res.data.message == 'success' && res.data.data != null){
               this.txhash=res.data.data.txhash   
              }
          })
      },
      //订购旅游门票
      orderSceneTicket(){
        let ticketParams = {
          addr:this.ticketForm.addr,
          province:this.ticketForm.province,
          city:this.ticketForm.city,
          name:this.ticketForm.name,
          price:this.ticketForm.price,
          ota:this.ticketForm.ota,
          flag:this.ticketForm.flag
        }
        Vue.axios.post(process.env.BASE_URL + '/scene' ,ticketParams).then((res) => {
          console.log(res.data)
              if(res.data.message == 'success' && res.data.data != null){
               this.txhash=res.data.data.txhash   
              }
          })
      },
      getDate(value){
        let date = new Date(value);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return y + '-' + MM + '-' + d + ' ' + h + ':' + m ;
      },
    }
  }
</script>