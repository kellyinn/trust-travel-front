<template>
        <div id="main">
            <Header></Header>
            <el-divider></el-divider>
            <div class="hotel-comment">
              <div class="comment-content">
                <p class="comment-title">
                  对您的订单进行点评
                </p>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                  <el-form-item label="整体评价" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择评价分数" @change="selectGet">
                      <el-option v-for="(item,index) in rate" :key="index" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="旅行感受" prop="desc" >
                    <el-input  class="desc" type="textarea" v-model="ruleForm.desc" placeholder="快点贡献你的评价吧，对其他用户有很重要的参考价值~~"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">确认提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                  </el-form-item>
                </el-form>
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
      .hotel-comment{
                width: 100%;
               height: 500PX;
              }
              .comment-title{
                overflow-wrap: break-word !important;
                font-family: Circular, PingFang-SC, "Hiragino Sans GB", 微软雅黑, "Microsoft YaHei", "Heiti SC" !important;
                font-size: 32px !important;
                font-weight: 800 !important;
                line-height: 1.125em !important;
                color: #484848 !important;
                margin-bottom: 1rem !important;
              }
              .comment-content{
                padding: 0 100px
              }
              .desc{
                width: 40%;
                height: 30%;
              }
      </style>
      
      <script>
      import Vue from 'vue'
      import Header from '../components/Header.vue'
          export default {
            name: 'SceneComment',
            components: {
              Header
            },
            data() {
              return{
                ruleForm: {
                  region: '',
                  desc: ''
                },
                rules:{
                  region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                  ],
                  desc: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' }
                  ]
                },
                rate:[{"label":"糟糕","value":1},{"label":"差","value":2},{"label":"一般","value":3},{"label":"好","value":4},{"label":"非常好","value":5}],
                score:0,
                commentHash:'',
              }
            },
            methods: {
              //下拉框选中事件
            selectGet(vid){//这个vId也就是value值
            console.log(vid);
            let obj = {};
            obj = this.rate.find((item)=>{//这里的userList就是上面遍历的数据源
              return item.value === vid;//筛选出匹配数据
            });
            this.score = obj.value
            console.log(obj.value);//我这边的name就是对应label的
            },
            //提交表单
              submitForm(formName) {
              this.$refs[formName].validate((valid) => {
                if (valid) {
                  var addr = sessionStorage.getItem('addr')
                  addr = addr.replace("\"","").replace("\"","")
                  var index = this.$route.params.index
                  var commentForm = {
                    "addr":addr,
                    "index": index,
                    "content":this.ruleForm.desc,
                    "score": this.score
                  }
                  console.log(commentForm)
                  Vue.axios.post('http://47.102.216.199:3333' + '/scene/comment',commentForm,{Header:{ "Content-Type": "application/json"}}).then((res)=>{
                    console.log(res.data)
                    if(res.data.message == "success"){
                      this.commentHash = res.data.data.txHash
                      this.$message({
                        type: 'success',
                        message: '评论提交成功'
                      });
                      this.$router.push('/sceneInfo')
                      console.log(this.commentHash)
                    }
                  })
                } else {
                  console.log('error submit!!');
                  return false;
                }
              });
            },
            resetForm(formName) {
              this.$refs[formName].resetFields();
            }
            }
          }
      </script>