<template>
        <div class="section">
          <el-form 
            :model="ReginForm"
            ref="ReginForm"
            :rules="rule"
            class="regform"
            label-width="0">
      
            <div class="title">
                <p class="p1">TrustTravel</p>
                <p class="p2">欢迎来到TrustTravel</p>
            </div>
      
            <el-form-item prop="username">
              <el-input 
                type="text"
                v-model="ReginForm.username"
                placeholder="用户名">
              </el-input>
            </el-form-item>
      
            <el-form-item prop="password">
              <el-input 
                type="password"
                v-model="ReginForm.password"
                placeholder="密码">
              </el-input>
            </el-form-item>
      
            <el-form-item prop="confirmpassword">
              <el-input 
                type="password"
                v-model="ReginForm.confirmpassword"
                placeholder="确认密码">
              </el-input>
            </el-form-item>
      
            <el-form-item >
              <el-button 
                type="success" 
                class="submitBtn"
                round
                @click.native.prevent="submit"
                :loading="logining">
                注册
              </el-button>
              <el-button 
                type="primary"
                class="resetBtn" 
                round
                @click.native.prevent="reset">
                重置
              </el-button>
              <hr>
              <p>已经有账号，马上去<span class="to" @click="tologin">登录</span></p>
            </el-form-item>
          </el-form>
          <div class="header" >
              <div class="title fl">
                  <p class="en_title">TrustTravel<span> based on block chain</span>
                  </p>
                </div> 
                <div class="little_title">TM</div>
          </div>
          <img src="https://z1.muscache.cn/pictures/7eb620c8-89be-44fe-b467-8027a5cb3741.jpg" alt="" class="bgphoto">
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
        </div>
          
        
      </template>
      <script>
      import Vue from 'vue'
      export default {
        name:'Register',
        data () {
          const confirmpasswordCheck = (rule, value, callback) => {
            if (value === '') {
              return callback(new Error('密码是必须的'))
            } else if (value !== this.ReginForm.password) {
              return callback(new Error('两次输入的密码不一致'))
            } else {
              return callback()
            }
          }
          return {
            ReginForm: {
              username: '',
              password: '',
            },
            logining: false,
            rule: {
              username: [
                {
                  required: true,
                  max: 14,
                  min: 3,
                  message: '用户名是必须的，长度为3-14位',
                  trigger: 'blur'
                }
              ],
              password: [
                {
                  required: true,
                  message: '密码是必须的！',
                  trigger: 'blur'
                }
              ],
              confirmpassword: [
                {
                  required: true,
                  validator: confirmpasswordCheck,
                  trigger: 'blur'
                }
              ],
            }
          }
        },
        methods: {
          submit () {
            this.$refs.ReginForm.validate(valid => {
                if (valid) {
                    this.logining = true
                    // console.log('开始写入后台数据！')
                    // 这是要注册的数据
                    let ReginParams = {
                        username: this.ReginForm.username,
                        password: this.ReginForm.password,
                    }
                    Vue.axios.post('http://123.207.73.24:3333' + '/user',ReginParams).then((res) => {
                        console.log(res.data)
                        // 让注册按钮不要在转了
                        this.logining = false
                        // 让页面给个提示
                        if(res.data.message == "success"){
                          this.$message({
                            type: 'success',
                            message: '注册成功'
                          })     
                          this.$store.dispatch('login')
                          this.$router.push('/index')
                        }else if(res.data.message == "user existed"){
                          this.$message.error('用户已存在，请直接登录');
                          this.$router.push('/login')
                        }else {
                          this.$message.error('注册失败');
                        }
                    })
                }                   
            })    
        },
          reset () {
            this.$refs.ReginForm.resetFields()
          },
          tologin () {
            this.$router.push('/login')
          }
        }
      }
      </script>
      
      <style scoped>
         .bgphoto{
          height: 500px;
          width: 100%
        }
        .title .p1{
          text-align: center;
          font-size: 20px;
          color: #F07B7B
        }
        .title .p2{
          text-align: center;
          color: #009688;
          font-size: 14px;
          margin-top: 10px;
         
        }
      .regform {
        position:absolute;
        z-index: 10;
        margin: 9rem 9rem;
        width: 240px;
        height: 350px;
        background: #fff;
        /* box-shadow: 0 0 10px #B4BCCC; */
        padding: 30px 30px 0 30px;
        border-radius: 5px; 
      }
      .submitBtn {
        width: 50%;
      }
      .to {
        padding-top: 1rem;
        color: #67C23A;
        cursor: pointer;
      }
      .header{
        height: 100px;
      }
      .en_title{
    font-size: 30px;
    color: #F78282;
  }
  .little_title{
    color: #F78282;
  }
  span{
    font-size: 14px;
    color: #F78282;
  }
  .copyright{
        margin-top: 20px;
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
      </style>
      