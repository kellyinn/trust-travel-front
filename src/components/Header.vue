<template>
  <el-row class="header clearfix" >
    <!-- 左边logo -->
    <el-col :span="6" class="logo" :offset="1">
      <div class="title fl">
        <p class="en_title">TrustTravel<span> based on block chain</span>
        </p>
        <p class="cn_title">全球住宿预订</p>
       
      </div> 
      <div class="little_title">TM</div>
    </el-col>
    <!-- 右边登录注册区域 -->
    <!-- <el-col :span="3" :offset="14" class="user">
       
       <el-button-group v-if="!addr">
        <el-button type="text" class="button" >反馈 <el-divider direction="vertical"></el-divider> </el-button>
        <el-button type="text" class="login" @click.native="tologin" > 登录 <el-divider direction="vertical"></el-divider></el-button>
        <el-button type="text" class="button" @click.native="toregister" > 注册</el-button>
      </el-button-group>
      <div v-else>
        <el-dropdown>
              <img class="avatar" src="../assets/images/user.jpg" alt="">       
          <el-dropdown-menu slot="dropdown">
          
            <el-dropdown-item @click.native="tomy" disabled>用户：</el-dropdown-item> 
            <el-dropdown-item @click.native="toorderinfo" divided>订单信息</el-dropdown-item>
            <el-dropdown-item @click.native="logout" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>     
    </el-col> -->
    <div v-if="!addr">
      <el-col :span="4" :offset="12" >      
          <el-menu  class="el-menu-demo" mode="horizontal" text-color="#000">
              <el-menu-item index="1">反馈</el-menu-item>
              <el-menu-item index="2" class="login" @click.native="tologin">登录</el-menu-item>
              <el-menu-item index="3" class="button" @click.native="toregister">注册</el-menu-item>           
            </el-menu>
      </el-col>
    </div>
    <div v-else-if = "addr">
          <el-col :span="8" :offset="8" >
              <el-menu class="el-menu-demo" mode="horizontal"text-color="#000">
                      <el-menu-item index="1" @click.native="toindex">首页</el-menu-item>
                      <el-menu-item index="2" @click.native="tohotelinfo">酒店订单信息</el-menu-item>
                      <el-menu-item index="3" @click.native="tosceneinfo">旅游订单信息</el-menu-item>
                      <el-submenu index="3">
                          <template slot="title"><img class="avatar" src="../assets/images/user.jpg" alt=""></template>
                          <!-- <el-menu-item index ='1-1' @click.native="tomy" ></el-menu-item> -->
                          <el-menu-item index ="3-1" @click.native="logout" divided>退出登录</el-menu-item>
                     </el-submenu>                                          
                    </el-menu>
          </el-col>  
    </div>  
  </el-row>
</template>
<style lang="less" scoped>
    .header{
      /* position: relative; */
      height: 100px; 
    }
    .en_title{
        font-size: 30px;
        color: #F78282;
      }
      .cn_title{
        font-size: 30px;
        color:black;
      }
      .little_title{
        color: #F78282;
      }
      span{
        font-size: 14px;
        color: #F78282;
      }
      .avatar {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      
    }
    </style>
<script>
  export default {
    name: 'Header',
    props: {
      data: {
        logining: true,
        type: Array,
        default () {
          return [];
        }
      }
    },
    methods: {
      toregister () {
        this.$router.push('/register')
      },
      tologin () {
        this.$router.push('/login')
      },
      tosceneinfo(){
        this.$router.push('/sceneInfo')
      },
      tohotelinfo(){
        this.$router.push('/hotelInfo')
      },
      toindex(){
        this.$router.push('/index')
      },
      logout(){
        this.$router.push('/index')
        sessionStorage.removeItem('addr')
        //sessionStorage.removeItem('username')
        location.reload()
        
      }
    },
     // 获取store的User数据
    computed: {
      addr () {
        //return this.$store.state.addr
        return sessionStorage.getItem('addr')
        //console.log(this.$store.state.addr)
      },
      // username (){
      //   return sessionStorage.getItem('username')
      // }
    }
  }
</script>

