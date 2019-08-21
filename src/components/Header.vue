<template>
  <div class="header clearfix">
    <div class="logo fl">
      <p class="iconfont"><span>TrustTravel</span><sub> based on block chain</sub><sup>TM</sup></p>
    </div>
    
    <nav class="nav fr">
      <el-button type="text" class="item" @click.native="tohotelinfo">酒店订单信息</el-button>
      <el-button type="text" class="item" @click.native="tosceneinfo">旅游订单信息</el-button>
      <el-button type="text" class="item" @click.native="logout">退出登录</el-button>
      <el-button type="text" class="login"><img src="../assets/images/user.jpg" alt=""></el-button>
    </nav>
  </div>
</template>

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
      tosceneinfo(){
        this.$router.push('/sceneInfo')
      },
      tohotelinfo(){
        this.$router.push('/hotelInfo')
      },
      logout(){
        sessionStorage.removeItem('addr')
        this.$router.push('/login')
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
  };
</script>

<style lang="less" scoped>
.header{
  position: relative;
  z-index: 9;
  height: 80px;
  line-height: 80px;
  .logo{
    width: 50%;
    height: 100%;
    p{ 
      color:  #F78282;     
      span{
        font-size: 30px;
        vertical-align:baseline;
        };
      sub { vertical-align:sub; font-size:14px;}; 
      sup { vertical-align:super;font-size:12px;}  
    }  
  }
  .nav{
    margin-right: 10px;
    .item{
      font-size: 16px;
      font-weight: bold;
      padding: 31px 10px;
      box-sizing: border-box;
      color:#F78282;

      &:hover{
        border-bottom: 2px solid #fff;
      }
    }
    .login{
      display: inline-block;
      margin-left: 10px;
      height: 78px;
      &:hover{
        border-bottom: 2px solid #fff;
      }
      img{
        vertical-align: middle;
        border: 2px solid #fff;
        border-radius: 50%;
        height: 28px;
        width: 28px;
      }
    }
  }
}
</style>
