import Vue from 'vue';

const mutations = {
  // 用户登录
  LOGIN (state) {
    let addr = sessionStorage.getItem('addr')
    let username = sessionStorage.getItem('username')
  },
  // 用户登出
  LOGOUT (state) {
    let addr  = ''
  },
  addOrderData (state, obj) {
    console.log(state.orderDate)
    state.orderDate.splice(0, 1);
    // Vue.set(obj.data,"totalPrice",obj.totalPrice);
    // Vue.set(obj.data, 'hotel', obj.hotel);
    // Vue.set(obj.data, 'OTA', obj.OTA);
    // Vue.set(obj.data, 'roomType', obj.roomType);
    Vue.set(obj.data, 'adultCount', obj.adultCount);
    Vue.set(obj.data, 'babyCount', obj.babyCount);
    Vue.set(obj.data, 'childrenCount', obj.childrenCount);
    Vue.set(obj.data, 'startTime', obj.startTime);
    Vue.set(obj.data, 'endTime', obj.endTime);
    state.orderDate.push(obj.data);
    console.log(state.orderDate);
  }
};
export default mutations;
