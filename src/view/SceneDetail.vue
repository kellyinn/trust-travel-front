<template>
    <div class="main">
      <Header></Header>
      <el-divider></el-divider>
      <div class="content">
          <div class="wrapper">
            <div class="nav">
                  <a href="javascript:;" class="active item">详情</a>
                  <a href="javascript:;" class="item">评价</a>
                  <a href="javascript:;" class="item">可订日期</a>
                  <a href="javascript:;" class="item">位置</a>
            </div>
            <div class="info-wrap clearfix">
                <div class="goods-info fl">
                    <div class="goods">
                        <div class="room">
                            <span class="city">{{this.infoData.province}}</span>
                            <span class="room-desc">{{this.infoData.city}}</span>
                        </div> 
                        <h3 class="title">【{{this.infoData.name}}】{{this.infoData.roomDesc}}</h3>   
                        <div class="room-label">
                            <span class="iconfont icon">&#xe61e;<span class="text">{{this.infoData.title}}</span></span>
                        </div>
                        <div class="type">
                            <span>美丽景点</span>
                            <span>享受旅行</span>
                        </div>                    
                    </div>
                    <div class="img-list">
                            <img :src="this.infoData.imgUrl"></img>
                        </div>
                </div>
                <div class="order fl">
                    <div class="order-goods">
                        <div class="goods-price">
                            <span class="new-price">￥{{this.infoData.price}}/人</span>
                        </div>
                    </div>
                    <div class="input-wrap">
                            <div class="input-item">
                              <h6 class="input-title">日期</h6>
                              <div class="choice">
                                <el-date-picker
                                  v-model="value9"
                                  type="daterange"
                                  start-placeholder="开始日期"
                                  end-placeholder="结束日期"
                                  @change="changeTime"
                                >
                                </el-date-picker>
                              </div>
                            </div>
                            <div class="input-item">
                              <h6 class="input-title">出行人数</h6>
                              <div class="choice" @click="showNumber">
                                <span v-if="!this.count">1人</span>
                                <span v-if="this.count">{{this.count}}人</span>
                                <span v-if="this.babyAdd">,{{this.babyCount}}名婴幼儿</span>
                                <div class="number-select" v-if="this.showNumberselect">
                                  <ul>
                                    <li class="clearfix">
                                      <span class="fl first">成人</span>
                                      <div class="fr">
                                        <button class="btns" @click="reduce('adult')" :class="{'disabled': this.adultCount === 0}">-</button>
                                        <span class="count">{{this.adultCount}}</span>
                                        <button class="btns" @click="add('adult')">+</button>
                                      </div>
                                    </li>
                                    <li class="clearfix">
                                      <span class="fl">儿童<br><span class="year">2 - 12岁</span></span>
                                      <div class="fr">
                                        <button class="btns" @click="reduce('children')" :class="{'disabled': this.childrenCount === 0}">-</button>
                                        <span class="count">{{this.childrenCount}}</span>
                                        <button class="btns" @click="add('children')">+</button>
                                      </div>
                                    </li>
                                    <li class="clearfix">
                                      <span class="fl">婴儿<br><span class="year">2岁以下</span></span>
                                      <div class="fr info">
                                        <button class="btns" @click="reduce('baby')" :class="{'disabled': this.babyCount === 0}">-</button>
                                        <span class="count">{{this.babyCount}}</span>
                                        <button class="btns" @click="add('baby')">+</button>
                                      </div>
                                    </li>
                                    <li class="clearfix bottom">
                                      <a href="javascript:;" class="fl cancel" @click="cencel">取消</a>
                                      <a href="javascript:;" class="fr sure" @click.stop="sure">确定</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="order-subtotal">
                                    <div class="subtotal-item evenings-price clearfix">
                                      <div class="fl">
                                        <span>￥{{this.infoData.price}} x 1人</span>
                                      </div>
                                      <div class="fr"><span>￥{{this.infoData.price}}</span></div>
                                    </div>
                                    <div class="subtotal-item service clearfix">
                                      <div class="fl">
                                        <span>服务费：减免￥33</span>
                                        <span class="symbol">?</span>
                                      </div>
                                      <div class="fr"><span>￥0</span></div>
                                    </div>
                                    <div class="subtotal-item clearfix">
                                      <div class="fl total" >
                                        <span >总价</span>（节省￥33）
                                      </div>
                                      <div class="fr">
                                        <span class="total-price">￥{{this.infoData.price}}</span>
                                      </div>
                                    </div>
                                  </div>
                          </div>
                          <div class="apply">
                                <a href="javascript:;" @click="goToSceneOrder">申请预订</a>
                          </div>
                </div>
            </div>
          </div>
      </div>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
    import Header from '../components/Header';
    import Footer from '../components/Footer';
    import ImageList from '../components/ImageList';
    import MovePlusList from '../components/MovePlusList';
    import PopUp from '../components/PopUp';
    import { AMapManager } from 'vue-amap';
    let amapManager = new AMapManager();
    export default {
        name: 'SceneDetail',
        props: ['id'],  
        components: {Header, Footer, MovePlusList, PopUp},
        data(){
          return{
            price:0,
            province: "",
            city: "",
            name: "",
            ota: "",
            state: "",
           // id:this.$route.params.id,
            infoData: [],
            value9: '',
          showSelect: false,
          city: '',
          value6: '',
          count: 1,
          adultCount: 1,
          childrenCount: 0,
          babyCount: 0,
          babyAdd: null,
          showNumberselect: false,
          popshow: false,
          showRules: false,
          showCity: false,
          showAbout: false,
          timeArray: [],
          zoom: 12,
          center: [116.45967, 39.93703],
          amapManager,
          events: {
            init (map) {
              AMapUI.loadUI(['overlay/SimpleMarker'], function (SimpleMarker) {
                return new SimpleMarker({
                  map: map,
                  position: map.getCenter()
                });
              });
            }
          }
        };
        },
        methods: {
        changeTime () {
          let data = this.value9;
          for (let i = 0; i < data.length; i++) {
            let year = data[i].getFullYear();
            let month = data[i].getMonth() + 1;
            let date = data[i].getDate();
            let str = year + '年' + month + '月' + date + '日';
            this.timeArray.push(str);
          }
          // console.log(this.timeArray);
        },
        async getParams(){
            console.log(this.id)
            const {data} = await this.axios.get('http://47.94.249.31:8080/springTrip/'+ this.id)
            this.infoData = data
            console.log(this.infoData)
        },
        showNumber () {
          this.showNumberselect = true;
        },
        reduce (type) {
          // if (this.count >= 0) {
          //   this.count--;
          // }
          if (type === 'adult' && this.adultCount > 0) {
            this.adultCount--;
            this.count--;
          }
          if (type === 'children' && this.childrenCount > 0) {
            this.childrenCount--;
            this.count--;
          }
          if (type === 'baby' && this.babyCount > 0) {
            this.babyCount--;
            this.babyAdd--;
          }
        },
        add (type) {
          if (type === 'adult') {
            this.adultCount++;
            this.count++;
          }
          if (type === 'children') {
            this.childrenCount++;
            this.count++;
            // this.count += this.childrenCount;
          }
          if (type === 'baby') {
            this.babyCount++;
            this.babyAdd++;
          }
        },
        cencel () {
          this.adultCount = 0;
          this.childrenCount = 0;
          this.babyCount = 0;
          this.count = null;
          this.babyAdd = null;
        },
        sure () {
          this.showNumberselect = false;
        },
        goToSceneOrder () {
          this.$store.commit('addSceneOrderData', {
            data: this.infoData,
            adultCount: this.adultCount,
            childrenCount: this.childrenCount,
            babyCount: this.babyCount,
            startTime: this.timeArray[0],
            endTime: this.timeArray[1],
            price:this.price,
          });
          this.$router.push({
            name: 'SceneOrder'
          });
        },
        PopShow (str) {
          if (str === 'rules') {
            this.showRules = true;
            this.showCity = false;
            this.showAbout = false;
          }
          if (str === 'city') {
            this.showCity = true;
            this.showRules = false;
            this.showAbout = false;
          }
          if (str === 'about') {
            this.showAbout = true;
            this.showRules = false;
            this.showCity = false;
          }
          this.popshow = true;
          // alert(111);
        }
      },
        mounted () {
          this.getParams()
        }
    }
  </script>
  
  <style lang="less" scoped>
    .main{
      /*position: relative;*/
      /deep/ .header{
        background-color: #fff;
        /*border-bottom: 1px solid #e4e4e4;*/
        .logo{
          span{
            font-size: 30px;
            color: #FF5A5F;
          }
        }
        .nav{
          .item{
            &:hover{
              border-bottom: 2px solid #E4E4E4;
            }
          }       
        }
      }
      .content{
        .img-list{
          width: 100%;
          margin-top:10px;
        }
        .nav{
          height: 49px;
          line-height: 49px;
          .item:first-child{
            color: #484848;
            &:before{
              display: none;
            }
          }
          .item{
            font-size: 16px;
            font-weight: bolder;
            color: #008489;
            position: relative;
            margin-left: 8px;
            padding-left: 15px;
            &:before{
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              box-sizing: border-box;
              left: 0;
              display: inline-block;
              content: '';
              width: 4px;
              height: 4px;
              background-color: #000;
              border-radius: 50%;
            }
          }
        }
        .info-wrap{
          position: relative;
          /*font-size: 0;*/
          .goods-info{
            border-top: 1px solid #ccc;
            padding-top: 30px;
            /*display: inline-block;*/
            width: 58%;
            font-weight: bolder;
            /*height: 400px;*/
            /*background-color: deeppink;*/
            .goods{
              .room{
                font-size: 12px;
                color: rgb(57, 87, 106);
                font-weight: bolder;
                .city{
    
                }
                .room-desc{
                  position: relative;
                  margin-left: 5px;
                  padding-left: 10px;
                  border-top: none;
                  padding-top: 0;
                  &:before{
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    box-sizing: border-box;
                    left: 0;
                    display: inline-block;
                    content: '';
                    width: 4px;
                    height: 4px;
                    background-color: #484848;
                    border-radius: 50%;
                  }
                }
              }
              .title{
                margin-top: 5px;
                font-size: 32px;
                line-height: 35px;
                color: rgb(72, 72, 72);
              }
              .room-label{
                margin-top: 15px;
                margin-bottom: 20px;
                .icon{
                  display: inline-block;
                  font-size: 14px;
                  font-weight: normal;
                  margin-right: 10px;
                  .text{
                    padding-left: 10px;
                  }
                }
              }
              .type{
                padding: 0px 0 30px;
                border-bottom: 1px solid #ccc;
                span{
                  padding: 5px 8px;
                  border-radius: 10px;
                  font-size: 12px;
                }
                span:first-child{
                  background-color: rgb(234, 247, 234);
                  color: rgb(41, 110, 0);
                }
                span:last-child{
                  background-color: rgb(242, 242, 242);
                  color: rgb(72, 72, 72);
                }
              }
            }
            .landlord{
              margin-top: 30px;
              .landlord-img{
                height: 164px;
                width: 164px;
                border-radius: 50%;
                background-color: pink;
                vertical-align: middle;
              }
              .landlord-info{
                font-weight:bolder;
                font-size: 16px;
                color: rgb(72, 72, 72);
                padding: 10px;
                .contact{
                  margin-left: 10px;
                  color: #008489;
                }
                .text{
                  font-weight: bold;
                  font-size: 14px;
                }
              }
              .popup{
                margin-top: 20px;
                width:100%;
                background:rgb(248, 248, 248);
                padding:10px 20px;
                box-sizing: border-box;
                color: rgb(72, 72, 72);
                font-size: 16px;
                font-weight: normal;
                line-height: 25px;
                border-radius:4px;
                position:relative;
                /*top:30px;*/
                /*left:30px;*/
                /*border:1px solid #333;*/
                p{
                  display: none;
                  &:nth-of-type(1){
                    display: block;
                  }
                }
                .more{
                  display: inline-block;
                  margin-top: 15px;
                  color: rgb(0, 132, 137);
                  font-size: 16px;
                  font-weight: bolder;
                }
                span{
                  display:block;
                  width:0;
                  height:0;
                  /*border-width:0 10px 10px;*/
                  /*border-style:solid;*/
                  border-color:transparent transparent #333;
                  position:absolute;
                  top:-10px;
                  left:5%;
                  margin-left:-10px;
                  em{
                    display: block;
                    width: 0;
                    height: 0;
                    border-width: 0 23px 25px;
                    border-style: solid;
                    border-color: transparent transparent #f8f8f8;
                    position: absolute;
                    top: -5px;
                    left: 0px;
                  }
                }
              }
            }
            .room-desc{
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #ccc;
              .item{
                width: 136px;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-weight: normal;
                margin-right: 10px;
                .title{
                  font-weight: bolder;
                }
                .icon{
                  display: inline-block;
                  font-size: 24px;
                  margin-right: 5px;
                }
              }
            }
            .room-info{
              margin-top: 20px;
              border-top: 1px solid #ccc;
              padding: 32px 0;
              box-sizing: border-box;
              font-size: 16px;
              line-height: 35px;
              .title{
                display: inline-block;
                width: 136px;
                color: rgb(72, 72, 72);
                /*font-size: 16px;*/
              }
              .text{
                font-weight: normal;
              }
            }
            .room-tool{
              border-top: 1px solid #ccc;
              padding: 10px 0;
              .tool-item{
                width: 16.6666%;
                text-align: center;
                font-size: 14px;
                font-weight: normal;
                .icon{
                  font-size: 24px;
                }
                .text{
                  line-height: 31px;
                  font-size: 14px;
                  font-weight: bolder;
                  color: rgb(0, 132, 137);
                }
              }
            }
            .comment{
              border-top: 1px solid #ccc;
              padding-top: 60px;
              .comment-title{
                color: rgb(72, 72, 72);
                font-size: 24px;
                font-weight: bolder;
                margin-bottom: 30px;
              }
              .comment-number{
                margin-bottom: 20px;
                .number{
                  .icon-item{
                    color: #008489;
                  }
                  .count{
                    margin-left: 10px;
                    font-weight: normal;
                    font-size: 16px;
                  }
                }
                .search{
                  .box{
                    padding: 5px;
                    box-sizing: border-box;
                    width: 187px;
                    height: 35px;
                    line-height: 20px;
                    border: 1px solid #ccc;
                    text-align: center;
                    border-radius: 5px;
                    .box-icon{
                      width: 20%;
                      vertical-align: middle;
                    }
                    .box-text{
                      width: 80%;
                      border: none;
                    }
                  }
                }
              }
              .comment-type{
                .type-item{
                  width: 45%;
                  margin-right: 10%;
                  line-height: 34px;
                  .type-title{
                    font-size: 16px;
                    font-weight: 500;
                  }
                  .type-icon{
                    color: #008489;
                  }
                }
                .type-item:nth-child(even){
                  margin-right: 0;
                }
              }
              .comment-list{
                margin-top: 30px;
                .list-item{
                  border-top: 1px solid #ccc;
                  padding: 20px 0;
                  .name-img{
                    height: 48px;
                    width: 48px;
                    img{
                      display: inline-block;
                      background-color: pink;
                      height: 100%;
                      width: 100%;
                      border-radius: 50%;
                    }
                  }
                  .name-info{
                    width: 88%;
                    margin-left: 20px;
                    .name{
    
                    }
                    .date{
                      font-weight: normal;
                    }
                  }
                  .text{
                    margin-top: 60px;
                    font-size: 16px;
                    font-weight: normal;
                  }
                }
              }
              .other{
                padding-top: 24px;
                border-top: 1px solid #ccc;
                line-height: 32px;
                .page-wrap{
                  .page-item{
                    display: inline-block;
                    height: 32px;
                    width: 32px;
                    text-align: center;
                    line-height: 32px;
                    border: 1px solid rgb(0, 132, 137);
                    border-radius: 50%;
                    margin-right: 10px;
                    color: #008489;
                  }
                  .active{
                    background-color: #008489;
                    color: #fff;
                  }
                }
                span{
                  color: #008489;
                  font-size: 15px;
                  font-weight: bolder;
                }
              }
            }
          
          }
          .order{
            /*display: inline-block;*/
            margin-left: 5%;
            width: 36.5%;
            height: 570px;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 24px;
            box-sizing: border-box;
            .order-goods{
              .goods-price{
                .new-price{
                  font-size: 22px;
                  color: #008489;
                  font-weight: bolder;
                }
                .lod-price{
                  font-size: 14px;
                  color: #767676;
                }
                .evenings{
                  color: #484848;
                }
              }
              .goods-comment{
                font-size: 12px;
                .icon{
                  font-size: 12px;
                  color: #008489;
                }
                .count{
                  color: #484848;
                  font-weight: bolder;
                }
              }
            }
            .input-wrap{
              margin-top: 20px;
              border-top: 1px solid #ccc;
              padding-top: 20px;
              .input-item{
                margin-bottom: 10px;
                .input-title{
                  font-size: 12px;
                  font-weight: bolder;
                  margin-bottom: 5px;
                }
                .choice{
                  position: relative;
                  padding: 8px;
                  box-sizing: border-box;
                  border: 1px solid #ccc;
                  border-radius: 3px;
                  height: 40px;
                  /*line-height: 40px;*/
                  .number-select{
                    display: inline-block;
                    padding: 30px 20px 20px;
                    box-sizing: border-box;
                    position: absolute;
                    top: 39px;
                    left: 0px;
                    width: 100%;
                    box-shadow: 0 0px 2px rgba(0, 0, 0, 0.3);
                    background-color: #fff;
                    z-index: 99;
    
                    ul{
                      li{
                        font-size: 18px;
                        color: #484848;
                        font-weight: bold;
                        vertical-align: middle;
                        /*line-height: 25px;*/
                        height: 64px;
                        line-height: 1;
                        .first{
                          display: inline-block;
                          margin-top: 11px;
                        }
                        .year{
                          font-size: 14px;
                          font-weight: normal;
                        }
                        .count{
                          margin: 0 10px;
                        }
                        .btns{
                          border: 1px solid rgb(0, 132, 137);
                          height: 32px;
                          width: 32px;
                          text-align: center;
                          border-radius: 50%;
                          background-color: #fff;
                          font-size: 20px;
                        }
                        .disabled{
                          opacity: .5;
                        }
                      }
                      .bottom{
                        height: 30px;
                        line-height: 30px;
                        font-size: 16px;
                        font-weight: bold;
                        a{
                          &:hover{
                            text-decoration: underline;
                          }
                        }
                        .cancel{
                          color: #484848;
                        }
                        .sure{
                          color: rgb(0, 132, 137);
                        }
                      }
                    }
                  }
                }
              }
            }
            .order-subtotal{
              margin-top: 10px;
              .subtotal-item{
                border-bottom: 1px solid #EBEBEB ;
                padding: 5px;
    
                .discount,.discount-price{
                  color: #008489;
                }
                .total{
                  font-size: 14px;
                  font-weight: bolder;
                  color: #008489;
                  span{
                    color: #484848;
                  }
                }
                .total-price{
                  font-weight: bolder;
                  color: #484848;
                }
              }
              .symbol{
                display: inline-block;
                height: 15px;
                width: 15px;
                border-radius: 50%;
                line-height: 15px;
                text-align: center;
                border: 1px solid #484848;
              }
            }
            .apply{
              text-align: center;
              margin-top: 20px;
              a{
                display: inline-block;
                width: 100%;
                height: 45px;
                line-height: 45px;
                border-radius: 4px;
                font-size: 16px;
                font-weight: bolder;
                color: #fff;
                text-align: center;
                background-color: #ff5a5f;
                margin-bottom: 10px;
              }
              .text{
                font-size: 12px;
                font-weight: bolder;
              }
            }
          }
        }
        .live{
          margin-top: 100px;
          overflow: hidden;
          .live-title{
            font-size: 24px;
            font-weight: bolder;
            margin-bottom: 20px;
          }
        }
        .city-other{
          margin-top: 80px;
          .other-title{
            font-size: 24px;
            font-weight: bolder;
            margin-bottom: 30px;
          }
          .more{
            font-size: 16px;
            color: #767676;
            font-weight: normal;
            .more-title{
              font-weight: 600;
              color: #484848;
            }
          }
          .service-wrap{
            margin-top: 20px;
            .other-service{
              width: 30%;
              .service-item{
                a{
                  color: #767676;
                }
              }
            }
          }
        }
      }
      /deep/ .footer{
        margin-top: 40px;
      }
    }
    </style>
    <style>
      .el-input__inner {
        border: none;
        height: 24px;
      }
      .el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner {
        width: 310px;
      }
      .el-date-editor .el-range-separator {
         height: 34px!important;
      }
      .el-icon-date:before {
        content: "";
      }
    </style>
  