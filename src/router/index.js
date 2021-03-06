import Vue from 'vue';
import Router from 'vue-router';
// 引入前端组件
import Category from '@/view/Category';
import Datail from '@/view/Datail';
import Order from '@/view/Order';
import SceneOrder from '@/view/SceneOrder';
import SceneDetail from '@/view/SceneDetail';
// 引入公共组件
import Login from '@/view/Login';
import Register from '@/view/Register';
import HotelInfo from '@/view/HotelInfo';
import SceneInfo from '@/view/SceneInfo';
import HotelComment from '@/view/HotelComment';
import SceneComment from '@/view/SceneComment';
Vue.use(Router);

export default new Router({
 // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
     
    },
    {
      path: '/index',
      name: 'Index',
      component:resolve =>{require(['@/view/Index'],resolve)}
    },
    {
      //登录
      path: '/login',
      name: 'Login',
      component: Login,
      hidden: true,
    },
    {
      //注册
      path: '/register',
      name: 'Register',
      component: Register,
      hidden: true,
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/datail/:id',
      name: 'Datail',
      component: Datail,
      props: true
    },
    {
      path: '/scenedetail/:id',
      name: 'SceneDetail',
      component: SceneDetail,
      props: true
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/sceneOrder',
      name: 'SceneOrder',
      component: SceneOrder
    },
    {
      path: '/sceneInfo',
      name: 'SceneInfo',
      component: SceneInfo
    },
    {
      path: '/hotelInfo',
      name: 'HotelInfo',
      component: HotelInfo
    },
    {
      path: '/hotelComment/:index',
      name: 'HotelComment',
      component: HotelComment,
    },
    {
      path: '/sceneComment/:index',
      name: 'SceneComment',
      component: SceneComment,
    },
  ]
});
