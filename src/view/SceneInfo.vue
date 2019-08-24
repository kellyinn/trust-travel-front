<template>
  <div id="main">
      <Header></Header>
      <el-divider></el-divider>
      <div class="hotel">
        <div class="hotel-content">
          <p class="hotel_title">旅游订单中心</p>
          <el-tabs v-model="activeName" >
              <el-tab-pane label="订单详情" name="first">
                  <el-table
                  :data="sceneInfoList.slice( (currentPage - 1) * pagesize, currentPage * pagesize)" 
                  style="width: 100%"
                  border default-expand-all>
                  <el-table-column type="expand">
                    <template slot-scope="props">
                      <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="目的地：">
                          <span>{{ props.row.name}}</span>
                        </el-form-item>
                        <el-form-item label="省份：">
                          <span>{{ props.row.province }}</span>
                        </el-form-item>
                        <el-form-item label="城市：">
                          <span>{{ props.row.city }}</span>
                        </el-form-item>
                        <el-form-item label="订单价格：">
                          <span>￥{{ props.row.price }}</span>
                        </el-form-item>
                        <el-form-item label="OTA：">
                          <span>{{ props.row.OTA }}</span>
                        </el-form-item>
                        <el-form-item label="state：">
                            <span>有效</span>
                        </el-form-item>
                        <el-form-item label="评论内容：">
                            <span>{{ props.row.comment}}</span>
                        </el-form-item>
                        <el-form-item label="整体打分:">
                            <span>{{ props.row.score}}</span>
                        </el-form-item>
                        <el-form-item label="评论Hash：">
                          <span>{{ props.row.comment_hash}}</span>
                        </el-form-item>
                        <el-form-item label="评论时间：">
                          <span>{{ props.row.comment_time}}</span>
                        </el-form-item>
                      </el-form>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="旅游订单hash值"
                    prop="hash">
                  </el-table-column>
                  <el-table-column
                  label="订单价格">
                  <template slot-scope="scope">
                      <span>￥{{ scope.row.price }}</span>
                  </template>                       
                 </el-table-column>
                  <el-table-column label="点评订单">
                      <template slot-scope="scope">
                          <el-button v-if="scope.row.exist == false" type="danger" @click="gotoSceneComment(scope.row.index,scope.row)">我要点评</el-button>
                          <el-button  v-else type="text">订单已评价</el-button>  
                      </template> 
                  </el-table-column>
                  <el-table-column
                  label="下单时间">
                  <template slot-scope="scope">
                      <span>{{ scope.row.time }}</span>
                  </template>                       
                 </el-table-column>
                </el-table>
                <el-footer>
                    <div class="block">
                        <el-pagination 
                        @size-change="handleSizeChange" 
                        @current-change="handleCurrentChange" 
                        :current-page="currentPage" 
                        :page-sizes="[10, 20, 50, 100]"
                        :page-size="pagesize" 
                        layout="total, prev, pager, next"
                        :total="sceneInfoList.length">
                        </el-pagination>
                    </div>
                </el-footer>
              </el-tab-pane>
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
        currentPage: 1, //初始页
        pagesize: 5, 
       
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
        time:''
      }
    },
    created() {
      this.getSceneOrderCount()
    },
    methods: {
      handleSizeChange: function(size) {
           this.pagesize = size;
            //console.log(this.pagesize);
        },
        handleCurrentChange: function(currentPage) {
            this.currentPage = currentPage;
            //console.log("当前页: " + this.currentPage);
        },
        handleChange(val) {
        //console.log(val);
      },
      getSceneOrderCount() {
        this.addr = sessionStorage.getItem('addr')
        Vue.axios.get('http://47.102.216.199:3333' + '/scene/count/' + JSON.parse(this.addr)).then((res) => {
          console.log(res.data)
          if(res.data.data !=  null){
              this.count = res.data.data.count
          }
          this.getSceneOrderInfo()
        })
       
      },
      
      getSceneOrderInfo(){
        console.log(this.count)
        this.sceneInfoList = [];
        for(let i = 0;i<this.count ;i++){
          let sceneInfo;
          Vue.axios.get('http://47.102.216.199:3333' + '/scene/' + JSON.parse(this.addr) + '/' + i).then((res) => {
            if(res.data.data !=  null){
                res.data.data.time = this.getDate(parseInt(res.data.data.time))
                this.time = res.data.data.time
                sceneInfo = res.data.data
                sceneInfo ['index'] = i
                this.sceneInfoList.push(sceneInfo);
            }
          })
          this.getSceneOrdercomment()
        } 
        console.log(this.sceneInfoList)
      },
      gotoSceneComment(index,row){
              console.log(index)
              console.log(row)
              this.$router.push({
                name: 'SceneComment',
                params: {
                  index:index,
                }
              });
            },
      getSceneOrdercomment(){
        this.sceneCommentList = [];
        for(let i = 0;  i< this.count ;i++){
          Vue.axios.get('http://47.102.216.199:3333' + '/scene/comment/' + JSON.parse(this.addr) + '/' + i).then((res) => {
            console.log(res.data.data)
            if(res.data.data !=  null && res.data.data.exist == true){
                      let info = this.sceneInfoList[i]
                      info['score'] = res.data.data.score
                      info['comment'] = res.data.data.content
                      info['exist'] = res.data.data.exist
                      info['comment_hash'] = res.data.data.hash                    
                      info['comment_time'] = this.getDate(parseInt(res.data.data.time))
                      this.sceneInfoList[i] = info
                     
            }else{                    
                      let info = this.sceneInfoList[i]
                      
                      info['score'] = '未评分'
                      info['comment'] = '还未评价'
                      info['exist'] = false
                      info['comment_hash'] = '无'
                      info['comment_time'] = '无'
                      this.sceneInfoList[i] = info
            }
          })
        }
       
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
<style>
    .demo-table-expand {
      font-size: 0;
    }
    .demo-table-expand label {
      width: 90px;
      color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
    }
          .hotel{
            width: 100%;
           height: 100%;
          }
          .hotel_title{
            overflow-wrap: break-word !important;
            font-family: Circular, PingFang-SC, "Hiragino Sans GB", 微软雅黑, "Microsoft YaHei", "Heiti SC" !important;
            font-size: 32px !important;
            font-weight: 800 !important;
            line-height: 1.125em !important;
            color: #484848 !important;
            margin-bottom: 1rem !important;
          }
          .hotel-content{
            padding: 0 100px
          }
          .el-tabs {
            width: 100%
          }
          body-style{
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
                  /*background-color: pink;*/
                  color: rgb(118, 118, 118);
                 
                  /*height: 30px;*/
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