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
    state.orderDate.splice(0, 1);
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
