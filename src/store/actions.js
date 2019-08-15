const actions = {
    // 用户登录
  // 这里先来一个驱动LOGIN的东西就叫login吧
  login ({commit}) {
    commit('LOGIN')
  },
    // 用户登出
    logout ({commit}) {
      commit('LOGOUT')
    },
};

export default actions;
