<template>
        <div id="main">
            <Header></Header>
            <el-divider></el-divider>
            <div class="hotel">
              <div class="hotel-content">
                <p class="hotel_title">酒店订单中心</p>
                <el-tabs v-model="activeName" >
                    <el-tab-pane label="订单详情" name="first">
                      <el-table
                        :data="hotelInfoList.slice( (currentPage - 1) * pagesize, currentPage * pagesize)" 
                        style="width: 100%"
                        border default-expand-all
                        v-loading="loading">
                        <el-table-column type="expand">
                          <template slot-scope="props">
                            <el-form label-position="left" inline class="demo-table-expand">
                              <el-form-item label="酒店：">
                                <span>{{ props.row.hotel}}</span>
                              </el-form-item>
                              <el-form-item label="房间类型：">
                                <span>{{ props.row.roomType }}</span>
                              </el-form-item>
                              <el-form-item label="入住日期：">
                                <span>{{ props.row.fromDate }}</span>
                              </el-form-item>
                              <el-form-item label="离店日期：">
                                <span>{{ props.row.toDate }}</span>
                              </el-form-item>
                              <el-form-item label="房间价格：">
                                <span>￥{{ props.row.totalPrice }}</span>
                              </el-form-item>
                              <el-form-item label="OTA：">
                                <span>{{ props.row.OTA }}</span>
                              </el-form-item>
                              <el-form-item label="state：">
                                  <span>{{ props.row.state }}</span>
                              </el-form-item>
                              <el-form-item label="comment：">
                                  <span>{{ props.row.comment}}</span>
                              </el-form-item>
                              <el-form-item label="score:">
                                  <span>{{ props.row.score}}分</span>
                              </el-form-item>
                            </el-form>
                          </template>
                        </el-table-column>
                        <el-table-column
                          label="酒店hash值"
                          prop="hash">
                        </el-table-column>
                        <el-table-column
                        label="订单价格">
                        <template slot-scope="scope">
                            <span>￥{{ scope.row.totalPrice }}</span>
                        </template>                       
                       </el-table-column>
                        <el-table-column label="点评订单">
                            <template slot-scope="scope">
                                <el-button type="danger" @click="gotoHotelComment(scope.$index,scope.row)">我要点评</el-button>  
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
                              :total="hotelInfoList.length">
                              </el-pagination>
                          </div>
                      </el-footer>
                    </el-tab-pane>
                    <el-tab-pane label="评论信息" name="second">
                        <!-- <el-row>
                            <el-col :span="8" v-for="item  in hotelCommentList" :key="index"  >
                              <el-card :body-style="{ padding: '0px' }">
                                <img src="../assets/images/hotel1.jpg" class="image">
                                <div style="padding: 14px;">
                                  <p>【评论内容】: {{item.content}}</p>
                                  <p>【下单时间】: {{item.time}}</p>
                                  <p>【评价打分】: {{item.score}}(1-5)</p>
                                </div>
                              </el-card>
                            </el-col>
                        </el-row> -->
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
    width: 100%;
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
      <script>
       import Header from '../components/Header';
       import Vue from 'vue';
        export default {
        name: 'HotelInfo',
        components: {
            Header
        },
          data(){
            return {
              currentPage: 1, //初始页
              pagesize: 5, 
              loading :false,
              activeName: 'first',
              count: '',
              addr:'',
              hotelInfoList: [],
              hotelCommentList: [],
              content:'',
              score:'',
              exist:'',
              txhash:'',
              flag:'',
            }
          },
          created() {
            this.getHotelOrderCount()
            
          },
          mounted(){
            this.loading = true;
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
            getHotelOrderCount() {
              this.addr = sessionStorage.getItem('addr')
              Vue.axios.get('http://47.102.216.199:3333' + '/hotel/count/' + JSON.parse(this.addr)).then((res) => {
                console.log(res.data)
                if(res.data.data !=  null){
                  this.count = res.data.data.count
                }
                
                this.getHotelOrderInfo()
                //this.getHotelOrdercomment()
              })
              
            },
            
            getHotelOrderInfo(){
              console.log(this.count)
              this.hotelInfoList = [];
              for(let i = 0;i<this.count ;i++){
                let hotelInfo;
                // let response = Vue.axios.get('http://47.102.216.199:3333' + '/hotel/' + JSON.parse(this.addr) + '/' + i);
                // if(response.data.data!=null){
                //   response.data.data.time = this.getDate(response.data.data.time)
                //   hotelInfo = response.data.data
                //   this.hotelInfoList.push(hotelInfo);
                // }
                Vue.axios.get('http://47.102.216.199:3333' + '/hotel/' + JSON.parse(this.addr) + '/' + i).then((res) => {
                    if(res.data.data !=  null){
                      res.data.data.time = this.getDate(res.data.data.time)
                      hotelInfo = res.data.data
                      this.hotelInfoList.push(hotelInfo);
                      //this.hotelInfoList.push(res.data.data)              
                      //console.log(this.getDate(res.data.data.time))
                    }
                })
                this.getHotelOrdercomment()
              }
              console.log(this.hotelInfoList)
            },

            gotoHotelComment(index,row){
              console.log(index)
              console.log(row)
              this.$router.push({
                name: 'HotelComment',
                params: {
                  index:index,
                }
              });
            },

            getHotelOrdercomment(){
              this.hotelCommentList = [];
              for(let i = 0;  i< this.count ;i++){
               Vue.axios.get('http://47.102.216.199:3333' + '/hotel/comment/' + JSON.parse(this.addr) + '/' + i).then((res) => {
                    if(res.data.data !=  null && res.data.data.exist == true){
                      // res.data.data.time = this.getDate(res.data.data.time)
                      // this.content = res.data.data.content
                      // this.score = res.data.data.score
                      // this.exist = res.data.data.exist
                      let info = this.hotelInfoList[i]
                      info['comment'] = res.data.data.content
                      info['score'] = res.data.data.score
                      console.log(info)
                      this.hotelInfoList[i] = info
                      //this.hotelCommentList.push(res.data.data)
                     
                    }else{
                      let info = this.hotelInfoList[i]
                      info['comment'] = '还未评价'
                      info['score'] = '未评分'
                      this.hotelInfoList[i] = info
                    }
                })
              }
              //this.commentHotelService() 
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
          },
          mounted () {

          }
        }
      </script>