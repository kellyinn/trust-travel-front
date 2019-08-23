<template>
  <div id="main">
    <Header></Header>
    <Swiper :data="this.swiperData"></Swiper>
    <SearchChoice :data="this.searchChoiceData"></SearchChoice>
    <div class="content">
      <div class="discount">
        <div class="wrapper">
          <h3 class="title">夏季特惠房源</h3>
          <p class="desc"></p>
          <div class="info">
            <CityList :data="this.discountData"></CityList>
          </div>
        </div>
      </div>
      <div class="spring-trip">
        <div class="wrapper">
          <h3 class="title">出游旅行</h3>
          <div class="info">
            <GoodsList :data="this.springTripData"></GoodsList>
          </div>
        </div>
      </div>
      <div class="service">
        <div class="wrapper clearfix">
          <div class="service-item clearfix fl">
            <div class="left-img fl">
              <img src="../assets/images/phone_icon.png" alt="">
            </div>
            <div class="right-text fl">
              <h5>24小时中文客服</h5>
              <span>400-841-0328</span>
            </div>
          </div>
          <div class="service-item clearfix fl">
            <div class="left-img fl">
              <img src="../assets/images/alipay_icon.png" alt="">
            </div>
            <div class="right-text fl">
              <h5>安全支付</h5>
              <span>支付宝付款已向中国用户开通</span>
            </div>
          </div>
          <div class="service-item clearfix fl">
            <div class="left-img fl">
              <img src="../assets/images/sesame.png" alt="">
            </div>
            <div class="right-text fl">
              <h5>芝麻信用</h5>
              <span>实名认证房东房客信息，真实可靠</span>
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
  import Swiper from '../components/Swiper';
  import SearchChoice from '../components/SearchChoice';
  import GoodsList from '../components/GoodsList';
  import CityList from '../components/CityList';
  import MovePlusList from '../components/MovePlusList';
  import Footer from '../components/Footer';

  export default {
    name: 'Index',
    components: {
      Header, Swiper, SearchChoice, GoodsList, CityList, MovePlusList,Footer,
    },
    data () {
      return {
        swiperData: [],
        searchChoiceData: [],
        discountData: [],
        springTripData: [],
       
      };
    },
    methods: {
      async getSwiperData () {
        const { data } = await this.axios.get('http://47.94.249.31:8080/advertise');
        this.swiperData = data;
         console.log(data);
      },
      async getDiscountData () {
        //const { data } = await this.axios.get('http://47.94.249.31:8080/discount');
        const data=[
          {
            id: 500,
            cityName: '上海',
            children: [
                {
                    id: 501,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/bea9f973-6d9d-4aa0-9819-bc38b3120768.jpg?aki_policy=large',
                    title: '【免服务费·歐陽—青年寓N0.2】迪士尼专线沿线/毗邻上海交大徐家汇/11､3､12号线环绕出行方便',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 294,
                    oldPrice: 368,
                    evaluate: 15,
                    cencel: false
                },
                {
                    id: 502,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/5e94bb4f-8b94-4061-8775-7f0c97a6061b.jpg?aki_policy=large',
                    title: '南京西路带阳台老洋房/人民广场外滩/星巴克工厂/美签/静安寺/上海展览中心/靠地铁市中心位置绝佳!',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 318,
                    oldPrice: 398,
                    evaluate: null,
                    cencel: false
                },
                {
                    id: 503,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/599856f4-32a5-45b8-9217-e75af3fa8f02.jpg?aki_policy=large',
                    title: '衡山墅·花园老洋房｡花园景观/独用露台/超级采光/著名衡山路酒吧街/法界区中心/地铁站5分钟',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 399,
                    oldPrice: 499,
                    evaluate: 5,
                    cencel: false
                },
                {
                    id: 504,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/e7b10979-5f64-42af-b947-9e5334092095.jpg?aki_policy=large',
                    title: '【雅筑】PS4/200寸巨幕投影/静安寺双线地铁/独门独院老洋房/Netflix/200M网速/蓝光',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 599,
                    oldPrice: 699,
                    evaluate: 113,
                    cencel: false
                },
                {
                    id: 505,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/7c7e214c-50e8-4963-a1db-e82bcef9abd5.jpg?aki_policy=large',
                    title: '【歐陽·免服务费】静安寺旁/老上海精致弄堂/市区核心清新日式套房/地铁零距离/虹桥枢纽半小时地铁直达',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 390,
                    oldPrice: 488,
                    evaluate: 150,
                    cencel: false
                },
                {
                    id: 506,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/8eca195d-3664-484c-878c-75fea7760273.jpg?aki_policy=large',
                    title: '(楚门的视界)观美景飘窗,躺着看东方明珠,城隍庙/人民广场/新天地/外滩都超级近 客人专用独立卫生间',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 316,
                    oldPrice: 395,
                    evaluate: 50,
                    cencel: false
                }
            ]
        },
        {
            id: 510,
            cityName: '北京',
            children: [
                {
                    id: 511,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/7b69ae36-518d-4859-9114-a90897242446.jpg?aki_policy=large',
                    title: '【美式印象派】超大落地窗ins风LOFT一居整租,人民大学 北理工 北大 北外 中关村,健身房 影院',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 273,
                    oldPrice: 341,
                    evaluate: 21,
                    cencel: false
                },
                {
                    id: 512,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/368351c5-06c7-4e22-9ab7-5400ba5f101a.jpg?aki_policy=large',
                    title: '【玛格丽特】闹中取静的温馨公寓,靠近三里屯soho,太古里,工人体育馆及东大桥/团结湖/呼家楼地铁站',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 343,
                    oldPrice: 492,
                    evaluate: null,
                    cencel: false
                },
                {
                    id: 513,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/2c09029e-d12b-4d9f-bb43-87507ee588aa.jpg?aki_policy=large',
                    title: '双井/国贸/治愈系小窝 /帝都闹市区眺望CBD夜景的INS风现代公寓',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 327,
                    oldPrice: 409,
                    evaluate: 5,
                    cencel: false
                },
                {
                    id: 514,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/7b1af1d7-4660-4cb0-babe-4e49c6d4ef9e.jpg?aki_policy=large',
                    title: 'CBD/国贸/大望路/百子湾/后现代城/双井/沿海北欧影音温馨一居室｡',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 294,
                    oldPrice: 368,
                    evaluate: 113,
                    cencel: false
                },
                {
                    id: 515,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/2be8daf5-714e-42c4-9626-6614b9b4421a.jpg?aki_policy=large',
                    title: '｢早春特惠|Victoria公寓｣三里屯复古法式浪漫Cozy/国贸CBD/ 团结湖',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 350,
                    oldPrice: 438,
                    evaluate: 150,
                    cencel: false
                },
                {
                    id: 516,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/795bac05-f103-441a-95b0-e252c6f155e7.jpg?aki_policy=large',
                    title: '什刹海独门独户老北京胡同2居2大床 步行去后海恭王府 3分钟步行到地铁站 带阳光房秋千 巨幕投影',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 582,
                    oldPrice: 728,
                    evaluate: 50,
                    cencel: false
                }
            ]
        },
        {
            id: 520,
            cityName: '重庆',
            children: [
                {
                    id: 501,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/bea9f973-6d9d-4aa0-9819-bc38b3120768.jpg?aki_policy=large',
                    title: '【免服务费·歐陽—青年寓N0.2】迪士尼专线沿线/毗邻上海交大徐家汇/11､3､12号线环绕出行方便',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 294,
                    oldPrice: 368,
                    evaluate: 15,
                    cencel: false
                },
                {
                    id: 502,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/5e94bb4f-8b94-4061-8775-7f0c97a6061b.jpg?aki_policy=large',
                    title: '南京西路带阳台老洋房/人民广场外滩/星巴克工厂/美签/静安寺/上海展览中心/靠地铁市中心位置绝佳!',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 318,
                    oldPrice: 398,
                    evaluate: null,
                    cencel: false
                },
                {
                    id: 503,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/599856f4-32a5-45b8-9217-e75af3fa8f02.jpg?aki_policy=large',
                    title: '衡山墅·花园老洋房｡花园景观/独用露台/超级采光/著名衡山路酒吧街/法界区中心/地铁站5分钟',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 399,
                    oldPrice: 499,
                    evaluate: 5,
                    cencel: false
                },
                {
                    id: 504,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/e7b10979-5f64-42af-b947-9e5334092095.jpg?aki_policy=large',
                    title: '【雅筑】PS4/200寸巨幕投影/静安寺双线地铁/独门独院老洋房/Netflix/200M网速/蓝光',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 599,
                    oldPrice: 699,
                    evaluate: 113,
                    cencel: false
                },
                {
                    id: 505,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/7c7e214c-50e8-4963-a1db-e82bcef9abd5.jpg?aki_policy=large',
                    title: '【歐陽·免服务费】静安寺旁/老上海精致弄堂/市区核心清新日式套房/地铁零距离/虹桥枢纽半小时地铁直达',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 390,
                    oldPrice: 488,
                    evaluate: 150,
                    cencel: false
                },
                {
                    id: 506,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/8eca195d-3664-484c-878c-75fea7760273.jpg?aki_policy=large',
                    title: '(楚门的视界)观美景飘窗,躺着看东方明珠,城隍庙/人民广场/新天地/外滩都超级近 客人专用独立卫生间',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 316,
                    oldPrice: 395,
                    evaluate: 50,
                    cencel: false
                }
            ]
        },
        {
            id: 530,
            cityName: '广州',
            children: [
                {
                    id: 511,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/7b69ae36-518d-4859-9114-a90897242446.jpg?aki_policy=large',
                    title: '【美式印象派】超大落地窗ins风LOFT一居整租,人民大学 北理工 北大 北外 中关村,健身房 影院',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 273,
                    oldPrice: 341,
                    evaluate: 21,
                    cencel: false
                },
                {
                    id: 512,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/368351c5-06c7-4e22-9ab7-5400ba5f101a.jpg?aki_policy=large',
                    title: '【玛格丽特】闹中取静的温馨公寓,靠近三里屯soho,太古里,工人体育馆及东大桥/团结湖/呼家楼地铁站',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 343,
                    oldPrice: 492,
                    evaluate: null,
                    cencel: false
                },
                {
                    id: 513,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/2c09029e-d12b-4d9f-bb43-87507ee588aa.jpg?aki_policy=large',
                    title: '双井/国贸/治愈系小窝 /帝都闹市区眺望CBD夜景的INS风现代公寓',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 327,
                    oldPrice: 409,
                    evaluate: 5,
                    cencel: false
                },
                {
                    id: 514,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/7b1af1d7-4660-4cb0-babe-4e49c6d4ef9e.jpg?aki_policy=large',
                    title: 'CBD/国贸/大望路/百子湾/后现代城/双井/沿海北欧影音温馨一居室｡',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 294,
                    oldPrice: 368,
                    evaluate: 113,
                    cencel: false
                },
                {
                    id: 515,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/2be8daf5-714e-42c4-9626-6614b9b4421a.jpg?aki_policy=large',
                    title: '｢早春特惠|Victoria公寓｣三里屯复古法式浪漫Cozy/国贸CBD/ 团结湖',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 350,
                    oldPrice: 438,
                    evaluate: 150,
                    cencel: false
                },
                {
                    id: 516,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/795bac05-f103-441a-95b0-e252c6f155e7.jpg?aki_policy=large',
                    title: '什刹海独门独户老北京胡同2居2大床 步行去后海恭王府 3分钟步行到地铁站 带阳光房秋千 巨幕投影',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 582,
                    oldPrice: 728,
                    evaluate: 50,
                    cencel: false
                }
            ]
        },
        {
            id: 540,
            cityName: '西安',
            children: [
                {
                    id: 501,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/bea9f973-6d9d-4aa0-9819-bc38b3120768.jpg?aki_policy=large',
                    title: '【免服务费·歐陽—青年寓N0.2】迪士尼专线沿线/毗邻上海交大徐家汇/11､3､12号线环绕出行方便',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 294,
                    oldPrice: 368,
                    evaluate: 15,
                    cencel: false
                },
                {
                    id: 502,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/5e94bb4f-8b94-4061-8775-7f0c97a6061b.jpg?aki_policy=large',
                    title: '南京西路带阳台老洋房/人民广场外滩/星巴克工厂/美签/静安寺/上海展览中心/靠地铁市中心位置绝佳!',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 318,
                    oldPrice: 398,
                    evaluate: null,
                    cencel: false
                },
                {
                    id: 503,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/599856f4-32a5-45b8-9217-e75af3fa8f02.jpg?aki_policy=large',
                    title: '衡山墅·花园老洋房｡花园景观/独用露台/超级采光/著名衡山路酒吧街/法界区中心/地铁站5分钟',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 399,
                    oldPrice: 499,
                    evaluate: 5,
                    cencel: false
                },
                {
                    id: 504,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/e7b10979-5f64-42af-b947-9e5334092095.jpg?aki_policy=large',
                    title: '【雅筑】PS4/200寸巨幕投影/静安寺双线地铁/独门独院老洋房/Netflix/200M网速/蓝光',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 599,
                    oldPrice: 699,
                    evaluate: 113,
                    cencel: false
                },
                {
                    id: 505,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/7c7e214c-50e8-4963-a1db-e82bcef9abd5.jpg?aki_policy=large',
                    title: '【歐陽·免服务费】静安寺旁/老上海精致弄堂/市区核心清新日式套房/地铁零距离/虹桥枢纽半小时地铁直达',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 390,
                    oldPrice: 488,
                    evaluate: 150,
                    cencel: false
                },
                {
                    id: 506,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/8eca195d-3664-484c-878c-75fea7760273.jpg?aki_policy=large',
                    title: '(楚门的视界)观美景飘窗,躺着看东方明珠,城隍庙/人民广场/新天地/外滩都超级近 客人专用独立卫生间',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 316,
                    oldPrice: 395,
                    evaluate: 50,
                    cencel: false
                }
            ]
        },
        {
            id: 550,
            cityName: '南京',
            children: [
                {
                    id: 511,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/7b69ae36-518d-4859-9114-a90897242446.jpg?aki_policy=large',
                    title: '【美式印象派】超大落地窗ins风LOFT一居整租,人民大学 北理工 北大 北外 中关村,健身房 影院',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 273,
                    oldPrice: 341,
                    evaluate: 21,
                    cencel: false
                },
                {
                    id: 512,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/368351c5-06c7-4e22-9ab7-5400ba5f101a.jpg?aki_policy=large',
                    title: '【玛格丽特】闹中取静的温馨公寓,靠近三里屯soho,太古里,工人体育馆及东大桥/团结湖/呼家楼地铁站',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 343,
                    oldPrice: 492,
                    evaluate: null,
                    cencel: false
                },
                {
                    id: 513,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/2c09029e-d12b-4d9f-bb43-87507ee588aa.jpg?aki_policy=large',
                    title: '双井/国贸/治愈系小窝 /帝都闹市区眺望CBD夜景的INS风现代公寓',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 327,
                    oldPrice: 409,
                    evaluate: 5,
                    cencel: false
                },
                {
                    id: 514,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/7b1af1d7-4660-4cb0-babe-4e49c6d4ef9e.jpg?aki_policy=large',
                    title: 'CBD/国贸/大望路/百子湾/后现代城/双井/沿海北欧影音温馨一居室｡',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 294,
                    oldPrice: 368,
                    evaluate: 113,
                    cencel: false
                },
                {
                    id: 515,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/2be8daf5-714e-42c4-9626-6614b9b4421a.jpg?aki_policy=large',
                    title: '｢早春特惠|Victoria公寓｣三里屯复古法式浪漫Cozy/国贸CBD/ 团结湖',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 350,
                    oldPrice: 438,
                    evaluate: 150,
                    cencel: false
                },
                {
                    id: 516,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/795bac05-f103-441a-95b0-e252c6f155e7.jpg?aki_policy=large',
                    title: '什刹海独门独户老北京胡同2居2大床 步行去后海恭王府 3分钟步行到地铁站 带阳光房秋千 巨幕投影',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 582,
                    oldPrice: 728,
                    evaluate: 50,
                    cencel: false
                }
            ]
        },
        {
            id: 560,
            cityName: '杭州',
            children: [
                {
                    id: 501,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/bea9f973-6d9d-4aa0-9819-bc38b3120768.jpg?aki_policy=large',
                    title: '【免服务费·歐陽—青年寓N0.2】迪士尼专线沿线/毗邻上海交大徐家汇/11､3､12号线环绕出行方便',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 294,
                    oldPrice: 368,
                    evaluate: 15,
                    cencel: false
                },
                {
                    id: 502,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/5e94bb4f-8b94-4061-8775-7f0c97a6061b.jpg?aki_policy=large',
                    title: '南京西路带阳台老洋房/人民广场外滩/星巴克工厂/美签/静安寺/上海展览中心/靠地铁市中心位置绝佳!',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 318,
                    oldPrice: 398,
                    evaluate: null,
                    cencel: false
                },
                {
                    id: 503,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/599856f4-32a5-45b8-9217-e75af3fa8f02.jpg?aki_policy=large',
                    title: '衡山墅·花园老洋房｡花园景观/独用露台/超级采光/著名衡山路酒吧街/法界区中心/地铁站5分钟',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 399,
                    oldPrice: 499,
                    evaluate: 5,
                    cencel: false
                },
                {
                    id: 504,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/e7b10979-5f64-42af-b947-9e5334092095.jpg?aki_policy=large',
                    title: '【雅筑】PS4/200寸巨幕投影/静安寺双线地铁/独门独院老洋房/Netflix/200M网速/蓝光',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 599,
                    oldPrice: 699,
                    evaluate: 113,
                    cencel: false
                },
                {
                    id: 505,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/7c7e214c-50e8-4963-a1db-e82bcef9abd5.jpg?aki_policy=large',
                    title: '【歐陽·免服务费】静安寺旁/老上海精致弄堂/市区核心清新日式套房/地铁零距离/虹桥枢纽半小时地铁直达',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 390,
                    oldPrice: 488,
                    evaluate: 150,
                    cencel: false
                },
                {
                    id: 506,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/8eca195d-3664-484c-878c-75fea7760273.jpg?aki_policy=large',
                    title: '(楚门的视界)观美景飘窗,躺着看东方明珠,城隍庙/人民广场/新天地/外滩都超级近 客人专用独立卫生间',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 316,
                    oldPrice: 395,
                    evaluate: 50,
                    cencel: false
                }
            ]
        },
        {
            id: 570,
            cityName: '厦门',
            children: [
                {
                    id: 511,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/7b69ae36-518d-4859-9114-a90897242446.jpg?aki_policy=large',
                    title: '【美式印象派】超大落地窗ins风LOFT一居整租,人民大学 北理工 北大 北外 中关村,健身房 影院',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 273,
                    oldPrice: 341,
                    evaluate: 21,
                    cencel: false
                },
                {
                    id: 512,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/368351c5-06c7-4e22-9ab7-5400ba5f101a.jpg?aki_policy=large',
                    title: '【玛格丽特】闹中取静的温馨公寓,靠近三里屯soho,太古里,工人体育馆及东大桥/团结湖/呼家楼地铁站',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 343,
                    oldPrice: 492,
                    evaluate: null,
                    cencel: false
                },
                {
                    id: 513,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/2c09029e-d12b-4d9f-bb43-87507ee588aa.jpg?aki_policy=large',
                    title: '双井/国贸/治愈系小窝 /帝都闹市区眺望CBD夜景的INS风现代公寓',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 327,
                    oldPrice: 409,
                    evaluate: 5,
                    cencel: false
                },
                {
                    id: 514,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/7b1af1d7-4660-4cb0-babe-4e49c6d4ef9e.jpg?aki_policy=large',
                    title: 'CBD/国贸/大望路/百子湾/后现代城/双井/沿海北欧影音温馨一居室｡',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 294,
                    oldPrice: 368,
                    evaluate: 113,
                    cencel: false
                },
                {
                    id: 515,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/2be8daf5-714e-42c4-9626-6614b9b4421a.jpg?aki_policy=large',
                    title: '｢早春特惠|Victoria公寓｣三里屯复古法式浪漫Cozy/国贸CBD/ 团结湖',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 350,
                    oldPrice: 438,
                    evaluate: 150,
                    cencel: false
                },
                {
                    id: 516,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/795bac05-f103-441a-95b0-e252c6f155e7.jpg?aki_policy=large',
                    title: '什刹海独门独户老北京胡同2居2大床 步行去后海恭王府 3分钟步行到地铁站 带阳光房秋千 巨幕投影',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 582,
                    oldPrice: 728,
                    evaluate: 50,
                    cencel: false
                }
            ]
        },
        {
            id: 580,
            cityName: '台湾',
            children: [
                {
                    id: 501,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/bea9f973-6d9d-4aa0-9819-bc38b3120768.jpg?aki_policy=large',
                    title: '【免服务费·歐陽—青年寓N0.2】迪士尼专线沿线/毗邻上海交大徐家汇/11､3､12号线环绕出行方便',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 294,
                    oldPrice: 368,
                    evaluate: 15,
                    cencel: false
                },
                {
                    id: 502,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/5e94bb4f-8b94-4061-8775-7f0c97a6061b.jpg?aki_policy=large',
                    title: '南京西路带阳台老洋房/人民广场外滩/星巴克工厂/美签/静安寺/上海展览中心/靠地铁市中心位置绝佳!',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 318,
                    oldPrice: 398,
                    evaluate: null,
                    cencel: false
                },
                {
                    id: 503,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/599856f4-32a5-45b8-9217-e75af3fa8f02.jpg?aki_policy=large',
                    title: '衡山墅·花园老洋房｡花园景观/独用露台/超级采光/著名衡山路酒吧街/法界区中心/地铁站5分钟',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 399,
                    oldPrice: 499,
                    evaluate: 5,
                    cencel: false
                },
                {
                    id: 504,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/e7b10979-5f64-42af-b947-9e5334092095.jpg?aki_policy=large',
                    title: '【雅筑】PS4/200寸巨幕投影/静安寺双线地铁/独门独院老洋房/Netflix/200M网速/蓝光',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 599,
                    oldPrice: 699,
                    evaluate: 113,
                    cencel: false
                },
                {
                    id: 505,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/7c7e214c-50e8-4963-a1db-e82bcef9abd5.jpg?aki_policy=large',
                    title: '【歐陽·免服务费】静安寺旁/老上海精致弄堂/市区核心清新日式套房/地铁零距离/虹桥枢纽半小时地铁直达',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 1,
                    price: 390,
                    oldPrice: 488,
                    evaluate: 150,
                    cencel: false
                },
                {
                    id: 506,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/8eca195d-3664-484c-878c-75fea7760273.jpg?aki_policy=large',
                    title: '(楚门的视界)观美景飘窗,躺着看东方明珠,城隍庙/人民广场/新天地/外滩都超级近 客人专用独立卫生间',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 316,
                    oldPrice: 395,
                    evaluate: 50,
                    cencel: false
                }
            ]
        }
        ]
        this.discountData = data;
        // console.log(data);
      },
      async getSpringTripData () {
       //const { data } = await this.axios.get('http://47.94.249.31:8080/springTrip');
       const data =  [
        {
            id: 100,
            imgUrl: 'https://z1.muscache.cn/im/pictures/3b14f0f8-77aa-4b79-af2b-7a631f91a845.jpg?aki_policy=large',
            title: '在春天里闻花香，听风来，晒太阳',
            titleDesc: '别让春暖花开成为只在照片上见过的风景。我们精选了 6 个国内赏花地，在这里你可以扑向春天，沉浸在大自然间，感受生机。',
            roomDesc: '国内赏花地推荐',
            roomNumber: null,
            price: 400,          
            evaluate: false,
            cencel: false,
            province:'北京市',
            city:'北京市',
            name:'延庆',
            ota:'飞猪',
            flag:1
        },
        {
            id: 101,
            imgUrl: 'https://z1.muscache.cn/im/pictures/1e4b4764-05d1-4425-9e26-3279a62f5c00.jpg?aki_policy=large',
            title: '避开人潮，来九州探索自然乐趣',
            titleDesc: '这里有悠久的历史，也有电影中的乡野景色。泡温泉，赏樱花，亲近自然，放松一下吧。',
            roomDesc: '赏樱目的地推荐',
            roomNumber: null,
            price: 5999,
            oldPrice: false,
            evaluate: false,
            cencel: false,
            province:'日本',
            city:'九州岛',
            name:'长崎',
            ota:'去哪儿',
            flag:1
        },
        {
            id: 102,
            imgUrl: 'https://z1.muscache.cn/im/pictures/610bc35c-382a-4f72-a72a-6bdb14cc0d57.jpg?aki_policy=large',
            title: '去北海道，抓住樱花季的尾巴',
            titleDesc: '4 月底，北海道春天才刚刚到来。不必匆忙追赶樱前线，悠然享受冰雪溶化后生机盎然的北方岛屿。',
            roomDesc: '赏樱目的地推荐',
            roomNumber: null,
            price: 500,
            oldPrice: false,
            evaluate: false,
            cencel: false,
            province:'日本',
            city:'北海道',
            name:'札幌',
            ota:'飞猪',
            flag:1
        },
    ];
        this.springTripData = data;
        // console.log(data);
      },
    },
    mounted () {
      this.getSwiperData();
      this.getDiscountData();
      this.getSpringTripData();
    }
  };
