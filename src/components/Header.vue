<!-- <template>
  <el-row class="header clearfix" >

    <el-col :span="6" class="logo" :offset="1">
      <div class="title fl">
        <p class="en_title">TrustTravel<span> based on block chain</span>
        </p>  
      </div> 
      <div class="little_title">TM</div>
    </el-col>
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
 -->
 <template>
  <div class="header clearfix">
    <div class="logo fl">
      <p class="iconfont"><span>TrustTravel</span><sub> based on block chain</sub><sup>TM</sup></p>
    </div>
    
    <nav class="nav fr">
      <!-- <a :href="item.href" class="item" v-for="(item,index) in this.navData" :key="index">{{item.name}}</a> -->
      <el-button type="text" class="item" @click.native="tohotelinfo">酒店订单信息</el-button>
      <el-button type="text" class="item" @click.native="tosceneinfo">旅游订单信息</el-button>
      <el-button type="text" class="item" @click.native="logout">退出登录</el-button>
      <a href="javascript:;" class="login">
        <div>
          <img src="../assets/images/user.png" alt="">
        </div>
      </a>
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
