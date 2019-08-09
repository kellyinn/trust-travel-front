<template>
  <div id="main">
    <Header></Header>
    <Swiper :data="this.swiperData"></Swiper>
    <SearchChoice :data="this.searchChoiceData"></SearchChoice>
    <div class="content">
      <div class="recent">
        <div class="wrapper">
          <h3>最近浏览过的</h3>
          <div class="info">
            <GoodsList :data="this.recentBrowseData"></GoodsList>
          </div>
        </div>
      </div>
      <div class="discount">
        <div class="wrapper">
          <h3 class="title">春季特惠房源</h3>
          <p class="desc">低至 8 折，可叠加使用礼券</p>
          <div class="info">
            <CityList :data="this.discountData"></CityList>
          </div>
        </div>
      </div>
      <div class="spring-trip">
        <div class="wrapper">
          <h3 class="title">春季出行灵感集</h3>
          <div class="info">
            <GoodsList :data="this.springTripData"></GoodsList>
          </div>
        </div>
      </div>
      <div class="hot-place">
        <div class="wrapper">
          <h3 class="title">热门目的地</h3>
          <div class="info">
            <CityList :data="this.hotPlaceData"></CityList>
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
      <div class="travel-story">
        <div class="wrapper">
          <h3 class="title">精彩旅行故事</h3>
          <div class="story">
            <ul class="clearfix">
              <li class="story-item fl" v-for="(item,index) in this.travelStoryData" :key="index">
                <a href="javascript:;">
                  <div class="big-img">
                    <img :src="item.imgUrl" alt="" class="">
                    <span class="type">{{item.type}}</span>
                    <span class="iconfont good-icon">&#xe62b;</span>
                  </div>
                  <div class="text">
                    <span class="city">{{item.city}}</span>
                    <span class="desc">{{item.title}}</span>
                  </div>
                  <div class="icon">
                    <div class="name-img">
                      <img :src="item.nameImgUrl" alt="" >
                    </div>
                    <span class="iconfont good">&#xe62b;&nbsp;{{item.good}}</span>
                    <span class="iconfont comment">&#xe612;&nbsp;{{item.comment}}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <a href="javascript:;" class="showtotal">显示全部 ></a>
        </div>
      </div>
      <div class="airbnb-plus">
        <div class="wrapper">
          <h3 class="title">TrustTravelPlus已在上海推出</h3>
          <p class="desc">品质与设计均保证的精选房源系列</p>
          <div class="info">
            <MovePlusList :data="this.airbnbPlusData"></MovePlusList>
          </div>
          <a href="javascript:;" class="showtotal">显示全部 (448) ></a>
        </div>
      </div>
      <div class="experience">
        <div class="wrapper">
          <h3 class="title">高分体验</h3>
          <div class="info">
            <Experience :data="this.experienceData"></Experience>
          </div>
          <a href="javascript:;" class="showtotal">显示所有体验 ></a>
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
  import Experience from '../components/Experience';
  import Footer from '../components/Footer';
  export default {
    name: 'Index',
    components: {
      Header, Swiper, SearchChoice, GoodsList, CityList, MovePlusList, Experience, Footer
    },
    data () {
      return {
        swiperData: [],
        searchChoiceData: [],
        recentBrowseData: [],
        discountData: [],
        springTripData: [],
        hotPlaceData: [],
        travelStoryData: [],
        airbnbPlusData: [],
        experienceData: []
      };
    },
    methods: {
      async getSwiperData () {
        //const { data } = await this.axios.get('/api/advertise');
        const data =  [
        {
            href: '#',
            imgUrl: 'https://z1.muscache.cn/pictures/55a5bf2f-99fc-4a62-96de-8e3235353466.jpg',
            title: '48 小时踏青玩个够',
            subheading: '领取礼券 扑向春天',
            description: '挑个周末逃离恒温都市，让初春叫醒你',
            btnName: '进入优惠专场'
        },
        {
            href: '#',
            imgUrl: 'https://z1.muscache.cn/pictures/b42cd76b-edec-4f88-8dfe-3f20933c7a60.jpg',
            title: '在花香与暖阳里',
            subheading: '发现国内赏花目的地',
            description: '趁着好天气，与明媚的春日来张同框合影',
            btnName: '查看合集'
        },
        {
            href: '#',
            imgUrl: 'https://z1.muscache.cn/pictures/30c10f87-af4b-45e5-8b6d-1a95c88fd5dd.jpg',
            title: '五月北海道',
            subheading: '自由自在 悠然赏樱',
            description: '抓住樱花季的尾巴，特色民宿等你选',
            btnName: '查看合集'
        }
    ];
        this.swiperData = data;
         console.log(data);
      },
      async getSearchChoiceData () {
        //const { data } = await this.axios.get('/api/cityData');
        const data = [
        {
            title: '国内热门城市',
            children: [
                {
                    href: '#',
                    city: '北京'
                },
                {
                    href: '#',
                    city: '上海'
                },
                {
                    href: '#',
                    city: '成都'
                },
                {
                    href: '#',
                    city: '重庆'
                },
                {
                    href: '#',
                    city: '杭州'
                },
                {
                    href: '#',
                    city: '厦门'
                },
                {
                    href: '#',
                    city: '广州'
                },
                {
                    href: '#',
                    city: '西安'
                }
            ]
        },
        {
            title: '国际/港澳台热门城市',
            children: [
                {
                    href: '#',
                    city: '大阪'
                },
                {
                    href: '#',
                    city: '东京'
                },
                {
                    href: '#',
                    city: '台湾'
                },
                {
                    href: '#',
                    city: '香港'
                },
                {
                    href: '#',
                    city: '京都'
                },
                {
                    href: '#',
                    city: '曼谷'
                },
                {
                    href: '#',
                    city: '首尔'
                },
                {
                    href: '#',
                    city: '清迈'
                }
            ]
        },
        {
            title: '春季好去处',
            children: [
                {
                    href: '#',
                    city: '深圳'
                },
                {
                    href: '#',
                    city: '南京'
                },
                {
                    href: '#',
                    city: '武汉'
                },
                {
                    href: '#',
                    city: '长沙'
                },
                {
                    href: '#',
                    city: '苏州'
                },
                {
                    href: '#',
                    city: '吉隆坡'
                },
                {
                    href: '#',
                    city: '福州'
                },
                {
                    href: '#',
                    city: '宁波'
                }
            ]
        }
    ];
        this.searchChoiceData = data;
        // console.log(data);
      },
      async getRecentBrowseData () {
        //const { data } = await this.axios.get('/api/recentBrowse');
        const data = [
        {
            imgUrl: 'https://z1.muscache.cn/im/pictures/717fef15-755d-4d52-b9c4-ed12e2300db5.jpg?aki_policy=large',
            title: '#2 SHANGHIGH HOME * 外滩边的创意空间 坐在窗口享受外滩风景',
            titleDesc: null,
            roomDesc: '整套公寓',
            roomNumber: 2,
            price: 450,
            oldPrice: false,
            evaluate: false,
            cencel: false
        },
        {
            imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/46f370ae-9cec-45ed-aa0d-a2f492782457.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
            title: '前往迪斯尼十分方便的极简北欧风情公寓',
            titleDesc: null,
            roomDesc: '整件公寓',
            roomNumber: 2,
            price: 275,
            oldPrice: false,
            evaluate: false,
            cencel: false
        },
        {
            imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/b163aa99-8f3e-45f7-80c1-c1dd267b72c9.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
            title: '前往迪斯尼十分方便的极简北欧风情公寓',
            titleDesc: null,
            roomDesc: '整套房子',
            roomNumber: 1,
            price: 396,
            oldPrice: false,
            evaluate: false,
            cencel: false
        }
    ];
        this.recentBrowseData = data;
        // console.log(data);
      },
      async getDiscountData () {
        //const { data } = await this.axios.get('/api/discount');
        const data =  [
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
    ];
        this.discountData = data;
        // console.log(data);
      },
      async getSpringTripData () {
       // const { data } = await this.axios.get('/api/springTrip');
       const data =  [
        {
            imgUrl: 'https://z1.muscache.cn/im/pictures/3b14f0f8-77aa-4b79-af2b-7a631f91a845.jpg?aki_policy=large',
            title: '在春天里闻花香，听风来，晒太阳',
            titleDesc: '别让春暖花开成为只在照片上见过的风景。我们精选了 6 个国内赏花地，在这里你可以扑向春天，沉浸在大自然间，感受生机。',
            roomDesc: '国内赏花目的地推荐',
            roomNumber: null,
            price: false,
            oldPrice: false,
            evaluate: false,
            cencel: false
        },
        {
            imgUrl: 'https://z1.muscache.cn/im/pictures/1e4b4764-05d1-4425-9e26-3279a62f5c00.jpg?aki_policy=large',
            title: '避开人潮，来九州探索自然乐趣',
            titleDesc: '这里有悠久的历史，也有电影中的乡野景色。泡温泉，赏樱花，亲近自然，放松一下吧。',
            roomDesc: '赏樱目的地推荐',
            roomNumber: null,
            price: false,
            oldPrice: false,
            evaluate: false,
            cencel: false
        },
        {
            imgUrl: 'https://z1.muscache.cn/im/pictures/610bc35c-382a-4f72-a72a-6bdb14cc0d57.jpg?aki_policy=large',
            title: '去北海道，抓住樱花季的尾巴',
            titleDesc: '4 月底，北海道春天才刚刚到来。不必匆忙追赶樱前线，悠然享受冰雪溶化后生机盎然的北方岛屿。',
            roomDesc: '赏樱目的地推荐',
            roomNumber: null,
            price: false,
            oldPrice: false,
            evaluate: false,
            cencel: false
        }
    ];
        this.springTripData = data;
        // console.log(data);
      },
      async getHotPlaceData () {
       // const { data } = await this.axios.get('/api/hotPlace');
       const data = [
        {
            id: 700,
            cityName: '成都',
            children: [
                {
                    id: 701,
                    imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/958673c6-63a8-46f6-9cd3-1476e20d492f.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
                    title: 'I Fine Stay-华章 衡复文化区独门花园loft 古典新中式 FFC',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 439,
                    oldPrice: null,
                    evaluate: 361,
                    cencel: false
                },
                {
                    id: 702,
                    imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/373eddbd-c5ea-414a-8683-2065671ca4c0.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
                    title: '在后现代风格的阳光别墅享受自然逸趣',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 268,
                    oldPrice: null,
                    evaluate: 185,
                    cencel: false
                },
                {
                    id: 703,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/717fef15-755d-4d52-b9c4-ed12e2300db5.jpg?aki_policy=large',
                    title: '#2 SHANGHIGH HOME * 外滩边的创意空间 坐在窗口享受外滩风景',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 2,
                    price: 420,
                    oldPrice: null,
                    evaluate: 376,
                    cencel: true
                },
                {
                    id: 704,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/d4089962-20c5-4939-95c5-e7b43d431f4b.jpg?aki_policy=large',
                    title: '｢同区最低｣FC法 租界独门独用精品LOFT 胡歌成长地经典石库门淮海路复兴路思南路衡山路田子坊附近',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 254,
                    oldPrice: null,
                    evaluate: 209,
                    cencel: true
                },
                {
                    id: 705,
                    imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/db7e13ba-1ce5-4e21-904e-735272f7e27b.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
                    title: '复式老洋房(贵妃浴缸､巨幕影院)近新天地,地铁直达迪士尼',
                    titleDesc: null,
                    roomDesc: '整套房子',
                    roomNumber: 2,
                    price: 489,
                    oldPrice: null,
                    evaluate: 273,
                    cencel: false
                },
                {
                    id: 706,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/9d8e6aea-edb1-4686-b09f-0bab6312b4e0.jpg?aki_policy=large',
                    title: 'SPECTACULAR Views of Yuyuan, Bund private Balcony',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 322,
                    oldPrice: null,
                    evaluate: 334,
                    cencel: true
                }
            ]
        },
        {
            id: 710,
            cityName: '重庆',
            children: [
                {
                    id: 711,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/d1316854-23e4-4db8-9f13-2a4cc3b835a6.jpg?aki_policy=large',
                    title: '漫漫|拿铁 楼下就是太古里春熙路/市中心双地铁/家庭影院/北欧风精致套房',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 2,
                    price: 228,
                    oldPrice: null,
                    evaluate: 173,
                    cencel: true
                },
                {
                    id: 712,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/931c8ced-a8d0-4aa2-8b8c-138938006feb.jpg?aki_policy=large',
                    title: 'MOHUANG|对面就是太古里春熙路和地铁站 下楼就吃小龙坎',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 178,
                    oldPrice: null,
                    evaluate: 185,
                    cencel: true
                },
                {
                    id: 713,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/7b83396b-ffbe-4a06-9014-86262d73400e.jpg?aki_policy=large',
                    title: '【茶花民宿】春熙路IFS太古里地铁234号线安静北欧小清新风格',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 2,
                    price: 168,
                    oldPrice: null,
                    evaluate: 150,
                    cencel: true
                },
                {
                    id: 714,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/1870d7f9-839c-4c53-a1eb-d9eafb8d8d8f.jpg?aki_policy=large',
                    title: '【老鸟家】宽窄巷子/文殊院/春熙路太古里/武侯祠锦里-日式榻榻米房间  metro line4',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 167,
                    oldPrice: null,
                    evaluate: 133,
                    cencel: true
                },
                {
                    id: 715,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/910ef0d0-0871-436e-aef8-2a44d1af66a7.jpg?aki_policy=large',
                    title: '【和の町】春熙/太古里/兰桂坊 传统日式-和服主题-metro line2/3',
                    titleDesc: null,
                    roomDesc: '整套房子',
                    roomNumber: 2,
                    price: 236,
                    oldPrice: null,
                    evaluate: 22,
                    cencel: true
                },
                {
                    id: 716,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/dd91d52a-90a5-437f-8ab7-a154af864485.jpg?aki_policy=large',
                    title: '留白 清新北欧风 靠近地铁站 地铁3､4号线市二医院站可到达 走路可到太古里 春熙路哦',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 180,
                    oldPrice: null,
                    evaluate: 100,
                    cencel: true
                }
            ]
        },
        {
            id: 720,
            cityName: '北京',
            children: [
                {
                    id: 701,
                    imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/958673c6-63a8-46f6-9cd3-1476e20d492f.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
                    title: 'I Fine Stay-华章 衡复文化区独门花园loft 古典新中式 FFC',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 439,
                    oldPrice: null,
                    evaluate: 361,
                    cencel: false
                },
                {
                    id: 702,
                    imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/373eddbd-c5ea-414a-8683-2065671ca4c0.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
                    title: '在后现代风格的阳光别墅享受自然逸趣',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 268,
                    oldPrice: null,
                    evaluate: 185,
                    cencel: false
                },
                {
                    id: 703,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/717fef15-755d-4d52-b9c4-ed12e2300db5.jpg?aki_policy=large',
                    title: '#2 SHANGHIGH HOME * 外滩边的创意空间 坐在窗口享受外滩风景',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 2,
                    price: 420,
                    oldPrice: null,
                    evaluate: 376,
                    cencel: true
                },
                {
                    id: 704,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/d4089962-20c5-4939-95c5-e7b43d431f4b.jpg?aki_policy=large',
                    title: '｢同区最低｣FC法 租界独门独用精品LOFT 胡歌成长地经典石库门淮海路复兴路思南路衡山路田子坊附近',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 254,
                    oldPrice: null,
                    evaluate: 209,
                    cencel: true
                },
                {
                    id: 705,
                    imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/db7e13ba-1ce5-4e21-904e-735272f7e27b.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
                    title: '复式老洋房(贵妃浴缸､巨幕影院)近新天地,地铁直达迪士尼',
                    titleDesc: null,
                    roomDesc: '整套房子',
                    roomNumber: 2,
                    price: 489,
                    oldPrice: null,
                    evaluate: 273,
                    cencel: false
                },
                {
                    id: 706,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/9d8e6aea-edb1-4686-b09f-0bab6312b4e0.jpg?aki_policy=large',
                    title: 'SPECTACULAR Views of Yuyuan, Bund private Balcony',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 322,
                    oldPrice: null,
                    evaluate: 334,
                    cencel: true
                }
            ]
        },
        {
            id: 730,
            cityName: '杭州',
            children: [
                {
                    id: 711,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/d1316854-23e4-4db8-9f13-2a4cc3b835a6.jpg?aki_policy=large',
                    title: '漫漫|拿铁 楼下就是太古里春熙路/市中心双地铁/家庭影院/北欧风精致套房',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 2,
                    price: 228,
                    oldPrice: null,
                    evaluate: 173,
                    cencel: true
                },
                {
                    id: 712,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/931c8ced-a8d0-4aa2-8b8c-138938006feb.jpg?aki_policy=large',
                    title: 'MOHUANG|对面就是太古里春熙路和地铁站 下楼就吃小龙坎',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 178,
                    oldPrice: null,
                    evaluate: 185,
                    cencel: true
                },
                {
                    id: 713,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/7b83396b-ffbe-4a06-9014-86262d73400e.jpg?aki_policy=large',
                    title: '【茶花民宿】春熙路IFS太古里地铁234号线安静北欧小清新风格',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 2,
                    price: 168,
                    oldPrice: null,
                    evaluate: 150,
                    cencel: true
                },
                {
                    id: 714,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/1870d7f9-839c-4c53-a1eb-d9eafb8d8d8f.jpg?aki_policy=large',
                    title: '【老鸟家】宽窄巷子/文殊院/春熙路太古里/武侯祠锦里-日式榻榻米房间  metro line4',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 167,
                    oldPrice: null,
                    evaluate: 133,
                    cencel: true
                },
                {
                    id: 715,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/910ef0d0-0871-436e-aef8-2a44d1af66a7.jpg?aki_policy=large',
                    title: '【和の町】春熙/太古里/兰桂坊 传统日式-和服主题-metro line2/3',
                    titleDesc: null,
                    roomDesc: '整套房子',
                    roomNumber: 2,
                    price: 236,
                    oldPrice: null,
                    evaluate: 22,
                    cencel: true
                },
                {
                    id: 716,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/dd91d52a-90a5-437f-8ab7-a154af864485.jpg?aki_policy=large',
                    title: '留白 清新北欧风 靠近地铁站 地铁3､4号线市二医院站可到达 走路可到太古里 春熙路哦',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 180,
                    oldPrice: null,
                    evaluate: 100,
                    cencel: true
                }
            ]
        },
        {
            id: 740,
            cityName: '曼谷',
            children: [
                {
                    id: 701,
                    imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/958673c6-63a8-46f6-9cd3-1476e20d492f.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
                    title: 'I Fine Stay-华章 衡复文化区独门花园loft 古典新中式 FFC',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 439,
                    oldPrice: null,
                    evaluate: 361,
                    cencel: false
                },
                {
                    id: 702,
                    imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/373eddbd-c5ea-414a-8683-2065671ca4c0.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
                    title: '在后现代风格的阳光别墅享受自然逸趣',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 268,
                    oldPrice: null,
                    evaluate: 185,
                    cencel: false
                },
                {
                    id: 703,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/717fef15-755d-4d52-b9c4-ed12e2300db5.jpg?aki_policy=large',
                    title: '#2 SHANGHIGH HOME * 外滩边的创意空间 坐在窗口享受外滩风景',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 2,
                    price: 420,
                    oldPrice: null,
                    evaluate: 376,
                    cencel: true
                },
                {
                    id: 704,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/d4089962-20c5-4939-95c5-e7b43d431f4b.jpg?aki_policy=large',
                    title: '｢同区最低｣FC法 租界独门独用精品LOFT 胡歌成长地经典石库门淮海路复兴路思南路衡山路田子坊附近',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 254,
                    oldPrice: null,
                    evaluate: 209,
                    cencel: true
                },
                {
                    id: 705,
                    imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/db7e13ba-1ce5-4e21-904e-735272f7e27b.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
                    title: '复式老洋房(贵妃浴缸､巨幕影院)近新天地,地铁直达迪士尼',
                    titleDesc: null,
                    roomDesc: '整套房子',
                    roomNumber: 2,
                    price: 489,
                    oldPrice: null,
                    evaluate: 273,
                    cencel: false
                },
                {
                    id: 706,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/9d8e6aea-edb1-4686-b09f-0bab6312b4e0.jpg?aki_policy=large',
                    title: 'SPECTACULAR Views of Yuyuan, Bund private Balcony',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 322,
                    oldPrice: null,
                    evaluate: 334,
                    cencel: true
                }
            ]
        },
        {
            id: 750,
            cityName: '东京',
            children: [
                {
                    id: 711,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/d1316854-23e4-4db8-9f13-2a4cc3b835a6.jpg?aki_policy=large',
                    title: '漫漫|拿铁 楼下就是太古里春熙路/市中心双地铁/家庭影院/北欧风精致套房',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 2,
                    price: 228,
                    oldPrice: null,
                    evaluate: 173,
                    cencel: true
                },
                {
                    id: 712,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/931c8ced-a8d0-4aa2-8b8c-138938006feb.jpg?aki_policy=large',
                    title: 'MOHUANG|对面就是太古里春熙路和地铁站 下楼就吃小龙坎',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 178,
                    oldPrice: null,
                    evaluate: 185,
                    cencel: true
                },
                {
                    id: 713,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/7b83396b-ffbe-4a06-9014-86262d73400e.jpg?aki_policy=large',
                    title: '【茶花民宿】春熙路IFS太古里地铁234号线安静北欧小清新风格',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 2,
                    price: 168,
                    oldPrice: null,
                    evaluate: 150,
                    cencel: true
                },
                {
                    id: 714,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/1870d7f9-839c-4c53-a1eb-d9eafb8d8d8f.jpg?aki_policy=large',
                    title: '【老鸟家】宽窄巷子/文殊院/春熙路太古里/武侯祠锦里-日式榻榻米房间  metro line4',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 167,
                    oldPrice: null,
                    evaluate: 133,
                    cencel: true
                },
                {
                    id: 715,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/910ef0d0-0871-436e-aef8-2a44d1af66a7.jpg?aki_policy=large',
                    title: '【和の町】春熙/太古里/兰桂坊 传统日式-和服主题-metro line2/3',
                    titleDesc: null,
                    roomDesc: '整套房子',
                    roomNumber: 2,
                    price: 236,
                    oldPrice: null,
                    evaluate: 22,
                    cencel: true
                },
                {
                    id: 716,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/dd91d52a-90a5-437f-8ab7-a154af864485.jpg?aki_policy=large',
                    title: '留白 清新北欧风 靠近地铁站 地铁3､4号线市二医院站可到达 走路可到太古里 春熙路哦',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 180,
                    oldPrice: null,
                    evaluate: 100,
                    cencel: true
                }
            ]
        },
        {
            id: 760,
            cityName: '巴黎',
            children: [
                {
                    id: 701,
                    imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/958673c6-63a8-46f6-9cd3-1476e20d492f.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
                    title: 'I Fine Stay-华章 衡复文化区独门花园loft 古典新中式 FFC',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 439,
                    oldPrice: null,
                    evaluate: 361,
                    cencel: false
                },
                {
                    id: 702,
                    imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/373eddbd-c5ea-414a-8683-2065671ca4c0.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
                    title: '在后现代风格的阳光别墅享受自然逸趣',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 268,
                    oldPrice: null,
                    evaluate: 185,
                    cencel: false
                },
                {
                    id: 703,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/717fef15-755d-4d52-b9c4-ed12e2300db5.jpg?aki_policy=large',
                    title: '#2 SHANGHIGH HOME * 外滩边的创意空间 坐在窗口享受外滩风景',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 2,
                    price: 420,
                    oldPrice: null,
                    evaluate: 376,
                    cencel: true
                },
                {
                    id: 704,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/d4089962-20c5-4939-95c5-e7b43d431f4b.jpg?aki_policy=large',
                    title: '｢同区最低｣FC法 租界独门独用精品LOFT 胡歌成长地经典石库门淮海路复兴路思南路衡山路田子坊附近',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 254,
                    oldPrice: null,
                    evaluate: 209,
                    cencel: true
                },
                {
                    id: 705,
                    imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/db7e13ba-1ce5-4e21-904e-735272f7e27b.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
                    title: '复式老洋房(贵妃浴缸､巨幕影院)近新天地,地铁直达迪士尼',
                    titleDesc: null,
                    roomDesc: '整套房子',
                    roomNumber: 2,
                    price: 489,
                    oldPrice: null,
                    evaluate: 273,
                    cencel: false
                },
                {
                    id: 706,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/9d8e6aea-edb1-4686-b09f-0bab6312b4e0.jpg?aki_policy=large',
                    title: 'SPECTACULAR Views of Yuyuan, Bund private Balcony',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 322,
                    oldPrice: null,
                    evaluate: 334,
                    cencel: true
                }
            ]
        },
        {
            id: 770,
            cityName: '纽约',
            children: [
                {
                    id: 711,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/d1316854-23e4-4db8-9f13-2a4cc3b835a6.jpg?aki_policy=large',
                    title: '漫漫|拿铁 楼下就是太古里春熙路/市中心双地铁/家庭影院/北欧风精致套房',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 2,
                    price: 228,
                    oldPrice: null,
                    evaluate: 173,
                    cencel: true
                },
                {
                    id: 712,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/931c8ced-a8d0-4aa2-8b8c-138938006feb.jpg?aki_policy=large',
                    title: 'MOHUANG|对面就是太古里春熙路和地铁站 下楼就吃小龙坎',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 178,
                    oldPrice: null,
                    evaluate: 185,
                    cencel: true
                },
                {
                    id: 713,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/7b83396b-ffbe-4a06-9014-86262d73400e.jpg?aki_policy=large',
                    title: '【茶花民宿】春熙路IFS太古里地铁234号线安静北欧小清新风格',
                    titleDesc: null,
                    roomDesc: '整套公寓',
                    roomNumber: 2,
                    price: 168,
                    oldPrice: null,
                    evaluate: 150,
                    cencel: true
                },
                {
                    id: 714,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/1870d7f9-839c-4c53-a1eb-d9eafb8d8d8f.jpg?aki_policy=large',
                    title: '【老鸟家】宽窄巷子/文殊院/春熙路太古里/武侯祠锦里-日式榻榻米房间  metro line4',
                    titleDesc: null,
                    roomDesc: '整间阁楼',
                    roomNumber: 1,
                    price: 167,
                    oldPrice: null,
                    evaluate: 133,
                    cencel: true
                },
                {
                    id: 715,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/910ef0d0-0871-436e-aef8-2a44d1af66a7.jpg?aki_policy=large',
                    title: '【和の町】春熙/太古里/兰桂坊 传统日式-和服主题-metro line2/3',
                    titleDesc: null,
                    roomDesc: '整套房子',
                    roomNumber: 2,
                    price: 236,
                    oldPrice: null,
                    evaluate: 22,
                    cencel: true
                },
                {
                    id: 716,
                    imgUrl: 'https://z1.muscache.cn/im/pictures/dd91d52a-90a5-437f-8ab7-a154af864485.jpg?aki_policy=large',
                    title: '留白 清新北欧风 靠近地铁站 地铁3､4号线市二医院站可到达 走路可到太古里 春熙路哦',
                    titleDesc: null,
                    roomDesc: '独立房间',
                    roomNumber: 1,
                    price: 180,
                    oldPrice: null,
                    evaluate: 100,
                    cencel: true
                }
            ]
        }
    ];
        this.hotPlaceData = data;
        // console.log(data);
      },
      async getTravelStoryData () {
        //const { data } = await this.axios.get('/api/travelStory');
        const data = [
        {
            imgUrl: 'https://z1.muscache.cn/im/pictures/13a303c7-daf2-464c-8753-c125fcc89f54.jpg?aki_policy=x_large',
            type: '房源',
            city: '上海',
            title: '寻觅那无所不在的【家】',
            nameImgUrl: 'https://z1.muscache.cn/im/pictures/user/500072a6-217c-4ba8-ab0d-97cd442bee71.jpg?aki_policy=profile_tiny',
            good: 167,
            comment: 29
        },
        {
            imgUrl: 'https://z1.muscache.cn/im/pictures/d2185b7a-c3e1-4f70-850a-dd103775a4b8.jpg?aki_policy=x_large',
            type: '店铺',
            city: '上海',
            title: '艺术家陈幼坚的私人展厅里都有什么？',
            nameImgUrl: 'https://z1.muscache.cn/im/pictures/user/6fbbbec7-2e9e-415e-aecd-44c96cc6c887.jpg?aki_policy=profile_tiny',
            good: 19,
            comment: 4
        },
        {
            imgUrl: 'https://z1.muscache.cn/im/pictures/5833019a-a481-4be0-88c2-7903686b882c.jpg?aki_policy=x_large',
            type: '美食',
            city: '上海',
            title: '在剧院包厢中品一杯酒红丝绒，一秒爱上极简新主张',
            nameImgUrl: 'https://z1.muscache.cn/im/pictures/08258f67-b7bf-4a84-b6a3-b98f133d81eb.jpg?aki_policy=profile_tiny',
            good: 78,
            comment: 3
        },
        {
            imgUrl: 'https://z1.muscache.cn/im/pictures/9e1bd8cf-ef72-4b5e-ba3c-d3e996464dc9.jpg?aki_policy=x_large_portrait',
            type: '店铺',
            city: '上海',
            title: '屡获大奖的如恩设计研究室的家居买手店——设计共和·公社',
            nameImgUrl: 'https://z1.muscache.cn/im/pictures/user/628c8be6-e6a6-45dd-a258-6a1308f57b6a.jpg?aki_policy=profile_tiny',
            good: 42,
            comment: 4
        },
        {
            imgUrl: 'https://z1.muscache.cn/im/pictures/df49cfce-c73e-4ba9-8dd1-62160dbb4939.jpg?aki_policy=x_large',
            type: '房源',
            city: '上海',
            title: '游乐场？家的另一种打开方式！',
            nameImgUrl: 'https://z1.muscache.cn/im/pictures/3765f7e2-6d9a-4d9b-986c-ad6dd5f2a156.jpg?aki_policy=profile_tiny',
            good: 111,
            comment: 13
        },
        {
            imgUrl: 'https://z1.muscache.cn/im/pictures/9109e4d3-05a3-4ba0-a6e7-d2205e4132dc.jpg?aki_policy=x_large',
            type: '房源',
            city: '上海',
            title: '忘掉高楼大厦，扎进上海的弄堂里寻找接地气的魔都滋味 ',
            nameImgUrl: 'https://z1.muscache.cn/im/pictures/user/d4666855-6233-450b-81b0-21617ffca321.jpg?aki_policy=profile_tiny',
            good: 46,
            comment: 7
        },
        {
            imgUrl: 'https://z1.muscache.cn/im/pictures/cc16f184-073f-49c0-a033-5a494ed0a744.jpg?aki_policy=x_large',
            type: '房源',
            city: '上海',
            title: '魔都周末，住进简约浪漫中。 ',
            nameImgUrl: 'https://z1.muscache.cn/im/pictures/user/18de1f45-1ae3-43eb-804a-d7b137de29ca.jpg?aki_policy=profile_tiny',
            good: 45,
            comment: 3
        },
        {
            imgUrl: 'https://z1.muscache.cn/im/pictures/2bc6f4bb-223d-4969-9c67-934c33cd2628.jpg?aki_policy=x_large',
            type: '景点',
            city: '上海',
            title: '张爱玲和胡兰成的“美丽园” ',
            nameImgUrl: 'https://z1.muscache.cn/im/pictures/user/1f0d525b-f34a-4841-aafc-cf391be081df.jpg?aki_policy=profile_tiny',
            good: 31,
            comment: 5
        }
    ];
        this.travelStoryData = data;
        // console.log(data);
      },
      async getAirbnbPlusData () {
        //const { data } = await this.axios.get('/api/airbnbPlus');
        const data = [
        {
            imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/db7e13ba-1ce5-4e21-904e-735272f7e27b.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
            validate: '已验证',
            city: '上海',
            title: '复式老洋房(贵妃浴缸､巨幕影院)近新天地,地铁直达迪士尼',
            price: 389,
            evaluate: 273
        },
        {
            imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/958673c6-63a8-46f6-9cd3-1476e20d492f.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
            validate: '已验证',
            city: '上海',
            title: 'I Fine Stay-华章 衡复文化区独门花园loft 古典新中式 FFC',
            price: 428,
            evaluate: 361
        },
        {
            imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/373eddbd-c5ea-414a-8683-2065671ca4c0.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
            validate: '已验证',
            city: '上海',
            title: '在后现代风格的阳光别墅享受自然逸趣',
            price: 268,
            evaluate: 185
        },
        {
            imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/46f370ae-9cec-45ed-aa0d-a2f492782457.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
            validate: '已验证',
            city: '上海',
            title: '前往迪斯尼十分方便的极简北欧风情公寓',
            price: 238,
            evaluate: 175
        },
        {
            imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/cbac6462-e49e-4b16-bb1c-9e0bf907fcdb.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
            validate: '已验证',
            city: '上海',
            title: '空之恋-衡复文化区独门带院阳光房Loft,淮海中路地铁旁',
            price: 266,
            evaluate: 72
        },
        {
            imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/a4932dac-d273-4992-b20b-e1818b54437e.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
            validate: '已验证',
            city: '上海',
            title: '入住精巧别致的Loft,感受静安寺的旧上海气息',
            price: 478,
            evaluate: 124
        },
        {
            imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/db7e13ba-1ce5-4e21-904e-735272f7e27b.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
            validate: '已验证',
            city: '上海',
            title: '复式老洋房(贵妃浴缸､巨幕影院)近新天地,地铁直达迪士尼',
            price: 389,
            evaluate: 273
        },
        {
            imgUrl: 'https://z1.muscache.cn/4ea/air/v2/pictures/958673c6-63a8-46f6-9cd3-1476e20d492f.jpg?t=r:w1200-h720-sfit,e:fjpg-c90',
            validate: '已验证',
            city: '上海',
            title: 'I Fine Stay-华章 衡复文化区独门花园loft 古典新中式 FFC',
            price: 428,
            evaluate: 361
        }
    ];
        this.airbnbPlusData = data;
        // console.log(data);
      },
      async getExperienceData () {
        //const { data } = await this.axios.get('/api/experience');
        const data =  [
        {
            imgUrl: 'https://a0.muscache.com/im/pictures/de918bc7-5586-47c3-81db-8d43a5ce58a6.jpg?aki_policy=large',
            type: '动物保护',
            city: '上海',
            title: '与边牧@哈利和建筑师@PG一起逛上海老城，体验上海味道~',
            price: 99,
            score: 4.98,
            comment: 191
        },
        {
            imgUrl: 'https://a0.muscache.com/im/pictures/2071272a-4b0a-4506-b1cd-1adb0a268027.jpg?aki_policy=large',
            type: '摄影艺术',
            city: '上海',
            title: 'Shanghai Through My Lens',
            price: 329,
            score: 4.69,
            comment: 256
        },
        {
            imgUrl: 'https://a0.muscache.com/im/pictures/e20d9961-1193-473c-b016-52583dbb551a.jpg?aki_policy=large',
            type: '烘焙',
            city: '上海',
            title: '弄堂里跟着法国蓝带毕业的老师做纯正可颂面包',
            price: 198,
            score: 4.92,
            comment: 202
        },
        {
            imgUrl: 'https://a0.muscache.com/im/pictures/13e4d8a4-0fa8-43e6-92d1-504bba05a00c.jpg?aki_policy=large',
            type: '学习调酒',
            city: '上海',
            title: '变身专业调酒师，自制专属鸡尾酒',
            price: 218,
            score: 4.99,
            comment: 152
        },
        {
            imgUrl: 'https://a0.muscache.com/im/pictures/2563fbce-1a34-4d7a-95e8-3d23c46faa53.jpg?aki_policy=large',
            type: '骑车游览',
            city: '上海',
            title: 'Best of Shanghai Bike & Food Tour',
            price: 455,
            score: 4.90,
            comment: 124
        },
        {
            imgUrl: 'https://a0.muscache.com/im/pictures/8a03eed7-670f-47f1-bd0b-480cf85d2267.jpg?aki_policy=large',
            type: '烹饪课',
            city: '上海',
            title: '学做小笼包',
            price: 346,
            score: 4.95,
            comment: 124
        },
        {
            imgUrl: 'https://a0.muscache.com/im/pictures/b161ddc9-bf48-42d8-b17a-a91a5335ae47.jpg?aki_policy=large',
            type: '烘焙',
            city: '上海',
            title: '弄堂里的法式甜点课-蓝带老师',
            price: 259,
            score: 4.95,
            comment: 124
        },
        {
            imgUrl: 'https://a0.muscache.com/im/pictures/4ca5876a-cb40-49dd-8b08-cd1bbafffe8e.jpg?aki_policy=large',
            type: '设计风采',
            city: '上海',
            title: 'Discover Art Deco of Shanghai 1930s',
            price: 298,
            score: 4.96,
            comment: 104
        }
    ];
        this.experienceData = data;
        // console.log(data);
      }
    },
    mounted () {
      this.getSwiperData();
      this.getSearchChoiceData();
      this.getRecentBrowseData();
      this.getDiscountData();
      this.getSpringTripData();
      this.getHotPlaceData();
      this.getTravelStoryData();
      this.getAirbnbPlusData();
      this.getExperienceData();
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
