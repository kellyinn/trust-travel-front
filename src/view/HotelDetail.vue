<template>
    <div class="main">
      <Header></Header>
      <div class="content">
          <div class="img">
              <img src="this.img" alt="">
          </div>
          <div class="wrapper">
              <div class="nav">
                  <a href="javascript:;" class="active item">详情</a>
                  <a href="javascript:;" class="item">评价</a>
                  <a href="javascript:;" class="item">可订日期</a>
                  <a href="javascript:;" class="item">位置</a>
                  <a href="javascript:;" class="item">须知</a>
                  <a href="javascript:;" class="item">房东</a>
                </div>
          </div>
      </div>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
    import Header from '../components/Header';
    import Footer from '../components/Footer';
    import PopUp from '../components/PopUp';
    export default {
        name: 'HotelDetail',
       
        components: {Header, Footer, PopUp},
        data(){
          return{
            id:this.$route.params.id,
            detailInfoData: [],
          }
        },
        created:function(){
          this.getParams();
        },
        methods: {
          async getParams(){
            console.log(this.id)
            console.log(this.img)
            const {data} = await this.axios.get('http://47.94.249.31:8080/springTrip/'+ this.id)
            this.detailInfoData = data
            console.log(this.detailInfoData)
        },
        mounted () {
          this.getParams()
        }
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
              color: #000;
              &:hover{
                border-bottom: 2px solid #484848;
              }
            }
            .login{
              &:hover{
                border-bottom: 2px solid #484848;
              }
            }
          }
        }
        .content{
          .img-list{
            width: 100%;
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
                  height: 64px;
                  width: 64px;
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
                .goods-discount{
                  .discount-item{
                    margin-right: 5px;
                    font-size: 12px;
                    color: #767676;
                    .icon{
                      display: inline-block;
                      height: 12px;
                      width: 12px;
                      text-align: center;
                      line-height: 11px;
                      background-color:rgb(187, 187, 187);
                      color: #fff;
                      border-radius: 50%;
                      margin-right: 5px;
                    }
                    .active{
                      background-color: rgb(96, 182, 181);
                    }
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
      
  