</script>

<style lang="less" scoped>
#main{

  .content{
    .recent{
      margin-top: 30px;
      h3{
        font-size: 16px;
        margin-bottom: 10px;
      }
      .info{
        
      }
    }
    .discount{
      color: #484848;
      .title{
        margin-top: 40px;
        font-size: 24px;
      }
      .desc{
        font-size: 16px;
        line-height: 16px;
        margin-bottom: 25px;
      }
      .info{

      }
    }
    .spring-trip{
      .title{
        margin-top: 40px;
        font-size: 24px;
        margin-bottom: 20px;
      }
      .info{
        /*width: 50px;*/
        /*height: 50px;*/
        /*background-color: red;*/
      }
    }
    .hot-place{
      .title{
        margin-top: 40px;
        font-size: 24px;
        margin-bottom: 20px;
      }
    }
    .service{
      margin: 35px 0 60px;
      .service-item{
        width: 33.3333%;
        /*background-color: pink;*/
        position: relative;
        .left-img{
          height: 36px;
          width: 36px;
          line-height: 1;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          img{
            width: 100%;
            height: 100%;
          }
        }
        .right-text{
          margin-left: 61px;
          h5{
            font-size: 15px;
            font-weight: 800;
            color: #484848;
            margin-bottom: 5px;
          }
        }
      }
    }
    .travel-story{
      .title{
        /*margin-top: 40px;*/
        font-size: 24px;
        margin-bottom: 20px;
      }
      .story-item{
        position: relative;
        padding: 5px;
        box-sizing: border-box;
        width: 25%;
        margin-bottom: 15px;
        .big-img{
          height: 246px;
          /*background-color: pink;*/
          margin-bottom: 5px;
          position: relative;
          img{
            width: 100%;
            height: 100%;
            border-radius: 5px;
          }
          .type{
            display: inline-block;
            position: absolute;
            font-size: 12px;
            color: #484848;
            font-weight: bolder;
            right: 5%;
            bottom: 5%;
            width: 40px;
            height: 26px;
            line-height: 26px;
            text-align: center;
            background-color: #fff;
            border-radius: 5px;
          }
          .good-icon{
            position: absolute;
            font-size: 33px;
            top: 0;
            right: 3%;
            color: #fff;
          }
        }
        .text{
          margin-bottom: 5px;
          .city{
            font-size: 14px;
            font-weight: bolder;
            color: rgb(72, 72, 72);
          }
          .desc{
            font-size: 14px;
            color: #484848;
            font-weight: 400;
          }
        }
        .icon{
          .name-img{
            display: inline-block;
            height: 24px;
            width: 24px;
            /*background-color: deeppink;*/
            margin-right: 10px;
            img{
              height: 100%;
              width: 100%;
              border-radius: 50%;
            }
          }
          .good,.comment{
            margin-right: 10px;
            font-size: 14px;
            color: rgb(118, 118, 118);
          }
        }
      }
      .showtotal{
        font-size: 18px;
        font-weight: bolder;
        color: rgb(0, 132, 137);

        &:hover{
          text-decoration: underline;
        }
      }
    }
    .airbnb-plus{
      color: #484848;
      .title{
        margin-top: 40px;
        font-size: 24px;
      }
      .desc{
        font-size: 16px;
        line-height: 16px;
        margin-bottom: 25px;
      }
      .wrapper{
        overflow: hidden;

      }
      .showtotal{
        font-size: 18px;
        font-weight: bolder;
        color: rgb(0, 132, 137);

        &:hover{
          text-decoration: underline;
        }
      }
    }
    .experience{
      .title{
        margin-top: 40px;
        font-size: 24px;
      }
      .showtotal{
        font-size: 18px;
        font-weight: bolder;
        color: rgb(0, 132, 137);

        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
